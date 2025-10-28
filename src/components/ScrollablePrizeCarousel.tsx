"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const prizes = [
  {
    name: "innate bots",
    url: "https://innate.bot",
    logo: "/sponsors/innate.png",
    amount: "$1,000 + mars robot",
    track: "robotics",
  },
  {
    name: "omi ai",
    url: "https://omi.me",
    logo: "/sponsors/omi.png",
    amount: "$1,000 + 10 omis",
    track: "consumer hardware",
  },
  {
    name: "osmosis ai",
    url: "https://osmosis.ai",
    logo: "/sponsors/osmosis.jpeg",
    amount: "$1,000",
    track: "best rl hack",
  },
  {
    name: "sorce jobs",
    url: "https://sorce.jobs",
    logo: "/sponsors/sorce.png",
    amount: "$1,000",
    track: "computer use agent",
  },
  {
    name: "adam cad",
    url: "https://adamcad.com",
    logo: "/sponsors/adamcad.png",
    amount: "$1,000",
    track: "personal manufacturing",
  },
  {
    name: "supermemory ai",
    url: "https://supermemory.ai",
    logo: "/sponsors/supermemory.png",
    amount: "$1,000",
    track: "personal memory",
  },
  {
    name: "upfront capital",
    url: "https://upfront.com",
    logo: "/sponsors/upfront.png",
    amount: "$1,000",
    track: "startup potential",
  },
  {
    name: "mission st capital",
    url: "https://missionstcapital.com",
    logo: "/sponsors/missionstcapital.jpeg",
    amount: "tba",
    track: "tba",
  },
];

export default function ScrollablePrizeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLastInteraction(Date.now());
    setScrollY((prev) => prev + e.deltaY);
  };

  useEffect(() => {
    if (Math.abs(scrollY) > 100) {
      if (scrollY > 0 && currentIndex < prizes.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (scrollY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
      setScrollY(0);
    }
  }, [scrollY, currentIndex]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction;
      if (timeSinceLastInteraction > 3000) {
        setCurrentIndex((prev) => (prev + 1) % prizes.length);
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [lastInteraction]);

  const handlePrev = () => {
    setLastInteraction(Date.now());
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setLastInteraction(Date.now());
    if (currentIndex < prizes.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const getVisiblePrizes = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = currentIndex + i;
      if (index >= 0 && index < prizes.length) {
        visible.push({ ...prizes[index], offset: i, index });
      }
    }
    return visible;
  };

  return (
    <div className="relative">
      <section
        ref={containerRef}
        className="relative h-[450px] overflow-hidden border border-white/20 bg-white/[0.01]"
        aria-label="prize carousel"
        onWheel={handleWheel}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {getVisiblePrizes().map((prize) => {
            const isCurrent = prize.offset === 0;
            const opacityClass = isCurrent ? "opacity-100" : "opacity-30";
            const scaleClass = isCurrent ? "scale-100" : "scale-85";
            const translateY = prize.offset * 140;
            const blur = isCurrent ? "blur-0" : "blur-sm";

            return (
              <div
                key={`${prize.name}-${prize.offset}`}
                className={`absolute transition-all duration-500 ease-out ${blur} ${opacityClass} ${scaleClass} pointer-events-auto`}
                style={{ transform: `translateY(${translateY}px)` }}
              >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 sm:px-12">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 border border-white/20 bg-white/5 flex items-center justify-center p-3 sm:p-4 rounded-lg">
                  <Image
                    src={prize.logo}
                    alt={prize.name}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                    {prize.amount}
                  </div>
                  <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 lowercase">
                    {prize.track}
                  </div>
                  <a
                    href={prize.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-white/40 font-mono lowercase hover:text-white/60 transition-colors underline"
                  >
                    {prize.name} →
                  </a>
                </div>
              </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 border border-white/20 hover:border-white/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center group"
          aria-label="previous prize"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>Up arrow</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === prizes.length - 1}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 border border-white/20 hover:border-white/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center group"
          aria-label="next prize"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>Down arrow</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>

      <div className="mt-6 flex justify-center gap-2">
        {prizes.map((prize, i) => (
          <button
            key={prize.name}
            type="button"
            onClick={() => {
              setCurrentIndex(i);
              setLastInteraction(Date.now());
            }}
            className={`h-1 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-12" : "bg-white/30 w-8"
            }`}
            aria-label={`go to ${prize.track} prize`}
          />
        ))}
      </div>

      <div className="mt-4 text-center text-xs text-white/30 font-mono lowercase">
        <div className="flex items-center justify-center gap-3">
          <span>scroll • click arrows</span>
          <span className="text-white/20">|</span>
          <span>
            {currentIndex + 1} / {prizes.length}
          </span>
        </div>
      </div>
    </div>
  );
}
