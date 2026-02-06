import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { upscaleDataSmooth } from '../utils/dataProcessing';

// ==================== Shader Code ====================

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

// ==================== Constants ====================

const TEXTURE_SIZE = 128;
const PAD_SIZE = 0.4;
const THICKNESS = 0.015;

// ==================== Helper: Create single footpad mesh ====================

function createFootpadMesh() {
  const geometry = new THREE.BoxGeometry(
    PAD_SIZE, PAD_SIZE, THICKNESS,
    128, 128, 1
  );

  // Create pressure texture
  const size = TEXTURE_SIZE * TEXTURE_SIZE;
  const data = new Float32Array(size);
  data.fill(0);
  const texture = new THREE.DataTexture(
    data, TEXTURE_SIZE, TEXTURE_SIZE,
    THREE.RedFormat, THREE.FloatType
  );
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uPressureMap: { value: texture },
      uDisplacementScale: { value: 0.1 },
      uThickness: { value: THICKNESS },
      uShowHeatmap: { value: true },
      uBaseColor: { value: new THREE.Color('#f0f0f0') },
      uSmoothness: { value: 0.5 },
    },
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;

  return { mesh, texture, material };
}

// ==================== ThreeScene Component ====================

export default function ThreeScene({
  showHeatmap = true,
  depthScale = 0.1,
  smoothness = 0.5,
  sensorData = {},
  className,
  style
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const footpadsRef = useRef([]);
  const animFrameRef = useRef(null);

  // Initialize Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e0dcd8');
    sceneRef.current = scene;

    // Camera - wider FOV for 1x4 layout
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.01,
      100
    );
    camera.position.set(0, 1.8, 1.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2.1;
    controls.minDistance = 1.0;
    controls.maxDistance = 5;
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight('#fff8f0', 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#fffaf5', 0.8);
    dirLight.position.set(3, 5, 3);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight('#e8f0ff', 0.35);
    fillLight.position.set(-3, 3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight('#fff5e6', 0.2);
    rimLight.position.set(-1.5, 2, 3);
    scene.add(rimLight);

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(8, 4);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: '#e8e4e0',
      metalness: 0.02,
      roughness: 0.85,
      side: THREE.DoubleSide,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    // Highlight area
    const highlightGeometry = new THREE.PlaneGeometry(2.0, 0.8);
    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: '#f0ece8',
      metalness: 0.05,
      roughness: 0.7,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
    highlight.rotation.x = -Math.PI / 2;
    highlight.position.y = 0.002;
    scene.add(highlight);

    // Create 4 footpad meshes in 1x4 seamless layout
    const totalWidth = 4 * PAD_SIZE;
    const startX = -totalWidth / 2 + PAD_SIZE / 2;
    const footpads = [];

    for (let i = 0; i < 4; i++) {
      const { mesh, texture, material } = createFootpadMesh();
      mesh.position.set(startX + i * PAD_SIZE, 0.01, 0);
      scene.add(mesh);
      footpads.push({ mesh, texture, material });
    }

    // Base plate under footpads
    const baseGeometry = new THREE.PlaneGeometry(totalWidth + 0.04, PAD_SIZE + 0.04);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: '#e0e0e0',
      metalness: 0.1,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
    const basePlate = new THREE.Mesh(baseGeometry, baseMaterial);
    basePlate.rotation.x = -Math.PI / 2;
    basePlate.position.set(0, 0.005, 0);
    scene.add(basePlate);

    footpadsRef.current = footpads;

    // Animation loop
    function animate() {
      animFrameRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    function handleResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    footpadsRef.current.forEach(({ material }) => {
      if (material) {
        material.uniforms.uShowHeatmap.value = showHeatmap;
        material.uniforms.uDisplacementScale.value = depthScale;
        material.uniforms.uSmoothness.value = smoothness;
      }
    });
  }, [showHeatmap, depthScale, smoothness]);

  // Update texture data when sensorData changes
  useEffect(() => {
    const keys = ['sensor1', 'sensor2', 'sensor3', 'sensor4'];
    keys.forEach((key, idx) => {
      const footpad = footpadsRef.current[idx];
      if (!footpad) return;

      const data = sensorData[key];
      if (data && data.length === 64) {
        const upscaledData = upscaleDataSmooth(data, TEXTURE_SIZE);
        const texData = footpad.texture.image.data;

        for (let r = 0; r < TEXTURE_SIZE; r++) {
          for (let c = 0; c < TEXTURE_SIZE; c++) {
            const srcIdx = (TEXTURE_SIZE - 1 - r) * TEXTURE_SIZE + c;
            const val = upscaledData[srcIdx];
            texData[r * TEXTURE_SIZE + c] = Math.min(val / 255.0, 1.0);
          }
        }
        footpad.texture.needsUpdate = true;
      }
    });
  }, [sensorData]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #d4d0cc 0%, #e8e4e0 50%, #d8d4d0 100%)',
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          fontSize: 12,
          color: 'rgba(107,114,128,0.6)',
          pointerEvents: 'none',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}
