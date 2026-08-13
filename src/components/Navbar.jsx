'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 sm:px-6 md:px-8">
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl py-3 px-5 sm:px-6 shadow-lg border-b border-purple-200/30 dark:border-slate-800/50' 
            : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 px-5 sm:px-6 border-b border-purple-200/20 dark:border-slate-800/30'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo - Left */}
          {/* Logo - Sirf Image */}
         <a href="#" className="flex items-center group shrink-0 py-1">
          <img 
            src="/images/logos/logo.png"
            alt="SS INFOTECH - IT Research & Products Development Firm" 
            className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            onError={(e) => { e.currentTarget.src = '/images/logos/logo.jpg'; }}
          />
        </a>
          {/* Right Group: Navigation + Phone Pill + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 mr-4 xl:mr-8">
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-0.5 xl:gap-1">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 relative group rounded-md hover:bg-purple-50/60 dark:hover:bg-purple-900/20 whitespace-nowrap"
                >
                  {l.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Vertical Separator */}
            <div className="h-5 w-[1px] bg-purple-200 dark:bg-slate-800" />

            {/* Phone Pill */}
            <a 
              href="tel:+917770023791" 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 dark:bg-slate-900 border border-purple-300/80 dark:border-slate-700 text-xs font-extrabold text-slate-900 dark:text-slate-100 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-500 transition-all duration-200 shadow-sm font-jakarta whitespace-nowrap group shrink-0"
            >
              <div className="p-1 rounded-full bg-purple-600 text-white group-hover:scale-110 transition-transform">
                <Phone size={12} />
              </div>
              <span>+91 77700 23791</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 transition-colors border border-purple-200 rounded-lg bg-purple-100/80 dark:bg-slate-800 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-purple-200/80"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-2 p-5 mx-auto mt-2 border border-purple-200 shadow-2xl lg:hidden max-w-7xl rounded-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl dark:border-slate-800"
          >
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium transition-all rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <span>{l.name}</span>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>
            ))}
            
            <div className="pt-4 border-t border-purple-100 dark:border-slate-800">
              <a 
                href="tel:+917770023791" 
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-purple-50 dark:bg-slate-800"
              >
                <Phone size={15} className="text-purple-600 dark:text-purple-400" />
                <span>+91 77700 23791</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}