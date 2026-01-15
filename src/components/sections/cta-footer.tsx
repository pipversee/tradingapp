import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Instagram, Mail, TrendingUp, Youtube } from 'lucide-react';

const CTAFooter = () => {
  const year = new Date().getFullYear()
  const socialIcons = [
    { name: 'X', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-x-2.svg' },
    { name: 'GitHub', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-github-3.svg' },
    { name: 'LinkedIn', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-linkedin-4.svg' },
    { name: 'YouTube', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-youtube-5.svg' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-32 pb-0 overflow-hidden">
      {/* Final CTA Section */}
      <section className="container mx-auto px-6 mb-32 flex flex-col items-center text-center">
        <h2 className="font-serif text-[2.5rem] md:text-[5.5rem] tracking-tight leading-[1] mb-10 max-w-4xl text-white">
          Trading
          <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent italic z-10'>
            &nbsp;simplified.
          </span>
          <br />
          <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent italic z-10'>
            &nbsp;Join
          </span> right now.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/trades"
            className="group relative inline-flex h-14 items-center justify-center rounded-2xl border-[1.5px] border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent px-8 text-[1.125rem] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
              </svg>
            </span>
            <div className="absolute inset-0 -z-10 rounded-2xl bg-[url('https://resend.com/static/texture-btn.png')] opacity-20 group-hover:opacity-0 transition-opacity"></div>
          </Link>

          <Link
            href="#socials"
            className="group inline-flex items-center gap-2 text-[1.125rem] font-semibold text-[#888888] transition-colors hover:text-white"
          >
            Contact Us
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65827 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65827 12.8536 7.85355L8.85355 11.8536C8.65827 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65827 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Main Footer Sitemap */}
      {/* <footer className="bg-black text-white"> */}
        <div className="container mx-auto px-4 pt-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-golden rounded-xl flex items-center justify-center">
                  <Image
                    src={'/pipverse-logo.PNG'}
                    alt="logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-2xl font-serif tracking-tight">PipVerse</span>
              </div>
              <p className="text-muted-foreground font-sans leading-relaxed max-w-md">
                Real trades. Real outcomes. Zero hype. PipVerse documents the journey to disciplined, consistent trading.
              </p>
              <div className="flex space-x-4">
                <Button variant="default" size="icon" className="hover:bg-gray-200">
                  <a href="#" target="_blank">
                    <img src='/x-logo-black.svg' className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="default" size="icon" className="hover:bg-gray-200">
                  <a href="#" target="_blank">
                    <Youtube className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="default" size="icon" className="hover:bg-gray-200">
                  <a href="#" target="_blank">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-white tracking-tight">Quick Links</h3>
              <ul className="space-y-2 font-sans">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#socials" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Socials
                  </a>
                </li>
                <li>
                  <Link href="/trades" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Trade Ideas
                  </Link>
                </li>
                <li>
                  <Link href="/lessons" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Lessons
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/stock-updates" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Stock Updates
                  </Link>
                </li>
                <li>
                  <Link href="/academy" className="text-muted-foreground hover:text-white transition-all duration-150">
                    Academy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif tracking-tight text-white">Stay Updated</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Get notified when I post new trades and market insights.
              </p>
              <div className="space-y-2">
                <a href="#">
                  <Button variant="default" size="sm" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Join Our Community
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 mb-3 md:space-y-0">
              <p className="text-muted-foreground font-clean text-sm">
                ©{year} PipVerse. All rights reserved. Not financial advice.
              </p>
              <div className="flex items-center space-x-1 text-muted-foreground font-clean text-sm">
                <span>Made by alphas</span>
                <span>for the trading community</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default CTAFooter;
