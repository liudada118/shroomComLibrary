import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import processedUnified from './processed_unified.json';

// ============= Gaussian Blur and Upscaling Functions =============

function gaussianBlur(input, kernelSize = 5, sigma = 1.5) {
  const height = input.length;
  const width = input[0].length;
  const output = [];
  
  const kernel = [];
  const half = Math.floor(kernelSize / 2);
  let sum = 0;
  
  for (let y = -half; y <= half; y++) {
    const row = [];
    for (let x = -half; x <= half; x++) {
      const val = Math.exp(-(x * x + y * y) / (2 * sigma * sigma));
      row.push(val);
      sum += val;
    }
    kernel.push(row);
  }
  
  for (let y = 0; y < kernelSize; y++) {
    for (let x = 0; x < kernelSize; x++) {
      kernel[y][x] /= sum;
    }
  }
  
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      let val = 0;
      for (let ky = -half; ky <= half; ky++) {
        for (let kx = -half; kx <= half; kx++) {
          let py = Math.max(0, Math.min(height - 1, y + ky));
          let px = Math.max(0, Math.min(width - 1, x + kx));
          val += input[py][px] * kernel[ky + half][kx + half];
        }
      }
      row.push(val);
    }
    output.push(row);
  }
  
  return output;
}

function bilinearInterpolate(input, x, y) {
  const height = input.length;
  const width = input[0].length;
  
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(x0 + 1, width - 1);
  const y1 = Math.min(y0 + 1, height - 1);
  
  const xFrac = x - x0;
  const yFrac = y - y0;
  
  const v00 = input[y0][x0];
  const v10 = input[y0][x1];
  const v01 = input[y1][x0];
  const v11 = input[y1][x1];
  
  const v0 = v00 * (1 - xFrac) + v10 * xFrac;
  const v1 = v01 * (1 - xFrac) + v11 * xFrac;
  
  return v0 * (1 - yFrac) + v1 * yFrac;
}

function upscaleDataSmooth(input, targetSize = 256) {
  const srcHeight = input.length;
  const srcWidth = input[0].length;
  
  const blurred = gaussianBlur(input, 5, 1.2);
  const doubleBlurred = gaussianBlur(blurred, 3, 0.8);
  
  const output = new Float32Array(targetSize * targetSize);
  
  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const srcX = (x / targetSize) * (srcWidth - 1);
      const srcY = (y / targetSize) * (srcHeight - 1);
      
      let val = bilinearInterpolate(doubleBlurred, srcX, srcY);
      val = Math.max(0, Math.min(val, 255));
      
      output[y * targetSize + x] = val;
    }
  }
  
  const upscaled2D = [];
  for (let y = 0; y < targetSize; y++) {
    const row = [];
    for (let x = 0; x < targetSize; x++) {
      row.push(output[y * targetSize + x]);
    }
    upscaled2D.push(row);
  }
  
  const finalBlurred = gaussianBlur(upscaled2D, 7, 2.0);
  
  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      output[y * targetSize + x] = finalBlurred[y][x];
    }
  }
  
  return output;
}

// ============= Shader Code =============

const vertexShader = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform sampler2D uPressureMap;
uniform float uDisplacementScale;
uniform float uThickness;
uniform float uSmoothness;

float getSmoothedPressure(vec2 uv) {
    float texSize = 256.0;
    float offset = 1.0 / texSize;
    
    float p = texture2D(uPressureMap, uv).r;
    
    if (uSmoothness < 0.01) return p;
    
    float kernel[25];
    kernel[0] = 0.003765; kernel[1] = 0.015019; kernel[2] = 0.023792; kernel[3] = 0.015019; kernel[4] = 0.003765;
    kernel[5] = 0.015019; kernel[6] = 0.059912; kernel[7] = 0.094907; kernel[8] = 0.059912; kernel[9] = 0.015019;
    kernel[10] = 0.023792; kernel[11] = 0.094907; kernel[12] = 0.150342; kernel[13] = 0.094907; kernel[14] = 0.023792;
    kernel[15] = 0.015019; kernel[16] = 0.059912; kernel[17] = 0.094907; kernel[18] = 0.059912; kernel[19] = 0.015019;
    kernel[20] = 0.003765; kernel[21] = 0.015019; kernel[22] = 0.023792; kernel[23] = 0.015019; kernel[24] = 0.003765;
    
    float blurred = 0.0;
    int idx = 0;
    
    for (int dy = -2; dy <= 2; dy++) {
        for (int dx = -2; dx <= 2; dx++) {
            vec2 sampleUv = uv + vec2(float(dx) * offset, float(dy) * offset);
            blurred += texture2D(uPressureMap, sampleUv).r * kernel[idx];
            idx++;
        }
    }
    
    float smoothFactor = uSmoothness * 2.0;
    smoothFactor = clamp(smoothFactor, 0.0, 1.0);
    
    return mix(p, blurred, smoothFactor);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      
      vec3 newPosition = position;
      
      float maxDisplacement = uThickness * 0.85;
      float mappedPressure = pow(pressure, 0.7);
      float displacement = min(mappedPressure * uDisplacementScale, maxDisplacement);
      
      newPosition.z -= displacement;
      
      float texSize = 256.0;
      float offset = 2.0 / texSize;
      
      float pL = getSmoothedPressure(uv + vec2(-offset, 0.0));
      float pR = getSmoothedPressure(uv + vec2(offset, 0.0));
      float pD = getSmoothedPressure(uv + vec2(0.0, -offset));
      float pU = getSmoothedPressure(uv + vec2(0.0, offset));
      
      float hL = min(pL * uDisplacementScale, maxDisplacement);
      float hR = min(pR * uDisplacementScale, maxDisplacement);
      float hD = min(pD * uDisplacementScale, maxDisplacement);
      float hU = min(pU * uDisplacementScale, maxDisplacement);
      
      vec3 vT = normalize(vec3(2.0 * offset, 0.0, hL - hR));
      vec3 vB = normalize(vec3(0.0, 2.0 * offset, hD - hU));
      vNormal = normalize(cross(vT, vB));
      
      vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  } else {
      vPressure = 0.0;
      vNormal = normal;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
}
`;

const fragmentShader = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;
uniform bool uEnableClipping;
uniform float uClipLevel;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

void main() {
  if (uEnableClipping && vUv.y < uClipLevel) discard;

  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.005) {
      vec3 heatColor = getHeatmapColor(vPressure);
      float blendFactor = smoothstep(0.0, 0.1, vPressure) * 0.95;
      surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  if (uEnableClipping && abs(vUv.y - uClipLevel) < 0.005) {
      surfaceColor = vec3(1.0, 0.2, 0.2);
      ambient = vec3(1.0);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// Footpad shader (similar but without clipping)
const footpadFragmentShader = `
varying vec2 vUv;
varying float vPressure;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform bool uShowHeatmap;
uniform vec3 uBaseColor;

vec3 getHeatmapColor(float t) {
  t = clamp(t, 0.0, 1.0);
  t = smoothstep(0.0, 1.0, t);
  
  vec3 c0 = vec3(0.0, 0.0, 0.5);
  vec3 c1 = vec3(0.0, 0.5, 1.0);
  vec3 c2 = vec3(0.0, 1.0, 0.5);
  vec3 c3 = vec3(0.5, 1.0, 0.0);
  vec3 c4 = vec3(1.0, 0.8, 0.0);
  vec3 c5 = vec3(1.0, 0.3, 0.0);
  vec3 c6 = vec3(0.5, 0.0, 0.0);
  
  if (t < 0.167) return mix(c0, c1, t / 0.167);
  if (t < 0.333) return mix(c1, c2, (t - 0.167) / 0.166);
  if (t < 0.5) return mix(c2, c3, (t - 0.333) / 0.167);
  if (t < 0.667) return mix(c3, c4, (t - 0.5) / 0.167);
  if (t < 0.833) return mix(c4, c5, (t - 0.667) / 0.166);
  return mix(c5, c6, (t - 0.833) / 0.167);
}

void main() {
  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  
  vec3 ambient = vec3(0.35);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.65);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
  vec3 specular = spec * vec3(0.15);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.005) {
      vec3 heatColor = getHeatmapColor(vPressure);
      float blendFactor = smoothstep(0.0, 0.1, vPressure) * 0.95;
      surfaceColor = mix(surfaceColor, heatColor, blendFactor);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ============= Main Component =============

export function ThreeScene({ 
  showHeatmap = true, 
  enableClipping = false, 
  clipLevel = 0.5, 
  depthScale = 0, 
  smoothness = 0.5, 
  seatData = null, 
  footpadData = null,
  realtimeData = null,
  className,
  style
}) {

  // console.log(seatData ,footpadData ,realtimeData )
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationIdRef = useRef(null);
  
  // Shader materials refs
  const seatMaterialRef = useRef(null);
  const footpadMaterialRef = useRef(null);
  const seatTextureRef = useRef(null);
  const footpadTextureRef = useRef(null);

  const actualSeatData = seatData ?? realtimeData;
  const TEXTURE_SIZE = 256;
  const thickness = 0.015;

  // Initialize scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8e4e0);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0.9, 0.85, 1.3);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.minPolarAngle = Math.PI / 6;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.minDistance = 0.8;
    controls.maxDistance = 3.5;
    controls.target.set(0, 0.38, 0.05);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    // ============= Lighting =============
    
    // Warm ambient lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.5);
    scene.add(ambientLight);

    // Key light - warm tone
    const directionalLight = new THREE.DirectionalLight(0xfffaf5, 0.9);
    directionalLight.position.set(4, 6, 4);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -3;
    directionalLight.shadow.camera.right = 3;
    directionalLight.shadow.camera.top = 3;
    directionalLight.shadow.camera.bottom = -3;
    scene.add(directionalLight);

    // Fill light - cool tone for contrast
    const fillLight = new THREE.DirectionalLight(0xe8f0ff, 0.35);
    fillLight.position.set(-3, 3, -2);
    scene.add(fillLight);

    // Subtle rim light
    const pointLight = new THREE.PointLight(0xfff5e6, 0.2);
    pointLight.position.set(-1.5, 2, 3);
    scene.add(pointLight);

    // ============= Floor =============
    
    // Main floor
    const floorGeometry = new THREE.PlaneGeometry(6, 6);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe8e4e0, 
      metalness: 0.02, 
      roughness: 0.85,
      side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Subtle highlight area
    const highlightGeometry = new THREE.CircleGeometry(0.8, 64);
    const highlightMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xf0ece8, 
      metalness: 0.05, 
      roughness: 0.7,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide 
    });
    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
    highlight.rotation.x = -Math.PI / 2;
    highlight.position.set(0, 0.002, 0.2);
    scene.add(highlight);

    // ============= Chair Model =============
    createChair(scene);

    // ============= Seat Pressure Pad with Shader =============
    const seatTexture = createPressureTexture(TEXTURE_SIZE, processedUnified.data, processedUnified.max_val);
    seatTextureRef.current = seatTexture;

    const seatMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uPressureMap: { value: seatTexture },
        uDisplacementScale: { value: depthScale },
        uThickness: { value: thickness },
        uShowHeatmap: { value: showHeatmap },
        uBaseColor: { value: new THREE.Color('#f5f5f5') },
        uEnableClipping: { value: enableClipping },
        uClipLevel: { value: clipLevel },
        uSmoothness: { value: smoothness }
      },
      side: THREE.DoubleSide
    });
    seatMaterialRef.current = seatMaterial;

    const seatGeometry = new THREE.BoxGeometry(0.45, 0.45, thickness, 128, 128, 1);
    const seatMesh = new THREE.Mesh(seatGeometry, seatMaterial);
    seatMesh.rotation.x = -Math.PI / 2;
    seatMesh.position.set(0, 0.455, 0);
    scene.add(seatMesh);

    // ============= Footpad Pressure Pad with Shader =============
    const footpadTexture = createEmptyTexture(TEXTURE_SIZE);
    footpadTextureRef.current = footpadTexture;

    const footpadMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: footpadFragmentShader,
      uniforms: {
        uPressureMap: { value: footpadTexture },
        uDisplacementScale: { value: depthScale * 0.6 },
        uThickness: { value: thickness },
        uShowHeatmap: { value: showHeatmap },
        uBaseColor: { value: new THREE.Color('#f0f0f0') },
        uSmoothness: { value: smoothness }
      },
      side: THREE.DoubleSide
    });
    footpadMaterialRef.current = footpadMaterial;

    const footpadGeometry = new THREE.BoxGeometry(1.5, 1, thickness, 256, 256, 1);
    const footpadMesh = new THREE.Mesh(footpadGeometry, footpadMaterial);
    footpadMesh.rotation.x = -Math.PI / 2;
    footpadMesh.position.set(0, 0.008, 0.52);
    footpadMesh.scale.set(0.36, 0.42, 1);
    scene.add(footpadMesh);

    // ============= Contact Shadow (simulated) =============
    const shadowGeometry = new THREE.PlaneGeometry(1.2, 1.2);
    const shadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x2d2d2d,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, 0.001, 0);
    scene.add(shadowMesh);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    if (seatMaterialRef.current) {
      seatMaterialRef.current.uniforms.uShowHeatmap.value = showHeatmap;
      seatMaterialRef.current.uniforms.uEnableClipping.value = enableClipping;
      seatMaterialRef.current.uniforms.uClipLevel.value = clipLevel;
      seatMaterialRef.current.uniforms.uDisplacementScale.value = depthScale;
      seatMaterialRef.current.uniforms.uSmoothness.value = smoothness;
    }
    if (footpadMaterialRef.current) {
      footpadMaterialRef.current.uniforms.uShowHeatmap.value = showHeatmap;
      footpadMaterialRef.current.uniforms.uDisplacementScale.value = depthScale * 0.6;
      footpadMaterialRef.current.uniforms.uSmoothness.value = smoothness;
    }
  }, [showHeatmap, enableClipping, clipLevel, depthScale, smoothness]);

  // Update seat texture when data changes
  useEffect(() => {
    if (!seatTextureRef.current || !actualSeatData) return;
    
    const upscaledData = upscaleDataSmooth(actualSeatData, TEXTURE_SIZE);
    const data = seatTextureRef.current.image.data;
    
    for (let r = 0; r < TEXTURE_SIZE; r++) {
      for (let c = 0; c < TEXTURE_SIZE; c++) {
        const srcIdx = (TEXTURE_SIZE - 1 - r) * TEXTURE_SIZE + c;
        const val = upscaledData[srcIdx];
        data[r * TEXTURE_SIZE + c] = Math.min(val / 255.0, 1.0);
      }
    }
    seatTextureRef.current.needsUpdate = true;
  }, [actualSeatData]);

  // Update footpad texture when data changes
  useEffect(() => {
    if (!footpadTextureRef.current || !footpadData) return;
    
    const upscaledData = upscaleDataSmooth(footpadData, TEXTURE_SIZE);
    const data = footpadTextureRef.current.image.data;
    
    for (let r = 0; r < TEXTURE_SIZE; r++) {
      for (let c = 0; c < TEXTURE_SIZE; c++) {
        const srcIdx = (TEXTURE_SIZE - 1 - r) * TEXTURE_SIZE + c;
        const val = upscaledData[srcIdx];
        data[r * TEXTURE_SIZE + c] = Math.min(val / 255.0, 1.0);
      }
    }
    footpadTextureRef.current.needsUpdate = true;
  }, [footpadData]);

  return (
    <div
      className={`w-full h-full relative ${className || ''}`.trim()}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #d4d0cc 0%, #e8e4e0 50%, #d8d4d0 100%)',
        ...style
      }}
    >
      <div ref={containerRef} className="w-full h-full" style={{ width: '100%', height: '100%' }} />
      
      {/* Controls hint */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500/60 pointer-events-none font-light tracking-wide">
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}

// ============= Helper Functions =============

function createPressureTexture(size, rawData, maxVal) {
  const data = new Float32Array(size * size);
  const upscaled = upscaleDataSmooth(rawData, size);
  
  for (let i = 0; i < size * size; i++) {
    data[i] = upscaled[i] / maxVal;
  }
  
  const texture = new THREE.DataTexture(data, size, size, THREE.RedFormat, THREE.FloatType);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

function createEmptyTexture(size) {
  const data = new Float32Array(size * size);
  data.fill(0);
  
  const texture = new THREE.DataTexture(data, size, size, THREE.RedFormat, THREE.FloatType);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

function createChair(scene) {
  const metalColor = 0x1a1a1a;
  const seatColor = 0x3d3d3d;
  const cushionColor = 0x555555;
  
  const metalMaterial = new THREE.MeshStandardMaterial({ 
    color: metalColor, 
    metalness: 0.7, 
    roughness: 0.3 
  });
  const seatMaterial = new THREE.MeshStandardMaterial({ 
    color: seatColor, 
    metalness: 0.2, 
    roughness: 0.8 
  });
  const cushionMaterial = new THREE.MeshStandardMaterial({ 
    color: cushionColor, 
    metalness: 0.1, 
    roughness: 0.9 
  });

  // Seat with rounded edges
  const seatGeometry = new RoundedBoxGeometry(0.44, 0.035, 0.44, 4, 0.012);
  const seat = new THREE.Mesh(seatGeometry, seatMaterial);
  seat.position.set(0, 0.43, 0);
  seat.castShadow = true;
  scene.add(seat);

  // Backrest with rounded edges
  const backrestGeometry = new RoundedBoxGeometry(0.42, 0.48, 0.025, 4, 0.01);
  const backrest = new THREE.Mesh(backrestGeometry, cushionMaterial);
  backrest.position.set(0, 0.72, -0.20);
  backrest.rotation.x = 0.08;
  backrest.castShadow = true;
  scene.add(backrest);

  // Legs with rounded caps
  const legPositions = [
    [-0.18, 0.215, 0.18],
    [0.18, 0.215, 0.18],
    [-0.18, 0.215, -0.18],
    [0.18, 0.215, -0.18]
  ];
  
  legPositions.forEach(pos => {
    const legGroup = new THREE.Group();
    
    // Main leg
    const legGeometry = new THREE.CylinderGeometry(0.012, 0.016, 0.40, 16);
    const leg = new THREE.Mesh(legGeometry, metalMaterial);
    leg.castShadow = true;
    legGroup.add(leg);
    
    // Top cap
    const topCapGeometry = new THREE.SphereGeometry(0.012, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const topCap = new THREE.Mesh(topCapGeometry, metalMaterial);
    topCap.position.y = 0.20;
    legGroup.add(topCap);
    
    // Bottom cap
    const bottomCapGeometry = new THREE.SphereGeometry(0.016, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const bottomCap = new THREE.Mesh(bottomCapGeometry, metalMaterial);
    bottomCap.position.y = -0.20;
    bottomCap.rotation.x = Math.PI;
    legGroup.add(bottomCap);
    
    legGroup.position.set(...pos);
    scene.add(legGroup);
  });

  // Backrest supports with rounded ends
  const supportPositions = [
    [-0.18, 0.58, -0.19],
    [0.18, 0.58, -0.19]
  ];
  
  supportPositions.forEach(pos => {
    const supportGroup = new THREE.Group();
    
    const supportGeometry = new THREE.CylinderGeometry(0.008, 0.008, 0.28, 12);
    const support = new THREE.Mesh(supportGeometry, metalMaterial);
    supportGroup.add(support);
    
    const capGeometry = new THREE.SphereGeometry(0.008, 12, 8);
    const topCap = new THREE.Mesh(capGeometry, metalMaterial);
    topCap.position.y = 0.14;
    supportGroup.add(topCap);
    
    const bottomCap = new THREE.Mesh(capGeometry, metalMaterial);
    bottomCap.position.y = -0.14;
    supportGroup.add(bottomCap);
    
    supportGroup.position.set(...pos);
    scene.add(supportGroup);
  });

  // Armrests with rounded edges
  const armrestGeometry = new RoundedBoxGeometry(0.025, 0.025, 0.28, 4, 0.008);
  const armrestPositions = [
    [-0.24, 0.58, 0.02],
    [0.24, 0.58, 0.02]
  ];
  
  armrestPositions.forEach(pos => {
    const armrest = new THREE.Mesh(armrestGeometry, cushionMaterial);
    armrest.position.set(...pos);
    scene.add(armrest);
  });

  // Armrest supports with rounded ends
  const armSupportPositions = [
    [-0.24, 0.51, -0.08],
    [0.24, 0.51, -0.08]
  ];
  
  armSupportPositions.forEach(pos => {
    const armSupportGroup = new THREE.Group();
    
    const armSupportGeometry = new THREE.CylinderGeometry(0.006, 0.006, 0.12, 12);
    const armSupport = new THREE.Mesh(armSupportGeometry, metalMaterial);
    armSupportGroup.add(armSupport);
    
    const capGeometry = new THREE.SphereGeometry(0.006, 12, 8);
    const topCap = new THREE.Mesh(capGeometry, metalMaterial);
    topCap.position.y = 0.06;
    armSupportGroup.add(topCap);
    
    const bottomCap = new THREE.Mesh(capGeometry, metalMaterial);
    bottomCap.position.y = -0.06;
    armSupportGroup.add(bottomCap);
    
    armSupportGroup.position.set(...pos);
    scene.add(armSupportGroup);
  });
}

export default ThreeScene;
