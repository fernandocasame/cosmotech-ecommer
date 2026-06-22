"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export function LogoAsterisk({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="url(#nav-logo-grad-green)" />
      <rect x="11" y="2.5" width="2" height="4.5" rx="1" fill="url(#nav-logo-grad-blue)" />
      <rect x="11" y="17" width="2" height="4.5" rx="1" fill="url(#nav-logo-grad-blue)" />
      <rect x="2.5" y="11" width="4.5" height="2" rx="1" fill="url(#nav-logo-grad-blue)" />
      <rect x="17" y="11" width="4.5" height="2" rx="1" fill="url(#nav-logo-grad-blue)" />
      <g transform="rotate(45 12 12)">
        <rect x="11" y="2.5" width="2" height="4.5" rx="1" fill="url(#nav-logo-grad-green)" />
        <rect x="11" y="17" width="2" height="4.5" rx="1" fill="url(#nav-logo-grad-green)" />
        <rect x="2.5" y="11" width="4.5" height="2" rx="1" fill="url(#nav-logo-grad-green)" />
        <rect x="17" y="11" width="4.5" height="2" rx="1" fill="url(#nav-logo-grad-green)" />
      </g>
      <defs>
        <linearGradient id="nav-logo-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="nav-logo-grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Force remove any leftover dark mode class and localStorage from previous iterations
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Resultados", href: "#resultados" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx(
          "flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-full border",
          scrolled
            ? "bg-white/70 backdrop-blur-md border-white/50 shadow-lg shadow-slate-900/5"
            : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <LogoAsterisk className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Softnow
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-650 hover:text-slate-900 rounded-full hover:bg-slate-900/[0.03] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            <div className="w-px h-4 bg-slate-200 mx-2" />

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-md shadow-accent-500/10 hover:shadow-accent-500/20"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/60 z-50 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-50 flex justify-between items-center transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={16} className="text-slate-400" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#contacto"
                  className="w-full text-center block px-6 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
