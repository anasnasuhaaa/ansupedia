'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { mode, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/80 backdrop-blur-md shadow-md'
        : 'bg-transparent'
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
        style={{ width: `${scrollProgress}%` }}
        transition={{ width: { type: 'tween', duration: 0.1 } }}
      />
      <div className="container-custom px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="font-bold text-2xl gradient-text">
          Ansupedia.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Theme Switcher & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          {mounted && (
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="p-2 rounded-lg bg-slate-800 transition-colors hover:bg-slate-700"
                title="Change theme"
              >
                {mode === 'light' && <FiSun size={20} />}
                {mode === 'dark' && <FiMoon size={20} />}
                {mode === 'system' && <FiMonitor size={20} />}
              </button>

              {/* Theme Dropdown Menu */}
              {isThemeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg border border-slate-700 shadow-lg z-50 overflow-hidden"
                >
                  {[
                    { label: 'System', value: 'system' as const, icon: FiMonitor },
                    { label: 'Light', value: 'light' as const, icon: FiSun },
                    { label: 'Dark', value: 'dark' as const, icon: FiMoon },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.value}
                        onClick={() => {
                          setMode(item.value);
                          setIsThemeOpen(false);
                        }}
                        className={`w-full px-4 py-3 flex items-center gap-3 text-sm font-medium transition-colors ${mode === item.value
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-100 hover:bg-slate-700'
                          }`}
                      >
                        <Icon size={18} />
                        {item.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 transition-colors hover:bg-slate-700"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-900 border-t border-slate-800"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Switcher */}
          {mounted && (
            <div className="pt-2 border-t border-slate-700">
              <div className="text-xs font-semibold text-slate-400 px-4 py-2">Theme</div>
              <div className="space-y-1">
                {[
                  { label: 'System', value: 'system' as const, icon: FiMonitor },
                  { label: 'Light', value: 'light' as const, icon: FiSun },
                  { label: 'Dark', value: 'dark' as const, icon: FiMoon },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.value}
                      onClick={() => {
                        setMode(item.value);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2 flex items-center gap-3 text-sm font-medium transition-colors rounded-lg ${mode === item.value
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-100 hover:bg-slate-800'
                        }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
