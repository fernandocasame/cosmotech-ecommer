"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import { clsx } from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initial theme detection
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Resultados", href: "#resultados" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx(
          "flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-2xl border",
          scrolled 
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200/50 dark:border-white/10 shadow-2xl shadow-zinc-200/20" 
            : "bg-transparent border-transparent"
        )}>
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white font-black text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-black text-zinc-950 dark:text-white leading-none tracking-tighter transition-colors">
                Cosmo<span className="text-brand-600 dark:text-brand-400">Tech</span>
              </span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mt-0.5 transition-colors">
                Next-Gen Agency
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "px-4 py-2 text-sm font-bold rounded-xl transition-all",
                  scrolled 
                    ? "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5" 
                    : "text-zinc-950/80 dark:text-white/80 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-950/5 dark:hover:bg-white/10"
                )}
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-px h-6 bg-zinc-200 dark:bg-white/10 mx-4" />
            
            <button 
              onClick={toggleDarkMode}
              className={clsx(
                "p-2.5 rounded-xl transition-all mr-2",
                scrolled 
                  ? "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5" 
                  : "text-zinc-950/80 dark:text-white/80 hover:bg-zinc-950/5 dark:hover:bg-white/10"
              )}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contacto"
              className={clsx(
                "group relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold overflow-hidden transition-all hover:scale-105 active:scale-95",
                scrolled 
                  ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-lg shadow-zinc-950/10 dark:shadow-none" 
                  : "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center">
                Hablemos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-950 dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-950 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 p-6 bg-white rounded-3xl border border-zinc-200 shadow-2xl z-50"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-4 text-xl font-bold text-zinc-900 border-b border-zinc-100 flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="text-zinc-300" />
                </a>
              ))}
              <a
                href="#contacto"
                className="w-full text-center px-6 py-5 rounded-2xl bg-zinc-950 text-white font-black text-lg mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Empezar Proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

