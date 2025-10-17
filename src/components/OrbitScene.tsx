"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const sponsors = [
  "Osmosis AI",
  "Sorce Jobs",
  "Adam CAD",
  "Supermemory AI",
  "Innate Bots",
  "Upfront Capital",
  "OMI AI",
  "Modal",
  "Exa AI",
  "MorphLLM",
  "Mission St Capital",
  "Augmentation Lab",
];

function WireframeOrbit() {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRadius = 5;
  const tiltAngle = Math.PI / 3.5;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  const positions = useMemo(() => {
    return sponsors.map((_, i) => {
      const angle = (i / sponsors.length) * Math.PI * 2;
      return {
        x: Math.cos(angle) * orbitRadius,
        z: Math.sin(angle) * orbitRadius,
        angle,
      };
    });
  }, []);

  return (
    <group ref={groupRef} rotation={[tiltAngle, 0, 0]}>
      {positions.map((pos, i) => (
        <group key={sponsors[i]} position={[pos.x, 0, pos.z]}>
          <mesh>
            <octahedronGeometry args={[0.25, 0]} />
            <meshBasicMaterial
              color="#ffffff"
              wireframe
              transparent
              opacity={0.6}
            />
          </mesh>
          <pointLight color="#ffffff" intensity={0.3} distance={2} />
        </group>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbitRadius, 0.015, 6, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbitRadius * 1.15, 0.01, 4, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbitRadius * 0.85, 0.01, 4, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -state.clock.getElapsedTime() * 0.12;
      innerRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.3, 16, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      <pointLight color="#ffffff" intensity={1.5} distance={10} />
    </group>
  );
}

function FieldLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const curves = useMemo(() => {
    const curveArray = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const points = [];
      for (let j = 0; j <= 50; j++) {
        const t = j / 50;
        const spiralAngle = angle + t * Math.PI * 4;
        const spiralRadius = radius * (1 - t * 0.3);
        points.push(
          new THREE.Vector3(
            Math.cos(spiralAngle) * spiralRadius,
            (t - 0.5) * 6,
            Math.sin(spiralAngle) * spiralRadius,
          ),
        );
      }
      curveArray.push(new THREE.CatmullRomCurve3(points));
    }
    return curveArray;
  }, []);

  return (
    <group ref={linesRef}>
      {curves.map((curve) => {
        const curveId = `field-line-${curve.points[0].x}-${curve.points[0].y}`;
        return (
          <mesh key={curveId}>
            <tubeGeometry args={[curve, 50, 0.005, 3]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
          </mesh>
        );
      })}
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(particles, 3));
    return geom;
  }, [particles]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function OrbitScene() {
  return (
    <div className="relative w-full h-screen">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#000000"]} />
        <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={45} />
        <ParticleField />
        <FieldLines />
        <CentralCore />
        <WireframeOrbit />
        <fog attach="fog" args={["#000000", 8, 25]} />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative animate-pulse-subtle">
          <div className="absolute inset-[-40px] bg-white/5 blur-3xl rounded-full" />
          <Image
            src="/rev_logo.png"
            alt="rev"
            width={180}
            height={180}
            className="relative z-10 mix-blend-screen opacity-90"
            priority
          />
        </div>
      </div>
    </div>
  );
}
