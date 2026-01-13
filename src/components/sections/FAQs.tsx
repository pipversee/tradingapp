"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { faqs } from '@/lib';
import { FAQItem } from '../FAQItem';

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="mx-auto px-6 py-12 sm:py-18 max-w-5xl md:max-w-7xl relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif md:text-[58px] text-white tracking-tight">
            Frequently asked questions (FAQs)
          </h2>
          <p className="text-base md:text-[1.125rem] mt-6 font-sans font-medium text-[#888888] mb-4">
            Find clear answers to common questions about our platform, features, and how we help you trade smarter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Background Decorators */}
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-1/4 bottom-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default FAQs;