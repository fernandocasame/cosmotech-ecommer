"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Database, Cpu, Cloud, GitBranch } from "lucide-react";
import { LogoAsterisk } from "./Navbar";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-24" id="hero">
      {/* ── Background Gradients & Dot Pattern ────────────────── */}
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      {/* Soft drifting color orbs behind content */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 25, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="glow-spot-blue w-[600px] h-[600px] top-[-10%] left-[10%]"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -30, 0],
          y: [0, 35, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="glow-spot-green w-[500px] h-[500px] bottom-[15%] right-[5%]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Centered Typography */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-55 border border-brand-100/50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-500 animate-pulse" />
            <span>Ingeniería Digital de Siguiente Nivel</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,7vw,4.8rem)] font-bold font-serif leading-[1.1] tracking-tight text-slate-900 mb-8"
          >
            Construimos el software que <br className="hidden md:inline" />
            impone el <span className="gradient-text">ritmo tecnológico</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            En <span className="font-semibold text-slate-900">SoftNow</span> diseñamos y desarrollamos
            plataformas a medida, integraciones de inteligencia artificial y arquitecturas cloud de alto rendimiento para escalar tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35"
            >
              Solicitar acceso anticipado
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-slate-700 font-semibold text-base border border-slate-200 bg-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>

        {/* ── Central Interactive Graphics Layout (adiyo-style) ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto h-[350px] md:h-[450px] flex items-center justify-center"
        >
          {/* Active curved connecting lines behind elements */}
          <svg className="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150 150 C 250 120, 320 200, 450 200" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-line-flow text-slate-300/80" />
            <path d="M 450 200 C 580 200, 650 120, 750 150" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-line-flow text-slate-300/80" />
            <path d="M 180 320 Q 320 380, 450 200" fill="none" stroke="currentColor" strokeWidth="1.8" className="animate-line-flow-reverse text-slate-200" />
            <path d="M 450 200 Q 580 380, 720 320" fill="none" stroke="currentColor" strokeWidth="1.8" className="animate-line-flow text-slate-200" />
          </svg>

          {/* 1. Center glowing node */}
          <motion.div
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] bg-gradient-to-tr from-brand-100 to-accent-100 flex items-center justify-center shadow-lg border border-white/80"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-300 to-accent-300 opacity-20 blur-xl animate-pulse" />
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white flex items-center justify-center shadow-md border border-white relative z-10">
              <LogoAsterisk className="w-12 h-12 md:w-16 md:h-16 animate-[spin_40s_linear_infinite] hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* 2. Floating Integrations (Left side top) */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute left-[5%] top-[10%] md:left-[8%] md:top-[12%] flex flex-wrap gap-2.5 max-w-[150px] md:max-w-[180px] p-3 rounded-3xl glass-card items-center justify-center shadow-md border border-white/60 hover:shadow-lg transition-shadow"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-all duration-200" title="Database">
              <Database className="w-4 h-4 text-slate-600" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-all duration-200" title="Cloud">
              <Cloud className="w-4 h-4 text-slate-600" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-all duration-200" title="Processor">
              <Cpu className="w-4 h-4 text-slate-600" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-all duration-200" title="Git">
              <GitBranch className="w-4 h-4 text-slate-600" />
            </div>
          </motion.div>

          {/* 3. Left Metric Card (50% speed) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute left-[2%] bottom-[12%] md:left-[6%] md:bottom-[15%] glass-card rounded-2xl p-4 w-44 md:w-52 shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-brand-650" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-serif text-slate-900">50%</span>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-normal">
              Reducción en tiempos de carga y respuesta de servidores.
            </p>
          </motion.div>

          {/* 4. Right Metric Card (100% uptime) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[2%] top-[10%] md:right-[6%] md:top-[12%] glass-card rounded-2xl p-4 w-44 md:w-52 shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all"
          >
            <div className="text-xl md:text-2xl font-bold font-serif text-slate-900 mb-1">100%</div>
            <p className="text-xs text-slate-500 font-medium leading-normal mb-1.5">
              Uptime garantizado bajo arquitecturas tolerantes a fallos.
            </p>
            <span className="text-[10px] font-bold text-accent-655 bg-accent-50/80 px-2 py-0.5 rounded-full uppercase">
              Cloud AWS / GCP
            </span>
          </motion.div>

          {/* 5. Team Stack (Right side bottom) */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute right-[5%] bottom-[12%] md:right-[8%] md:bottom-[15%] glass-card rounded-2xl p-4 w-44 md:w-48 shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all"
          >
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">Ingenieros SoftNow</span>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-brand-300 to-accent-300 border border-white flex items-center justify-center text-[9px] font-bold text-slate-800">JS</div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent-200 to-brand-200 border border-white flex items-center justify-center text-[9px] font-bold text-slate-800">MC</div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-300 to-green-300 border border-white flex items-center justify-center text-[9px] font-bold text-slate-800">AL</div>
              </div>
              <span className="text-xs text-slate-655 font-bold">Asignados 24/7</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
