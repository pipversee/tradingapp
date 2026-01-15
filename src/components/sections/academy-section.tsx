import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookIcon, Download, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
import { MagicCard } from '../ui/magic-card';

const AcademySection = () => {
  const [forReadersBtnClicked, setForReadersBtnClicked] = useState(true)
  const [forVisualBtnClicked, setForVisualBtnClicked] = useState(false)

  return (
    <div>
      {/* Heading */}
      <div className="text-center md:text-start w-full space-y-3 mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl md:max-w-xl font-serif leading-[125%] text-foreground">
          Our <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent z-10'>Academy</span>
        </h2>
        <p className="text-[18px] text-center md:text-start text-muted-foreground font-clean max-w-2xl">
          Learn trading without the noise. PipVerse Academy offers free, practical education focused on real market execution.
        </p>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-4 mb-6 md:mb-10'>
        <div>
          <Button variant={forReadersBtnClicked ? 'default' : "outline"} className='rounded-3xl px-10 py-6 text-lg' onClick={() => {
            setForReadersBtnClicked(true)
            setForVisualBtnClicked(false)
          }}>
            <BookIcon />
            PDF Course
          </Button>
        </div>
        <div>
          <Button variant={forVisualBtnClicked ? 'default' : "outline"} className='rounded-3xl px-[50px] py-6 text-lg' onClick={() => {
            setForVisualBtnClicked(true)
            setForReadersBtnClicked(false)
          }}>
            <Youtube className='w-10 h-10' />
            YouTube Video Course
          </Button>
        </div>
      </div>

      {
        forReadersBtnClicked ? (
          <>
            <MagicCard
              gradientColor={"#262626"}
              className="p-0"
            >
              <div className='flex justify-between h-full px-6 py-3 border border-white/30 rounded-2xl'>
                <div className='font-sans font-semibold text-xl md:text-2xl'>
                  📚 Download Course PDF
                </div>
                <div className="flex justify-center">
                  <a
                    href="/files/stock-trading-guide.pdf"
                    download
                    target='_blank'
                  >
                    <Button
                      variant={'default'}
                      className="group relative px-8 py-4 rounded-full text-primary-foreground font-medium text-base flex items-center gap-3 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                      </span>
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-accent to-primary bg-size-[200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-gradient-shift" />
                    </Button>
                  </a>
                </div>
              </div>
            </MagicCard>

            <div className="glass-card rounded-3xl px-0 py-4 lg:py-6">
              <div className="space-y-8">
                <div
                  className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  <p>
                    Our stocks-focused program is designed to take you from market basics to confident execution.
                    You’ll master core concepts like <span className="text-foreground">Stock Market Fundamentals</span>,{' '}
                    <span className="text-foreground">Technical & Price Action Analysis</span>, and{' '}
                    <span className="text-foreground">Risk Management & Trade Planning</span>. Every module is structured
                    around real market conditions, ensuring you’re not just consuming theory — you’re learning how
                    disciplined traders analyze, plan, and execute trades in live markets.
                  </p>

                  <p>
                    The curriculum emphasizes clarity and repeatability. You’ll learn how to read price behavior,
                    identify high-probability zones, and understand market structure without relying on lagging
                    indicators or guesswork. PipVerse Academy focuses on building a rule-based trading mindset,
                    helping you avoid emotional decisions and develop consistency over time.
                  </p>

                  <p>
                    You’ll work through real stock market scenarios using live charts, historical case studies,
                    and detailed trade breakdowns inspired by PipVerse trade ideas. From structuring entries and exits
                    to managing risk through position sizing and stop placement, each lesson strengthens decision-making
                    skills that directly impact long-term trading performance.
                  </p>

                  <p>
                    Beyond individual trades, the program teaches you how to think in systems. You’ll learn how to
                    build and refine a personal trading plan, track performance through journaling, and analyze
                    both winning and losing trades objectively. This approach helps traders move away from random
                    execution and toward a process-driven methodology used by professionals.
                  </p>

                  <p>
                    Education at PipVerse goes beyond charts. You’ll gain a clear understanding of market psychology,
                    trader behavior, and the role of patience and discipline in profitable trading. These lessons are
                    designed to protect you from common beginner mistakes — overtrading, revenge trading, and
                    unrealistic expectations — that cause most traders to fail.
                  </p>

                  <p>
                    Learn alongside a serious community of traders committed to improvement. Through guided learning,
                    expert-led market breakdowns, and continuous feedback, PipVerse Academy creates an environment
                    where traders grow together. The goal isn’t hype or shortcuts — it’s mastery, confidence, and
                    consistency in the stock markets.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : forVisualBtnClicked ? (
          <>
            <MagicCard
              gradientColor={"#262626"}
              className="p-0 rounded-2xl"
            >
              <div className='flex justify-between h-full px-1 py-1 border border-white/30 rounded-4xl'>
                <video controls preload="metadata" width="100%">
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </MagicCard>

            <div className="glass-card rounded-3xl px-0 py-4 md:py-6">
              <div className="space-y-8">
                <div
                  className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  <p>*For complete in detailed video, &nbsp;
                    <a href="#" target='_blank' className='underline text-green-600 transition-all duration-150 hover:text-green-700'>
                      watch on youtube
                    </a>
                  *
                  </p>
                  <p>
                    Our stocks-focused program is designed to take you from market basics to confident execution.
                    You’ll master core concepts like <span className="text-foreground">Stock Market Fundamentals</span>,{' '}
                    <span className="text-foreground">Technical & Price Action Analysis</span>, and{' '}
                    <span className="text-foreground">Risk Management & Trade Planning</span>. Every module is structured
                    around real market conditions, ensuring you’re not just consuming theory — you’re learning how
                    disciplined traders analyze, plan, and execute trades in live markets.
                  </p>

                  <p>
                    The curriculum emphasizes clarity and repeatability. You’ll learn how to read price behavior,
                    identify high-probability zones, and understand market structure without relying on lagging
                    indicators or guesswork. PipVerse Academy focuses on building a rule-based trading mindset,
                    helping you avoid emotional decisions and develop consistency over time.
                  </p>

                  <p>
                    You’ll work through real stock market scenarios using live charts, historical case studies,
                    and detailed trade breakdowns inspired by PipVerse trade ideas. From structuring entries and exits
                    to managing risk through position sizing and stop placement, each lesson strengthens decision-making
                    skills that directly impact long-term trading performance.
                  </p>

                  <p>
                    Beyond individual trades, the program teaches you how to think in systems. You’ll learn how to
                    build and refine a personal trading plan, track performance through journaling, and analyze
                    both winning and losing trades objectively. This approach helps traders move away from random
                    execution and toward a process-driven methodology used by professionals.
                  </p>

                  <p>
                    Education at PipVerse goes beyond charts. You’ll gain a clear understanding of market psychology,
                    trader behavior, and the role of patience and discipline in profitable trading. These lessons are
                    designed to protect you from common beginner mistakes — overtrading, revenge trading, and
                    unrealistic expectations — that cause most traders to fail.
                  </p>

                  <p>
                    Learn alongside a serious community of traders committed to improvement. Through guided learning,
                    expert-led market breakdowns, and continuous feedback, PipVerse Academy creates an environment
                    where traders grow together. The goal isn’t hype or shortcuts — it’s mastery, confidence, and
                    consistency in the stock markets.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
    </div >
  );
};

export default AcademySection;
