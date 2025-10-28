"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const prizes = [
  {
    name: "innate bots",
    logo: "/sponsors/innate.png",
    amount: "$1,000 + mars robot",
    track: "robotics",
  },
  {
    name: "omi ai",
    logo: "/sponsors/omi.png",
    amount: "$1,000 + 10 omis",
    track: "consumer hardware",
  },
  {
    name: "osmosis ai",
    logo: "/sponsors/osmosis.jpeg",
    amount: "$1,000",
    track: "best rl hack",
  },
  {
    name: "sorce jobs",
    logo: "/sponsors/sorce.png",
    amount: "$1,000",
    track: "computer use agent",
  },
  {
    name: "adam cad",
    logo: "/sponsors/adamcad.png",
    amount: "$1,000",
    track: "personal manufacturing",
  },
  {
    name: "supermemory ai",
    logo: "/sponsors/supermemory.png",
    amount: "$1,000",
    track: "personal memory",
  },
  {
    name: "upfront capital",
    logo: "/sponsors/upfront.png",
    amount: "$1,000",
    track: "startup potential",
  },
  {
    name: "mission st capital",
    logo: "/sponsors/missionstcapital.jpeg",
    amount: "tba",
    track: "tba",
  },
];

export default function PrizeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % prizes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisiblePrizes = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + prizes.length) % prizes.length;
      visible.push({ ...prizes[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="relative h-[400px] overflow-hidden border border-white/20 bg-white/[0.01]">
      <div className="absolute inset-0 flex items-center justify-center">
        {getVisiblePrizes().map((prize) => {
          const isCurrent = prize.offset === 0;
          const opacityClass = isCurrent ? "opacity-100" : "opacity-30";
          const scaleClass = isCurrent ? "scale-100" : "scale-85";
          const translateY = prize.offset * 120;
          const blur = isCurrent ? "blur-0" : "blur-sm";

          return (
            <div
              key={`${prize.name}-${prize.offset}`}
              className={`absolute transition-all duration-700 ${blur} ${opacityClass} ${scaleClass}`}
              style={{ transform: `translateY(${translateY}px)` }}
            >
              <div className="flex items-center gap-8 px-12">
                <div className="w-32 h-32 flex-shrink-0 border border-white/20 bg-white/5 flex items-center justify-center p-4 rounded-lg">
                  <Image
                    src={prize.logo}
                    alt={prize.name}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="min-w-[400px]">
                  <div className="text-5xl font-bold mb-3">{prize.amount}</div>
                  <div className="text-xl font-bold mb-2 lowercase">
                    {prize.track}
                  </div>
                  <div className="text-sm text-white/40 font-mono lowercase">
                    {prize.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {prizes.map((prize, i) => (
          <button
            key={prize.name}
            type="button"
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-8" : "bg-white/30"
            }`}
            aria-label={`go to ${prize.track} prize`}
          />
        ))}
      </div>
    </div>
  );
}
