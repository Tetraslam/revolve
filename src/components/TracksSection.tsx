"use client";

import { useEffect, useRef } from "react";

const tracks = [
  {
    name: "ai & ml",
    description: "continual learning, multimodal reasoning, reinforcement learning",
    examples: "train a GLM-4.6 LoRA for CUDA kernels, write a gnn which predicts downstream economic effects of natural disasters",
  },
  {
    name: "hardware & robotics",
    description: "mechatronics, embedded systems, drones, personal manufacturing",
    examples: "build a drone which can manipulate ropes, train a vla on a robot arm to pour drinks",
  },
  {
    name: "systems & infrastructure",
    description: "foundational compute, compilers, programming languages",
    examples: "build a DSL for chemical universe simulation, write a metaprogram for nim which optimizes for rendering 3d graphics",
  },
  {
    name: "games & consumer apps",
    description: "memory augmentation, creative tools, videogames, interactive media",
    examples: "ai video editing app, zombie apocalypse game where the zombies can reason about how to reach you using llms",
  },
];

export default function TracksSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const trackCount = tracks.length;

    for (let i = 0; i < trackCount; i++) {
      const angle = (i / trackCount) * Math.PI * 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      nodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: Math.cos(angle) * 0.2,
        vy: Math.sin(angle) * 0.2,
      });
    }

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.002;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      nodes.forEach((node, i) => {
        const angle = (i / trackCount) * Math.PI * 2 + rotation;
        node.x = centerX + Math.cos(angle) * radius;
        node.y = centerY + Math.sin(angle) * radius;

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fillRect(node.x - 3, node.y - 3, 6, 6);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();

        nodes.forEach((otherNode, j) => {
          if (i >= j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius * 1.5) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / (radius * 1.5))})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fillRect(centerX - 2, centerY - 2, 4, 4);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
      <div className="lg:col-span-5 relative h-[500px] border border-white/10 bg-white/[0.01]">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="lg:col-span-7 space-y-8">
        {tracks.map((track, index) => (
          <div key={track.name} className="border-l-2 border-white/20 pl-6 group hover:border-white/40 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-xs font-mono text-white/40">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-3xl font-bold lowercase group-hover:translate-x-1 transition-transform">
                {track.name}
              </h3>
            </div>

            <div className="text-white/60 mb-2 leading-relaxed lowercase">
              {track.description}
            </div>

            <div className="text-sm text-white/40 font-mono lowercase">
              examples: {track.examples}
            </div>

            <div className="absolute left-0 top-1/2 w-4 h-[2px] bg-white/20 group-hover:w-6 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

