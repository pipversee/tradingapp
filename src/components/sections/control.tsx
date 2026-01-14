"use client";

import React, { useState } from "react";
import { BarChart3, Eye, ShieldCheck } from "lucide-react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

const ControlSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-40 flex flex-col items-center overflow-hidden">
      {/* 3D Globe Animation Wrapper */}
      <div className="relative mb-12 flex justify-center">
        <div className="relative w-[140px] h-[140px] md:w-[170px] md:h-[170px]">
          {/* Using the provided high-fidelity video asset */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source
              src="https://resend.com/static/landing-page/3d-control.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Heading Group */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="font-serif text-[3rem] md:text-[3.5rem] tracking-tight leading-[110%] text-white mb-4">
          Everything in your control
        </h2>
        <p className="text-gray-400 text-lg md:text-[1.125rem] leading-relaxed">
          Get transparent trade ideas, real-time market context, and clear execution guidance — all in one place. PipVerse makes trading simple, reliable, and completely free.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">

        <Terminal>
          <TypingAnimation>&gt; pnpm start pipverse-trading</TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Connecting to market data feeds.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Verifying account balance.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Loading portfolio history.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Initializing real-time stock tickers.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Configuring trade alerts and notifications.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Fetching recommended trade setups.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Validating trading strategies.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Syncing with Pipverse Analytics.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Ready to execute trades.
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-500">
            <span>ℹ Latest update:</span>
            <span className="pl-2">-Scalp setup loaded</span>
          </AnimatedSpan>
          <TypingAnimation className="text-muted-foreground">
            Success! Pipverse Trading is online.
          </TypingAnimation>
          <TypingAnimation className="text-muted-foreground">
            You may now rest, enjoy profits or view market insights.
          </TypingAnimation>
        </Terminal>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
};

export default ControlSection;