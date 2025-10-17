"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function RotatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

function FloatingOctahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <RotatingCube position={[-3, 2, -2]} />
        <RotatingCube position={[4, -2, -3]} />
        <FloatingOctahedron position={[2, 1, -1]} />
        <FloatingOctahedron position={[-2, -1, -2]} />
        <fog attach="fog" args={["#000000", 5, 15]} />
      </Canvas>
    </div>
  );
}

