"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles, BookOpen, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Our Gallery", href: "#gallery" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#1A1108]/80 backdrop-blur-md shadow-md dark:shadow-[#150d07]/40 border-b border-slate-100/50 dark:border-[#2C1F14]/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-all duration-300">
              <img
                src="/images/logo_trans.png"
                alt="Adhyan Kidz Logo"
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <img
              src="/images/banner_trans.png"
              alt="Adhyan Kidz"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 dark:text-[#E8D4C4] hover:text-brand-orange dark:hover:text-brand-yellow transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-orange dark:bg-[#25180E] dark:hover:bg-[#2C1F14] dark:text-brand-yellow transition-all duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#admissions"
              className="bg-brand-pink text-white font-display font-semibold px-6 py-2.5 rounded-full hover:bg-brand-pink/90 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-brand-pink/20"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-orange dark:bg-[#25180E] dark:text-brand-yellow cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-[#E8D4C4] hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#1A1108]/95 backdrop-blur-md shadow-lg border-t border-slate-100 dark:border-[#2C1F14]/50 transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-2 font-medium text-slate-700 dark:text-[#E8D4C4] hover:text-brand-orange dark:hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 w-full justify-center py-3 border-t border-slate-100 dark:border-[#2C1F14]/50">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Theme:</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-brand-orange dark:bg-[#25180E] dark:hover:bg-[#2C1F14] dark:text-brand-yellow transition-all duration-200 text-sm font-semibold cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4" /> Day Mode
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" /> Story Time Mode
                </>
              )}
            </button>
          </div>
          <a
            href="#admissions"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs text-center bg-brand-pink text-white font-display font-semibold py-3 rounded-full hover:bg-brand-pink/90 transition-colors shadow-md block"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}
