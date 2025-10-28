"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

const prizes = [
  {
    name: "innate bots",
    logo: "/sponsors/innate.png",
    amount: "$1,000 + mars robot",
    track: "robotics",
    angle: 0,
  },
  {
    name: "omi ai",
    logo: "/sponsors/omi.png",
    amount: "$1,000 + 10 omis",
    track: "consumer hardware",
    angle: 1,
  },
  {
    name: "osmosis ai",
    logo: "/sponsors/osmosis.jpeg",
    amount: "$1,000",
    track: "rl",
    angle: 2,
  },
  {
    name: "sorce jobs",
    logo: "/sponsors/sorce.png",
    amount: "$1,000",
    track: "computer use agent",
    angle: 3,
  },
  {
    name: "adam cad",
    logo: "/sponsors/adamcad.png",
    amount: "$1,000",
    track: "personal manufacturing",
    angle: 4,
  },
  {
    name: "supermemory ai",
    logo: "/sponsors/supermemory.png",
    amount: "$1,000",
    track: "personal memory",
    angle: 5,
  },
  {
    name: "upfront capital",
    logo: "/sponsors/upfront.png",
    amount: "$1,000",
    track: "startup potential",
    angle: 6,
  },
];

function NetworkNode({
  position,
  index,
}: {
  position: [number, number, number];
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 + index;
      meshRef.current.scale.setScalar(
        1 + Math.sin(state.clock.getElapsedTime() * 2 + index) * 0.1,
      );
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  const positions = useMemo(() => {
    return prizes.map((_, i) => {
      const radius = 3;
      const angle = (i / prizes.length) * Math.PI * 2;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * 0.5,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <group ref={linesRef}>
      {positions.map((pos, i) => (
        <group key={`network-${prizes[i].name}`}>
          <NetworkNode position={pos} index={i} />
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 0, 0, ...pos])}
                itemSize={3}
                args={[new Float32Array([0, 0, 0, ...pos]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </line>
        </group>
      ))}
    </group>
  );
}

export default function PrizeShowcase() {
  return (
    <div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 relative h-[600px]">
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
          <ConnectionLines />
          <fog attach="fog" args={["#000000", 4, 12]} />
        </Canvas>

      </div>

      <div className="lg:col-span-7 space-y-4">
        {prizes.map((prize, index) => (
          <div
            key={prize.name}
            className="group relative border-l-2 border-white/20 hover:border-white/40 pl-6 py-4 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xs font-mono text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-2xl font-bold group-hover:translate-x-1 transition-transform">
                    {prize.amount}
                  </div>
                </div>

                <div className="text-lg font-bold mb-1 lowercase">
                  {prize.track}
                </div>
                <div className="text-sm text-white/40 font-mono mb-2">
                  {prize.name}
                </div>
              </div>

              <div className="w-20 h-20 flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center">
                <Image
                  src={prize.logo}
                  alt={prize.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute left-0 top-1/2 w-4 h-[2px] bg-white/20 group-hover:w-6 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
