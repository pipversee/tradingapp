import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import StockChart from '../StockChart';
import { TrendingUp, Zap } from 'lucide-react';
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <div className="relative z-20 md:h-screen md:max-h-237.5 md:pt-0 overflow-hidden">
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

      <section id='home' className="flex h-screen justify-center items-center max-w-6xl px-0 pb-2 pt-0 md:h-full md:max-h-237.5 md:max-w-screen relative z-30">
        <div className="flex h-full flex-col items-center justify-center md:pb-12">
          {/* Text Content */}
          <div className="order-1 px-4 max-w-250 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out sm:shrink-0 lg:pl-16">
            <h1 className="font-serif text-[4rem] md:text-[90px] tracking-[-0.05em] leading-[88%] md:leading-[100%] text-center pb-3">
              <span className="bg-linear-to-r text-[56px] md:text-[90px] from-white to-[#636363] bg-clip-text text-center text-transparent trackig font-medium">
                Welcome to <AnimatedGradientText
                  speed={1.5}
                  colorFrom="#4ade80"
                  colorTo="#06b6d4"
                  className=" tracking-tight italic"
                >
                  <br /> <span className='text-center'>PipVerse</span>
                </AnimatedGradientText>
              </span>
            </h1>

            <p className="text-base md:text-[1.125rem] md:leading-normal text-[#888888] font-normal relative mb-5 mt-1.5 max-w-120 text-center leading-6">
              Cut through the noise. Get actionable stock news, high-probability trades, and academy lessons designed to make you consistently profitable.
            </p>

            <div className="flex flex-row justify-center gap-4">
              <Link href='/trades'>
                <ShimmerButton className="shadow-2xl">
                  <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-black lg:text-lg dark:from-white dark:to-slate-400">
                    Get Started
                  </span>
                </ShimmerButton>
              </Link>

              {/* Secondary CTA */}
              <a
                className="inline-flex align-middle items-center justify-center select-none rounded-2xl transition ease-in-out duration-200 bg-transparent border-transparent text-[#888888] hover:text-white text-base h-12 px-6 font-semibold"
                href="#socials"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;