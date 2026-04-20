"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Resultados", href: "#resultados" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-zinc-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-zinc-900 leading-none tracking-tight">
              Cosmo<span className="text-brand-600">Tech</span>
            </span>
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mt-1">
              Digital Agency
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-brand-600 transition-colors shadow-lg shadow-zinc-900/20"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-xl py-4 px-4 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-800 py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="w-full text-center px-5 py-3 rounded-xl bg-brand-600 text-white font-medium mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hablemos
          </a>
        </motion.div>
      )}
    </nav>
  );
}
