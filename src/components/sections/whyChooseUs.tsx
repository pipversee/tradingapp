"use client";

import React, { useState } from 'react';
import { Terminal, Github, Download, Blocks, CloudLightning, Coffee, Code2, Globe, Database, Settings, ShieldCheck, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { whyChooseUs } from '@/lib';
// import { CardSpotlight } from '../ui/card-spotlight';


export default function WhyChooseUs() {

  return (
    <section className="mx-auto px-6 py-16 pb-24 pt-48 sm:py-24 max-w-5xl md:max-w-7xl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[2.5rem] font-serif leading-[100%] md:leading-normal tracking-normal md:text-[58px] text-white ">
            Built for <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>traders of all types</span>
          </p>
          <p className="text-base md:text-[1.125rem] mt-1 font-sans font-medium text-[#888888] mb-4">
            We simplify the stock market by combining expert insights, structured learning, and real-world trading experience in one platform. Our focus is on <span className="italic text-white">clarity, consistency, and risk-aware decision-making</span>—not hype or shortcuts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className='border p-5 hover:translate-y-2 transition-all duration-300 rounded-2xl border-white/20 h-full flex flex-col justify-start items-start'>
              <div className="w-10 h-10 relative rounded-lg bg-white/6 flex items-center justify-center mb-5 z-20">
                <item.icon className="w-5 h-5 relative z-20 text-white/70" />
              </div>
              <h3 className="text-[18px] relative font-sans font-semibold text-white mb-2 z-20">
                {item.title}
              </h3>
              <p className="text-[15px] relative text-white/50 leading-relaxed z-20">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}