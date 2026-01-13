import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  // Asset for Guillermo Rauch's portrait
  const portraitUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/images/images_23.png";

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-24 md:py-32">
      {/* Visual background element - a subtle white ray/cone pointing down */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 opacity-20">
        <svg
          width="600"
          height="400"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 0L600 400H0L300 0Z"
            fill="url(#testimonial_glow)"
          />
          <defs>
            <radialGradient
              id="testimonial_glow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 0) rotate(90) scale(400 300)"
            >
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* The Quote */}
        <blockquote className="mb-10 text-pretty">
          <p className="font-display text-[1.875rem] leading-[1.3] text-white md:text-[2.25rem] lg:text-[2.5rem] tracking-tight">
            PipVerse makes professional trading accessible for everyone.
            <br className="hidden md:block" />
            High-quality trade ideas, clear execution guidance, and
            <br className="hidden md:block" />
            a smooth connection to trusted brokers — all completely free for traders.
          </p>
        </blockquote>

        {/* The Author Info */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
            <Image
              src={portraitUrl}
              alt="Guillermo Rauch"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-medium text-white">- Professional Trader</span>
          </div>
        </div>
      </div>
      
      {/* Separator to match the design's spacing to the next section */}
      <div className="mt-20 h-px w-full max-w-[1280px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default TestimonialSection;