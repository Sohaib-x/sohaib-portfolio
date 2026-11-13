import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Server, Mountain, Layers } from 'lucide-react';

export default function ServerCore3D() {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState('dc'); // 'dc' | 'ue5' | 'network'
  const [coreTemp, setCoreTemp] = useState(34.2);
  const [isDragging, setIsDragging] = useState(false);

  const sceneRef = useRef(null);
  const objectsGroupRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoreTemp((prev) => +(33.8 + Math.random() * 0.7).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 5, 28);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    currentMount.appendChild(renderer.domElement);

    // Aesthetic, Balanced Dark-Theme Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf8fafc, 1.8);
    keyLight.position.set(15, 20, 15);
    scene.add(keyLight);

    const accentSky = new THREE.PointLight(0x0ea5e9, 2.2, 45);
    accentSky.position.set(-12, -8, 12);
    scene.add(accentSky);

    const accentIndigo = new THREE.PointLight(0x6366f1, 1.8, 45);
    accentIndigo.position.set(10, -10, -10);
    scene.add(accentIndigo);

    const centralGroup = new THREE.Group();
    scene.add(centralGroup);
    objectsGroupRef.current = centralGroup;

    let currentMeshes = [];

    const buildModeMeshes = (mode) => {
      currentMeshes.forEach((mesh) => centralGroup.remove(mesh));
      currentMeshes = [];

      if (mode === 'dc') {
        // --- 1. ENTERPRISE DATA CENTER CHASSIS & CORE ---
        // Outer chassis cage (Clean titanium lines)
        const cageGeo = new THREE.BoxGeometry(10, 10, 10);
        const cageWire = new THREE.WireframeGeometry(cageGeo);
        const cageMat = new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.35,
        });
        const cageLine = new THREE.LineSegments(cageWire, cageMat);
        centralGroup.add(cageLine);
        currentMeshes.push(cageLine);

        // Processor Core Node (Slate Titanium)
        const coreGeo = new THREE.OctahedronGeometry(4.0, 0);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          roughness: 0.25,
          metalness: 0.9,
          emissive: 0x0284c7,
          emissiveIntensity: 0.15,
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        centralGroup.add(coreMesh);
        currentMeshes.push(coreMesh);

        // Geometric Edge Accent
        const coreWireGeo = new THREE.WireframeGeometry(coreGeo);
        const coreWireMat = new THREE.LineBasicMaterial({
          color: 0x7dd3fc,
          transparent: true,
          opacity: 0.65,
        });
        const coreWireLine = new THREE.LineSegments(coreWireGeo, coreWireMat);
        centralGroup.add(coreWireLine);
        currentMeshes.push(coreWireLine);

        // Dual Orbital Precision Rings
        const ring1Geo = new THREE.TorusGeometry(7.5, 0.05, 16, 100);
        const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
        const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
        ring1.rotation.x = Math.PI / 3;
        centralGroup.add(ring1);
        currentMeshes.push(ring1);

        const ring2Geo = new THREE.TorusGeometry(8.8, 0.05, 16, 100);
        const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x818cf8 });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2.rotation.y = Math.PI / 4;
        centralGroup.add(ring2);
        currentMeshes.push(ring2);

        // Server Chassis Plates
        const plateGeo = new THREE.BoxGeometry(11, 0.35, 11);
        const plateMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.85,
          roughness: 0.3,
        });
        const topPlate = new THREE.Mesh(plateGeo, plateMat);
        topPlate.position.y = 5.2;
        const btmPlate = new THREE.Mesh(plateGeo, plateMat);
        btmPlate.position.y = -5.2;
        centralGroup.add(topPlate);
        centralGroup.add(btmPlate);
        currentMeshes.push(topPlate, btmPlate);

        // Crisp Status Indicators
        const ledGeo = new THREE.SphereGeometry(0.16, 8, 8);
        const ledMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });

        [
          [-5, 5.2, 5],
          [5, 5.2, 5],
          [-5, -5.2, 5],
          [5, -5.2, 5],
        ].forEach((pos) => {
          const led = new THREE.Mesh(ledGeo, ledMat);
          led.position.set(...pos);
          centralGroup.add(led);
          currentMeshes.push(led);
        });

      } else if (mode === 'ue5') {
        // --- 2. UE5 KUPWARA TERRAIN WIREFRAME ---
        const terrainGeo = new THREE.PlaneGeometry(16, 16, 24, 24);
        const pos = terrainGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i);
          const vy = pos.getY(i);
          const vz = Math.sin(vx * 0.6) * Math.cos(vy * 0.6) * 2.2 + Math.sin(vx * 1.5) * 0.6;
          pos.setZ(i, vz);
        }
        terrainGeo.computeVertexNormals();

        const terrainMat = new THREE.MeshStandardMaterial({
          color: 0x111827,
          wireframe: true,
          emissive: 0x6366f1,
          emissiveIntensity: 0.25,
          roughness: 0.4,
          metalness: 0.8,
        });
        const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
        terrainMesh.rotation.x = -Math.PI / 2.5;
        centralGroup.add(terrainMesh);
        currentMeshes.push(terrainMesh);

        // Target Focal Marker
        const ringGeo = new THREE.RingGeometry(1.4, 1.6, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          side: THREE.DoubleSide,
        });
        const marker = new THREE.Mesh(ringGeo, ringMat);
        marker.position.set(0, 2.5, 0);
        marker.rotation.x = -Math.PI / 2.5;
        centralGroup.add(marker);
        currentMeshes.push(marker);

        // Niagara Particle Cluster
        const niagaraCount = 60;
        const nGeo = new THREE.BufferGeometry();
        const nPos = new Float32Array(niagaraCount * 3);
        for (let i = 0; i < niagaraCount * 3; i++) {
          nPos[i] = (Math.random() - 0.5) * 12;
        }
        nGeo.setAttribute('position', new THREE.BufferAttribute(nPos, 3));
        const nMat = new THREE.PointsMaterial({
          color: 0xf59e0b,
          size: 0.3,
          transparent: true,
          opacity: 0.7,
        });
        const niagaraParticles = new THREE.Points(nGeo, nMat);
        centralGroup.add(niagaraParticles);
        currentMeshes.push(niagaraParticles);

      } else {
        // --- 3. DISTRIBUTED CLOUD LATTICE ---
        const sphereGeo = new THREE.IcosahedronGeometry(6.5, 1);
        const sphereMat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          wireframe: true,
          emissive: 0x0ea5e9,
          emissiveIntensity: 0.25,
        });
        const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
        centralGroup.add(sphereMesh);
        currentMeshes.push(sphereMesh);

        const nodeGeo = new THREE.SphereGeometry(0.3, 8, 8);
        const nodeMat = new THREE.MeshBasicMaterial({ color: 0x2dd4bf });

        const vertPos = sphereGeo.attributes.position;
        for (let i = 0; i < vertPos.count; i += 3) {
          const node = new THREE.Mesh(nodeGeo, nodeMat);
          node.position.set(vertPos.getX(i), vertPos.getY(i), vertPos.getZ(i));
          centralGroup.add(node);
          currentMeshes.push(node);
        }

        const innerGeo = new THREE.SphereGeometry(2.5, 16, 16);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          emissive: 0x6366f1,
          emissiveIntensity: 0.3,
          roughness: 0.3,
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        centralGroup.add(innerMesh);
        currentMeshes.push(innerMesh);
      }
    };

    buildModeMeshes(activeMode);

    let isUserInteracting = false;
    let prevMousePos = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isUserInteracting = true;
      setIsDragging(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      if (!isUserInteracting) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      centralGroup.rotation.y += deltaX * 0.008;
      centralGroup.rotation.x += deltaY * 0.008;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isUserInteracting = false;
      setIsDragging(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isUserInteracting) {
        centralGroup.rotation.y += 0.004;
        centralGroup.rotation.x += Math.sin(elapsedTime * 0.5) * 0.001;
      }

      centralGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.3;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeMode]);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-xl overflow-hidden group">
      
      {/* 3D Canvas with Responsive Heights */}
      <div
        ref={mountRef}
        className={`w-full h-[300px] sm:h-[380px] lg:h-[420px] cursor-grab active:cursor-grabbing transition-opacity duration-300 ${
          isDragging ? 'opacity-95' : 'opacity-100'
        }`}
      />

      {/* Top 3D Control Header */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 backdrop-blur-md text-[11px] font-mono text-slate-200 pointer-events-auto shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-sky-300 font-medium">NTC_NODE::01</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">{coreTemp}°C</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[11px] font-mono text-slate-300 pointer-events-auto backdrop-blur-sm">
          <RotateCw className="w-3 h-3 text-sky-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>Interactive Orbit</span>
        </div>
      </div>

      {/* Mode Switcher Tabs - Mobile Touch Friendly */}
      <div className="absolute bottom-3 left-3 right-3 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between gap-1 shadow-lg">
        <div className="flex items-center gap-1 overflow-x-auto py-0.5 w-full sm:w-auto">
          <button
            onClick={() => setActiveMode('dc')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeMode === 'dc'
                ? 'bg-sky-600 text-white font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Data Center</span>
          </button>

          <button
            onClick={() => setActiveMode('ue5')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeMode === 'ue5'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Mountain className="w-3.5 h-3.5" />
            <span>UE5 3D</span>
          </button>

          <button
            onClick={() => setActiveMode('network')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeMode === 'network'
                ? 'bg-teal-600 text-white font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Cloud Network</span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 pr-2">
          <span className="text-sky-400 font-semibold">WEBGL</span>
          <span className="text-slate-600">•</span>
          <span>60 FPS</span>
        </div>
      </div>

    </div>
  );
}
