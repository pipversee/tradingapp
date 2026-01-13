"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminNavItems } from "@/lib";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";

const AdminNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = () => {
    signOut({
      callbackUrl: "/login"
    })
  }


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        "border-b border-transparent",
        isScrolled
          ? "after:opacity-100 border-border"
          : "after:opacity-0"
      )}
      style={{
        height: "58px",
      }}
    >
      {/* Background Layer with Glassmorphism and Texture */}
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-opacity duration-300",
          isScrolled ? "bg-black/60 backdrop-blur-md opacity-100" : "bg-transparent opacity-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-repeat pointer-events-none opacity-0 transition-opacity duration-300",
          isScrolled && "opacity-20"
        )}
        style={{ backgroundImage: "url('https://resend.com/static/texture-btn.png')" }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-px lg:w-56.25">
            <Link
              href="/"
              aria-label="PipVersee"
              className="transition-opacity flex justify-center items-center hover:opacity-80 focus-visible:ring-2 rounded-4xl text-white font-medium focus-visible:ring-white/20 font-sans"
            >
              <Image
                src={'/pipverse-logo.PNG'}
                alt="logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              PipVerse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-3">
              {adminNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.label}>
                    <Link href={item.href || "#"} className={isActive ? 'text-foreground' : ""}>
                      <button
                        className={`group flex items-center gap-0.5 px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded-lg h-14.5`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button onClick={logoutHandler} className={cn(
              "relative inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white",
              "rounded-2xl border-2 border-white/5 backdrop-blur-[25px]",
              "bg-origin-border bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)]",
              "shadow-sm transition-all duration-200 whitespace-nowrap overflow-hidden",
              "hover:bg-white/90 hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
              "focus-visible:ring-4 focus-visible:ring-white/30 outline-none"
            )}>
              <span className="relative z-10">Logout</span>
            </button>
            <div
              className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay group-hover:opacity-60 transition-opacity"
              style={{
                backgroundImage: "url('https://resend.com/static/texture-btn.png')",
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto'
              }}
            />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14.5 z-40 bg-black md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-2">
            {adminNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="flex items-center justify-between py-4 text-lg font-medium text-muted-foreground border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/login"
                className="w-full h-12 flex items-center justify-center rounded-2xl text-foreground font-semibold bg-white/5 border border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;