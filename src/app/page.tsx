"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import Countdown from "@/components/Countdown";
import FlickerText from "@/components/FlickerText";
import OrbitScene from "@/components/OrbitScene";
import ParticleField from "@/components/ParticleField";
import ScrollablePrizeCarousel from "@/components/ScrollablePrizeCarousel";
import TechnicalOverlay from "@/components/TechnicalOverlay";
import TracksSection from "@/components/TracksSection";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden relative">
      <div className="film-grain" />
      <div className="scanlines" />

      <section className="relative h-screen overflow-hidden">
        <div className="vignette" />
        <div className="grid-fine" />
        <FlickerText />
        <OrbitScene />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      <section className="relative py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <AnimatedBackground />
        <ParticleField />
        <TechnicalOverlay />
        <div className="grid-technical" />
        <div className="absolute top-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-subtle" />
        <div className="absolute top-1/2 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse-line" />
        <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-line" />

        <svg
          className="absolute top-1/4 left-10 w-32 h-32 animate-spin-slow opacity-5"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <title>Decorative geometric shape</title>
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>

        <svg
          className="absolute bottom-1/4 right-16 w-40 h-40 animate-spin-reverse opacity-5"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <title>Decorative geometric shape</title>
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs tracking-widest lowercase border border-white/20 px-4 py-2">
                <div className="w-2 h-2 bg-white animate-pulse" />
                <span>overview</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight lowercase">
                48 hours.
                <br />
                infinite
                <br />
                possibilities.
              </h2>

              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-white/70">
                <p>
                  Organized by{" "}
                  <a
                    href="https://rev.school"
            target="_blank"
            rel="noopener noreferrer"
                    className="text-white font-semibold underline hover:text-white/80 transition-colors"
                  >
                    rev
                  </a>
                  , Boston's premier hacker community at Northeastern
                  University.
                </p>
                <p>
                  We're
                  bringing robots, GPUs, and boba to fuel the most ambitious
                  builders in Boston for a weekend of pure creation.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  <div className="relative p-4 sm:p-6 border border-white/10">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">$20K+</div>
                    <div className="text-xs text-white/50 lowercase tracking-wider">
                      in prizes
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  <div className="relative p-4 sm:p-6 border border-white/10">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">$1K</div>
                    <div className="text-xs text-white/50 lowercase tracking-wider">
                      <div>per participant</div>
                      <div className="text-[10px] text-white/40 mt-1">gpu + ai + hardware</div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  <div className="relative p-4 sm:p-6 border border-white/10">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">48</div>
                    <div className="text-xs text-white/50 lowercase tracking-wider">
                      hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-white/20 p-8 bg-white/[0.02]">
                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-white/40" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-white/40" />

                <div className="space-y-8">
                  <div>
                    <div className="text-xs text-white/40 lowercase tracking-widest mb-3 font-mono">
                      date
                    </div>
                    <div className="text-3xl font-bold lowercase">
                      november 7-9, 2025
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10" />

                  <div>
                    <div className="text-xs text-white/40 lowercase tracking-widest mb-3 font-mono">
                      location
                    </div>
                    <div className="text-2xl font-bold lowercase">
                      mit innovation hq
                    </div>
                    <div className="text-white/60 mt-1 lowercase">
                      cambridge, ma
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10" />

                  <div>
                    <div className="text-xs text-white/40 lowercase tracking-widest mb-3 font-mono">
                      format
                    </div>
                    <div className="text-xl lowercase">in-person</div>
                    <div className="text-white/60 mt-1 text-sm lowercase">
                      48-hour sprint with meals, mentorship, and workshops
                      included
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white/[0.02] border-l-2 border-white/40">
                <div className="text-xs text-white/40 lowercase tracking-widest mb-2 font-mono">
                  at a glance
                </div>
                <div className="text-white/70 text-sm space-y-1 lowercase">
                  <div>→ 12 sponsor organizations</div>
                  <div>→ 7 prize tracks + credits</div>
                  <div>→ unlimited coffee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <AnimatedBackground />
        <ParticleField />
        <div className="grid-fine" />

        <div className="absolute top-10 left-10 w-64 h-64 animate-float">
          <div className="absolute inset-0 border-l border-t border-white/5" />
          <div className="absolute top-0 left-0 w-3 h-3 border border-white/15 animate-pulse" />
          <div className="absolute inset-4 border border-white/3" />
        </div>

        <div className="absolute bottom-10 right-10 w-64 h-64 animate-float animation-delay-2">
          <div className="absolute inset-0 border-r border-b border-white/5" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border border-white/15 animate-pulse" />
          <div className="absolute inset-4 border border-white/3" />
        </div>

        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        <svg
          className="absolute top-1/3 right-1/4 w-48 h-48 animate-spin-slow opacity-3"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <title>Decorative triangle</title>
          <path
            d="M50,10 L90,90 L10,90 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M50,30 L70,70 L30,70 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>

        <div className="absolute top-20 left-1/3 text-[10px] font-mono text-white/5 tracking-widest animate-pulse-subtle lowercase">
          <div>track_01_robotics</div>
          <div>track_02_hardware</div>
          <div>track_03_reinforcement_learning</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs tracking-widest lowercase border border-white/20 px-4 py-2">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <span>core tracks</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 lowercase">
              build what
              <br />
              matters
            </h2>

            <p className="text-lg text-white/60 max-w-2xl lowercase">
              these tracks guide the kinds of projects we want to see. choose
              one or build something that spans multiple.
            </p>
          </div>

          <TracksSection />

          <div className="mt-32 mb-20">
            <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs tracking-widest lowercase border border-white/20 px-4 py-2">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <span>sponsored prizes</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 lowercase">
              $20k+ in prizes
            </h2>

            <p className="text-lg text-white/60 max-w-2xl lowercase mb-12">
              all prizes provided by our incredible sponsors. each track has
              dedicated support and rewards.
            </p>

            <ScrollablePrizeCarousel />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="border border-white/10 p-8 bg-white/[0.01]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold lowercase">
                  participant credits
                </h3>
                <div className="text-xs font-mono text-white/40 lowercase">
                  included
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5">
                  <div className=" w-16 h-16 flex-shrink-0 border dither-sm border-white/10 bg-white/5 flex items-center justify-center p-2 rounded">
                    <Image
                      src="/sponsors/modal.avif"
                      alt="modal"
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <a href="https://modal.com" target="_blank" rel="noopener noreferrer" className="font-bold lowercase hover:text-white/70 transition-colors underline">
                      modal
                    </a>
                    <div className="text-sm text-white/50 lowercase">
                      gpu compute
                    </div>
                  </div>
                  <div className="text-2xl font-bold">$500</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5">
                  <div className=" w-16 h-16 dither-sm flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center p-2 rounded">
                    <Image
                      src="/sponsors/exa.jpg"
                      alt="exa ai"
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <a href="https://exa.ai" target="_blank" rel="noopener noreferrer" className="font-bold lowercase hover:text-white/70 transition-colors underline">
                      exa ai
                    </a>
                    <div className="text-sm text-white/50 lowercase">
                      neural search api
                    </div>
                  </div>
                  <div className="text-2xl font-bold">$50</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5">
                  <div className=" w-16 h-16 dither-sm flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center p-2 rounded">
                    <Image
                      src="/sponsors/morph.png"
                      alt="morphllm"
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <a href="https://morphllm.com" target="_blank" rel="noopener noreferrer" className="font-bold lowercase hover:text-white/70 transition-colors underline">
                      morph
                    </a>
                    <div className="text-sm text-white/50 lowercase">
                      apply code edits at 10k+ tokens/sec
                    </div>
                  </div>
                  <div className="text-2xl font-bold">$50</div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-8 bg-white/[0.01]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold lowercase">
                  cohosts
                </h3>
                <div className="text-xs font-mono text-white/40 lowercase">
                  partners
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="dither-sm w-16 h-16 flex-shrink-0 border border-white/10 bg-white/5 flex items-center justify-center p-2 rounded">
                    <Image
                      src="/sponsors/augmentationlab.jpeg"
                      alt="augmentation lab"
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <a href="https://augmentationlab.ai" target="_blank" rel="noopener noreferrer" className="font-bold mb-1 lowercase hover:text-white/70 transition-colors underline block">
                      augmentation lab
                    </a>
                    <div className="text-sm text-white/50 lowercase">
                      organization partner — supporting logistics and operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="relative py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <AnimatedBackground />
        <ParticleField />
        <TechnicalOverlay />
        <div className="grid-technical" />

        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/5 via-transparent to-white/5" />

        <div className="absolute top-20 right-20 w-40 h-40 border border-white/5 rotate-45 animate-spin-slow">
          <div className="absolute inset-2 border border-white/3" />
        </div>

        <div className="absolute bottom-20 left-20 w-40 h-40 border border-white/5 rotate-45 animate-spin-reverse">
          <div className="absolute inset-2 border border-white/3" />
        </div>

        <svg
          className="absolute top-1/4 left-20 w-32 h-32 animate-pulse-subtle opacity-5"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <title>Decorative crosshair</title>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="90"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs tracking-widest lowercase border border-white/20 px-4 py-2">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <span>applications</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6 lowercase">
              apply now
            </h2>

            <p className="text-lg text-white/60 lowercase">
              applications are open. space is limited. selection is competitive.
            </p>
          </div>

          <div className="relative border-2 border-white/20 bg-white/[0.01] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

            <iframe
              src="https://revschool.notion.site/ebd/28c7f38a7d3380cd8ba9f357f8ae7f00"
              width="100%"
              height="800"
              className="w-full"
              title="Application Form"
            />
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-16 px-6 lg:px-12">
        <div className="grid-fine" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="text-4xl font-bold mb-6 tracking-tight">
                (rev)olve
              </div>
              <p className="text-white/60 mb-8 leading-relaxed lowercase">
                organized by rev, boston's premier hacker community.
              </p>
              <a
                href="https://rev.school"
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors group font-mono text-sm lowercase"
              >
                <span>rev.school</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="External link"
                >
                  <title>External link</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-bold mb-4 text-sm lowercase tracking-wider text-white/40">
                event
              </h3>
              <ul className="space-y-2 text-sm text-white/60 font-mono lowercase">
                <li>november 7-9, 2025</li>
                <li>mit innovation hq</li>
                <li>cambridge, ma</li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-bold mb-4 text-sm lowercase tracking-wider text-white/40">
                status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white animate-pulse rounded-full" />
                  <span className="text-sm font-mono text-white/60 lowercase">
                    applications open
                  </span>
                </div>
                <Countdown />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-mono lowercase">
            <div>© 2025 rev. all rights reserved.</div>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
