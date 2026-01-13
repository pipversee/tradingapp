import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTAFooter = () => {
  const footerLinks = {
    Documentation: ['Getting Started', 'API Reference', 'Integrations', 'Examples', 'SDKs'],
    Resources: ['Changelog', 'Pricing', 'Security', 'SOC 2', 'GDPR', 'Brand', 'Wallpapers'],
    Company: ['About', 'Blog', 'Careers', 'Customers', 'Events', 'Humans', 'Philosophy'],
    Help: ['Contact', 'Support', 'Status', 'Migrate', 'Knowledge Base', 'Legal Policies'],
    Handbook: ['Why we exist', 'How we work', 'Engineering', 'Design', 'Success', 'Marketing'],
  };

  const socialIcons = [
    { name: 'X', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-x-2.svg' },
    { name: 'GitHub', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-github-3.svg' },
    { name: 'LinkedIn', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-linkedin-4.svg' },
    { name: 'YouTube', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-youtube-5.svg' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-32 pb-16 overflow-hidden">
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
      <div className="container mx-auto px-6 border-t border-white/10 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {/* Brand/Address Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/home" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <svg width="80" height="24" viewBox="0 0 256 68" fill="white">
                <path d="M42.2 46.1c0 10-6.1 16-16.1 16h-9.9V62h12.4c7.6 0 13.1-4.7 13.1-13.3 0-6.7-3.2-11.2-8.3-13.1 4.5-2.2 7-6.5 7-11.1 0-7.8-5.3-12.7-12.6-12.7h-12.3v30.4H28.4V11.2h9.9c7.6 0 12.1 4.4 12.1 12.3 0 5-2.5 9-6.9 11l-.8.4.8.3c6.1 2.3 8.7 6.1 8.7 10.9zm-13.8 1.4V34.2h9.9c4 0 6.6 2.1 6.6 6.8 0 4.2-2.3 6.5-6.6 6.5h-9.9zm0-23.7V11.2h9.9c4 0 6.6 2.1 6.6 6.8 0 4.2-2.3 6.5-6.6 6.5h-9.9z" fill="white"></path>
              </svg>
            </a>
            <p className="text-[13px] leading-relaxed text-[#888888] mb-8 font-sans">
              2261 Market Street #5039<br />
              Islamabad, Pakistan
            </p>
            
            <div className="flex gap-4 mb-8">
              {socialIcons.map((social) => (
                <a key={social.name} href={`#${social.name.toLowerCase()}`} className="opacity-60 transition-opacity hover:opacity-100">
                  <Image src={social.src} alt={social.name} width={20} height={20} />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-[#888888]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]"></div>
              Almost all trades profitable
            </div>
          </div>

          {/* Sitemap Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col">
              <h4 className="text-[14px] font-semibold text-white mb-6 font-sans">{title}</h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[13px] text-[#888888] transition-colors hover:text-white font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-[#333333] font-sans">
            © {new Date().getFullYear()} PipVerse. Built by alphas.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all">
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a16ead1d-2f55-4181-be1b-e4556d770843-resend-com/assets/svgs/footer-github-3.svg" alt="Y Combinator" width={18} height={18} />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#888888]">Backed by FinTech Companies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
