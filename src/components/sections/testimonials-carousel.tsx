"use client";

import React from 'react';
import Image from 'next/image';

/**
 * TestimonialCarousel component that clones the "Beyond expectations" section.
 * Features a heading, subheading, and a horizontal scrolling list of testimonial cards.
 * Adheres to the dark theme and pixel-perfect design requirements.
 */

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "It was so easy to switch that our important emails end. Everyone should be using it.",
    author: "Zeno Rocha",
    role: "Founder of Resend", // Placeholder for actual role in screenshot
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_26.png",
    logo: "/static/logos/logo-1.png",
  },
  {
    quote: "All of our customers are located in South America, so having a solution that could send emails from the region closest to our users is very important. Resend's multi-region feature is a game-changer for us.",
    author: "Giovanni Keppelen",
    role: "CTO & Partner at VOA Hotels",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_27.png",
    logo: "/static/logos/logo-2.png",
  },
  {
    quote: "The speed and ease of integrating with the product was incredible, but what really stood out was their intricate knowledge of email and relentless support day or night. Oh and we also ended up winning Product of the week.",
    author: "Sam Ducker",
    role: "Co-founder of Anyone",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_28.png",
    logo: "/static/logos/logo-3.png",
  },
  {
    quote: "As a developer I love the approach that the Resend team is taking. Its so refreshing. They are also extremely user-centric and helpful in terms of getting you up and running, sending beautiful emails that deliver.",
    author: "Hahnbee Lee",
    role: "Co-founder at Mintlify",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_26.png",
    logo: "/static/logos/logo-4.png",
  },
  {
    quote: "The Resend team have built a product that hasn't seen 10x innovation in years. All my peers are raving about Resend and the experience.",
    author: "Roberto Ricci",
    role: "Head of Product",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_27.png",
    logo: "/static/logos/logo-5.png",
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex w-[400px] flex-none flex-col justify-between rounded-2xl border border-white/10 bg-black p-6 transition duration-200 ease-in-out hover:border-white/20">
      <div className="mb-8">
        <p className="text-[15px] leading-relaxed text-[#888888] font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            {testimonial.author}
          </span>
          <span className="text-xs text-[#888888]">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center font-serif text-[48px] md:text-[56px] leading-[1.2] tracking-[-0.02em] text-white">
            What Others Say
          </h2>
          <p className="mx-auto max-w-150 text-center text-lg leading-[1.6] text-[#888888]">
            PipVerse is empowering traders worldwide with clear trade ideas and direct broker access — free, simple, and built around trader success.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative mt-20">
          {/* Masking gradients for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />

          {/* Carousel movement container */}
          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide md:overflow-visible">
            <div className="flex animate-none flex-nowrap gap-4 md:animate-[marquee_60s_linear_infinite] md:hover:[animation-play-state:paused]">
              {/* Duplicate the array to create a seamless loop effect for desktop */}
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <TestimonialCard key={`testimonial-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * 5 - 1rem * 5)); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}