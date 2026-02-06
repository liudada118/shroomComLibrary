import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import processedUnified from './processed_unified.json';

// Helper function for bicubic interpolation
function cubic(p, x) {
  return p[1] + 0.5 * x * (p[2] - p[0] + x * (2.0 * p[0] - 5.0 * p[1] + 4.0 * p[2] - p[3] + x * (3.0 * (p[1] - p[2]) + p[3] - p[0])));
}

function bicubicInterpolate(p, x, y) {
  const arr = new Array(4);
  arr[0] = cubic(p[0], y);
  arr[1] = cubic(p[1], y);
  arr[2] = cubic(p[2], y);
  arr[3] = cubic(p[3], y);
  return cubic(arr, x);
}

function upscaleData(input, scale = 4) {
  const srcHeight = input.length;
  const srcWidth = input[0].length;
  const dstHeight = srcHeight * scale;
  const dstWidth = srcWidth * scale;
  
  const output = new Float32Array(dstWidth * dstHeight);
  
  const window = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  for (let y = 0; y < dstHeight; y++) {
    for (let x = 0; x < dstWidth; x++) {
      const srcX = x / scale;
      const srcY = y / scale;
      
      const xInt = Math.floor(srcX);
      const yInt = Math.floor(srcY);
      const xFrac = srcX - xInt;
      const yFrac = srcY - yInt;
      
      for (let m = -1; m <= 2; m++) {
        for (let n = -1; n <= 2; n++) {
          let py = yInt + m;
          let px = xInt + n;
          
          if (py < 0) py = 0;
          if (py >= srcHeight) py = srcHeight - 1;
          if (px < 0) px = 0;
          if (px >= srcWidth) px = srcWidth - 1;
          
          window[m + 1][n + 1] = input[py][px];
        }
      }
      
      let val = bicubicInterpolate(window, xFrac, yFrac);
      val = Math.max(0, Math.min(val, 255));
      
      output[y * dstWidth + x] = val;
    }
  }
  
  return output;
}

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
    float offset = 1.0 / 128.0;
    float p = texture2D(uPressureMap, uv).r;
    if (uSmoothness < 0.01) return p;
    
    float pL = texture2D(uPressureMap, uv + vec2(-offset, 0.0)).r;
    float pR = texture2D(uPressureMap, uv + vec2(offset, 0.0)).r;
    float pD = texture2D(uPressureMap, uv + vec2(0.0, -offset)).r;
    float pU = texture2D(uPressureMap, uv + vec2(0.0, offset)).r;
    float pTL = texture2D(uPressureMap, uv + vec2(-offset, offset)).r;
    float pTR = texture2D(uPressureMap, uv + vec2(offset, offset)).r;
    float pDL = texture2D(uPressureMap, uv + vec2(-offset, -offset)).r;
    float pDR = texture2D(uPressureMap, uv + vec2(offset, -offset)).r;
    float avg = (p + pL + pR + pD + pU + pTL + pTR + pDL + pDR) / 9.0;
    return mix(p, avg, uSmoothness);
}

void main() {
  vUv = uv;
  vec3 objectNormal = normal;
  
  if (objectNormal.z > 0.5) {
      float pressure = getSmoothedPressure(uv);
      vPressure = pressure;
      vec3 newPosition = position;
      float maxDisplacement = uThickness * 0.95;
      float displacement = min(pressure * uDisplacementScale, maxDisplacement);
      newPosition.z -= displacement;
      
      float offset = 1.0 / 128.0;
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
  float r = clamp(1.5 - abs(2.0 * t - 1.0) * 2.0, 0.0, 1.0);
  float g = clamp(1.5 - abs(2.0 * t - 0.5) * 2.0, 0.0, 1.0);
  float b = clamp(1.5 - abs(2.0 * t - 0.0) * 2.0, 0.0, 1.0);
  return vec3(r, g, b);
}

void main() {
  if (uEnableClipping && vUv.y < uClipLevel) discard;

  vec3 normal = normalize(vNormal);
  if (!gl_FrontFacing) normal = -normal;

  vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0)); 
  vec3 ambient = vec3(0.3);
  float diff = max(dot(normal, lightDir), 0.0);
  vec3 diffuse = diff * vec3(0.7);
  
  vec3 viewDir = normalize(vViewPosition);
  vec3 reflectDir = reflect(-lightDir, normal);
  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
  vec3 specular = spec * vec3(0.1);

  vec3 surfaceColor = uBaseColor;
  
  if (!gl_FrontFacing) {
      surfaceColor = vec3(0.4, 0.4, 0.4);
  } else if (uShowHeatmap && vPressure > 0.01) {
      vec3 heatColor = getHeatmapColor(vPressure);
      surfaceColor = mix(surfaceColor, heatColor, 0.9);
  }

  if (uEnableClipping && abs(vUv.y - uClipLevel) < 0.005) {
      surfaceColor = vec3(1.0, 0.2, 0.2);
      ambient = vec3(1.0);
  }

  vec3 finalColor = (ambient + diffuse) * surfaceColor + specular;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const buildFallbackData = (size = 64) => {
  const data = new Array(size);
  for (let r = 0; r < size; r++) {
    data[r] = new Array(size);
    for (let c = 0; c < size; c++) {
      const dx = (c - size / 2) / (size / 2);
      const dy = (r - size / 2) / (size / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      data[r][c] = Math.max(0, 255 * (1 - dist));
    }
  }
  return data;
};

const normalizeTo2D = (input, width, height) => {
  if (!Array.isArray(input)) return buildFallbackData(width);
  if (Array.isArray(input[0])) return input;
  const rows = height;
  const cols = width;
  const data = new Array(rows);
  for (let r = 0; r < rows; r++) {
    data[r] = new Array(cols);
    for (let c = 0; c < cols; c++) {
      data[r][c] = input[r * cols + c] ?? 0;
    }
  }
  return data;
};

export function Scene({
  showHeatmap,
  enableClipping,
  clipLevel,
  depthScale,
  smoothness,
  realtimeData,
  sourceData,
  sourceMax,
  upscale = 2
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const textureRef = useRef(null);
  const animationIdRef = useRef(null);
  
  const [isInitialized, setIsInitialized] = useState(false);
  const sourceDataRef = useRef(sourceData);
  const sourceMaxRef = useRef(sourceMax);
  const textureSizeRef = useRef({ width: 128, height: 128, scale: upscale, max: 1 });

  useEffect(() => {
    sourceDataRef.current = sourceData;
    sourceMaxRef.current = sourceMax;
  }, [sourceData, sourceMax]);
  
  // Camera control state
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });
  const spherical = useRef({ radius: 6, phi: Math.PI / 4, theta: 0 });
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 4, 4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(10, 10, 10);
    scene.add(spotLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-10, 5, -10);
    scene.add(pointLight);

    // Create texture
    const baseData = sourceDataRef.current || processedUnified?.data || buildFallbackData(64);
    const rawData = normalizeTo2D(baseData, baseData[0]?.length || 64, baseData.length || 64);
    const max_val = typeof sourceMaxRef.current === 'number'
      ? sourceMaxRef.current
      : (processedUnified?.max_val ?? 255);
    const scale = Math.max(1, Math.round(upscale));
    const width = rawData[0]?.length ? rawData[0].length * scale : 128;
    const height = rawData.length ? rawData.length * scale : 128;
    const size = width * height;
    const data = new Float32Array(size);
    const upscaled = upscaleData(rawData, scale);

    for (let i = 0; i < size; i++) {
      data[i] = (upscaled[i] ?? 0) / max_val;
    }

    textureSizeRef.current = { width, height, scale, max: max_val };
    
    const texture = new THREE.DataTexture(data, width, height, THREE.RedFormat, THREE.FloatType);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    textureRef.current = texture;

    // Create material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uPressureMap: { value: texture },
        uDisplacementScale: { value: depthScale },
        uThickness: { value: 0.15 },
        uShowHeatmap: { value: showHeatmap },
        uBaseColor: { value: new THREE.Color('#eeeeee') },
        uEnableClipping: { value: enableClipping },
        uClipLevel: { value: clipLevel },
        uSmoothness: { value: smoothness }
      },
      side: THREE.DoubleSide
    });
    materialRef.current = material;

    // Create mesh
    const geometry = new THREE.BoxGeometry(2, 2, 0.15, 256, 256, 1);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);
    meshRef.current = mesh;

    // Mouse controls
    const onMouseDown = (e) => {
      isDragging.current = true;
      previousMouse.current = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseUp = () => {
      isDragging.current = false;
    };
    
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - previousMouse.current.x;
      const deltaY = e.clientY - previousMouse.current.y;
      
      spherical.current.theta -= deltaX * 0.01;
      spherical.current.phi -= deltaY * 0.01;
      spherical.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, spherical.current.phi));
      
      previousMouse.current = { x: e.clientX, y: e.clientY };
    };
    
    const onWheel = (e) => {
      spherical.current.radius += e.deltaY * 0.01;
      spherical.current.radius = Math.max(2, Math.min(15, spherical.current.radius));
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('wheel', onWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Update camera position
      const { radius, phi, theta } = spherical.current;
      camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
      camera.position.y = radius * Math.cos(phi);
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
      camera.lookAt(target.current);
      
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

    setIsInitialized(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('wheel', onWheel);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uShowHeatmap.value = showHeatmap;
      materialRef.current.uniforms.uEnableClipping.value = enableClipping;
      materialRef.current.uniforms.uClipLevel.value = clipLevel;
      materialRef.current.uniforms.uDisplacementScale.value = depthScale;
      materialRef.current.uniforms.uSmoothness.value = smoothness;
    }
  }, [showHeatmap, enableClipping, clipLevel, depthScale, smoothness]);

  // Update texture when realtimeData changes
  useEffect(() => {
    const texture = textureRef.current;
    if (!texture || !realtimeData) return;

    const { width, height, scale, max } = textureSizeRef.current;
    const normalized = normalizeTo2D(realtimeData, width / scale, height / scale);
    const upscaledData = upscaleData(normalized, scale);
    const data = texture.image.data;
    
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        const srcIdx = (height - 1 - r) * width + c;
        const val = upscaledData[srcIdx];
        data[r * width + c] = Math.min((val ?? 0) / (max || 1), 1.0);
      }
    }
    texture.needsUpdate = true;
  }, [realtimeData]);

  return (
    <div
      className="w-full h-full relative bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div ref={containerRef} className="w-full h-full" style={{ width: '100%', height: '100%' }} />

      <div className="absolute bottom-4 left-4 text-xs text-gray-400 pointer-events-none">
        <p>Left Click + Drag: Rotate</p>
        <p>Scroll: Zoom</p>
      </div>
    </div>
  );
}
