"use client";
import React from 'react';
import { FlaskConical, Bell, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

import { MagicCard } from '../ui/magic-card';
import { useTheme } from 'next-themes';

const Socials = () => {
  const { theme } = useTheme()

  const socialCards = [
    {
      name: "WhatsApp",
      description: "Join our community for instant signal alerts and news updates.",
      href: "https://whatsapp.com/channel/0029VbC2TXiFMqrgHMii4900",
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      join: 'Join Community'
    },
    {
      name: "X (Twitter)",
      description: "Follow us for real-time market news and technical analysis snippets.",
      href: "https://x.com/pipversee?s=21",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      join: 'Follow Us'
    },
    {
      name: "Telegram",
      description: "Our primary channel for high-conviction trading signals.",
      href: "https://t.me/ruyi008899",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      join: 'Join Our Channel'
    },
    {
      name: "Instagram",
      description: "Daily PipVerse updates, real trade breakdowns shared openly.",
      href: "https://www.instagram.com/pipversee_?igsh=aDMzeHIxajB2NXBv&utm_source=qr",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.75 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        </svg>
      ),
      join: "Follow Us"
    },
    {
      name: "Threads",
      description: "Raw trading thoughts, mindset lessons straight from the PipVerse journey.",
      href: "https://www.threads.com/@pipversee_?igshid=NTc4MTIwNjQ2YQ==",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-threads" viewBox="0 0 16 16">
          <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
        </svg>
      ),
      join: "Follow Us"
    },

    {
      name: "LinkedIn",
      description: "Connect with our professional team and view company updates.",
      href: "https://www.linkedin.com/in/pip-verse-02a8623a6",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      join: 'Follow Us'
    },
    {
      name: "YouTube",
      description: "Educational webinars and weekly market recap videos.",
      href: "https://youtube.com/@pipversee?si=vsFJId8voa1-tsu8",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      join: 'Subscribe Our Channel'
    },
    {
      name: "Discord",
      description: "Join our active trading floor and chat with other members.",
      href: "https://discord.gg/2WuDZGWY",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
      join: 'Join Community'
    },
    {
      name: "Tiktok",
      description: "Short-form, high-impact trading insights, market breakdowns — all shared openly.",
      href: "https://www.tiktok.com/@pipversee?_r=1&_t=ZS-938r2R48V7p",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M21 7.5a6.8 6.8 0 0 1-4.1-1.3v7.3a6.5 6.5 0 1 1-6.5-6.5c.4 0 .8 0 1.2.1v3.3a3.2 3.2 0 1 0 2.1 3V1h3.3a6.8 6.8 0 0 0 4 3.5v3z" />
        </svg >
      ),
      join: 'Follow Us'
    }
  ];

  return (
    <section id='socials' className="mx-auto px-6 py-20 sm:py-24 max-w-5xl md:max-w-7xl">
      <div className="mb-16">
        <h2 className="font-display text-[2.5rem] md:text-[58px] tracking-tight leading-[1.1] pl-3 md:pl-10 md:pt-10 mb-6 text-white">
          Our Social<br /><span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>Presence</span>
        </h2>
        <p className="text-base md:text-[1.125rem] md:leading-[1.6] text-[#888888] font-normal max-w-2xl pl-3 md:pl-10 mb-12">
          Join our social channels for multiple comprehensive profitable trades, real-time market insights, updates, and discussions with <span className="italic text-white">like-minded traders</span>. Stay connected, stay informed, and grow smarter together.
        </p>
      </div>

      <main className=" md:px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialCards.map((social, index) => (
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0"
                key={social.name}
              >
                <motion.a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-8 rounded-2xl border border-white/16 bg-white/2 hover:bg-white/4 hover:border-white/12 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/6 flex items-center justify-center mb-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                  <h2 className="text-[18px] font-sans font-semibold mb-2 group-hover:text-white transition-colors">
                    {social.name}
                  </h2>
                  <p className="text-[15px] text-white/50 leading-relaxed">
                    {social.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-white/40 group-hover:text-white transition-colors">
                    {social.join}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              </MagicCard>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Socials;
