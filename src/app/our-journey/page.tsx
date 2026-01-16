"use client";

import { useEffect, useState } from 'react';
import { Lightbulb, LineChart, TrendingDown, Target, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/sections/navbar';
import { journeySteps } from '@/lib';
import { MagicCard } from '@/components/ui/magic-card';


const Journey = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px 200px 0px", // ✅ FIX
      }
    );

    requestAnimationFrame(() => {
      const items = document.querySelectorAll(".journey-item");
      items.forEach((item) => observer.observe(item));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Navbar />
      {/* Floor Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none hidden md:block">
        <Image
          alt="Floor background"
          src="https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbg-hero-1.jpg&w=3840&q=100&dpl=dpl_4tUqZd5uM7Tom4zJTxfJ7UkQvKFx"
          fill
          priority
          className="object-cover opacity-80 transition-opacity duration-500"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      <section className="mx-auto max-w-5xl px-2 md:px-14 pb-8 md:h-full md:max-h-237.5 md:max-w-7xl pt-14 md:pt-20 relative z-30">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />


        <div className="text-center md:text-start w-full space-y-3 mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
            How we{" "}
            <span className="bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              built
            </span>{" "}
            everything from{" "}
            <span className="bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              ground up
            </span>
          </h2>
          <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
            PipVerse is our open trading journey, shared with radical transparency from day one. Every trade, every win, every loss—documented honestly to help traders learn, grow, and build real consistency together.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline lines */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
              <div className="h-full w-full bg-gray-600" />
            </div>

            <div className="absolute left-5 top-0 block h-full w-px md:hidden">
              <div className="h-full w-full bg-gray-600" />
            </div>

            {/* Timeline Items */}
            <div className="space-y-16 mb-10">
              {journeySteps.map((step, index) => {
                const isVisible = visibleItems.includes(step.id);
                const isEven = index % 2 === 0;
                const Icon = step.Icon;

                return (
                  <div
                    key={step.id}
                    data-id={step.id}
                    className={`journey-item relative transition-all duration-600 ease-out ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                      }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Mobile Layout */}
                    <div className="flex w-full md:hidden">
                      {/* Timeline Node - Mobile */}
                      <div className="relative z-20 mr-6 shrink-0">
                        <div className="group relative flex h-10 w-10 items-center justify-center">
                          {/* Gradient ring */}
                          <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-teal-500 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                          {/* Inner dark circle */}
                          <div className="absolute inset-0.5 rounded-full bg-neutral-950" />
                          {/* Icon */}
                          <Icon className="relative z-10 h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:text-emerald-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Content Card - Mobile */}
                      <div className="flex-1 group">
                        <MagicCard
                          gradientColor={"#262626"}
                          className="p-0"
                        >
                          <div className="rounded-2xl bg-neutral-900/50 p-5 transition-all duration-300 hover:bg-neutral-900/80">
                            <div className="mb-3 flex items-center gap-3">
                              <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">
                                0{step.id}
                              </span>
                            </div>
                            <h3 className="mb-2 text-lg font-medium tracking-tight font-serif text-white">
                              {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-neutral-500">
                              {step.description}
                            </p>
                          </div>
                        </MagicCard>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden w-full items-center md:flex">
                      {/* Left Content */}
                      <div className={`w-1/2 pr-12 ${isEven ? 'text-right' : 'invisible'}`}>
                        {isEven && (
                          <div className="group ml-auto max-w-sm">
                            <MagicCard
                              gradientColor={"#262626"}
                              className="p-0"
                            >
                              <div className="rounded-2xl border-0 bg-neutral-900/30 p-8 transition-all duration-500  hover:bg-neutral-900/60 hover:-translate-y-1">
                                <div className="mb-4 flex items-center justify-end gap-3">
                                  <span className="text-xs font-medium uppercase tracking-tight text-neutral-600">
                                    0{step.id}
                                  </span>
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                                    <Icon className="h-5 w-5 text-emerald-400" />
                                  </div>
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-medium tracking-tight text-white">
                                  {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-neutral-500">
                                  {step.description}
                                </p>
                              </div>
                            </MagicCard>
                          </div>
                        )}
                      </div>

                      {/* Timeline Node - Desktop */}
                      <div className="absolute left-1/2 z-20 -translate-x-1/2">
                        <div className="group relative flex h-14 w-14 items-center justify-center cursor-pointer">
                          {/* Outer glow on hover */}
                          <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-teal-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40" />
                          {/* Gradient border ring */}
                          <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-teal-500 transition-all duration-300 group-hover:scale-110" />
                          {/* Inner dark circle */}
                          <div className="absolute inset-0.5 rounded-full bg-neutral-950 transition-all duration-300" />
                          {/* Inner gradient fill on hover */}
                          <div className="absolute inset-0.5 rounded-full bg-linear-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                          {/* Icon */}
                          <Icon className="relative z-10 h-5 w-5 text-emerald-400 transition-all duration-300 group-hover:text-emerald-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className={`w-1/2 pl-12 ${!isEven ? 'text-left' : 'invisible'}`}>
                        {!isEven && (
                          <div className="group mr-auto max-w-sm">
                            <MagicCard
                              gradientColor={"#262626"}
                              className="p-0"
                            >
                              <div className="rounded-2xl bg-neutral-900/30 p-8 transition-all duration-500 hover:bg-neutral-900/60 hover:-translate-y-1">
                                <div className="mb-4 flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                                    <Icon className="h-5 w-5 text-emerald-400" />
                                  </div>
                                  <span className="text-xs font-medium uppercase tracking-tight text-neutral-600">
                                    0{step.id}
                                  </span>
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-medium tracking-tight text-white">
                                  {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-neutral-500">
                                  {step.description}
                                </p>
                              </div>
                            </MagicCard>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journey;
