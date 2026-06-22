"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Database, Zap, ShieldCheck, Cpu, RefreshCw } from "lucide-react";
import { LogoAsterisk } from "./Navbar";

export function Results() {
  const stats = [
    { icon: Zap, label: "Velocidad de Respuesta", value: "< 1.0s", color: "text-brand-500 bg-brand-50" },
    { icon: RefreshCw, label: "Sincronización Cloud", value: "Realtime", color: "text-emerald-500 bg-emerald-50" },
    { icon: ShieldCheck, label: "Código Seguro", value: "100%", color: "text-slate-800 bg-slate-100" },
    { icon: Cpu, label: "Capacidad de Escala", value: "10x", color: "text-brand-600 bg-brand-50" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="resultados">
      {/* Background Soft Glows */}
      <div className="glow-spot-blue w-[500px] h-[500px] bottom-0 left-[20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Split Section: Diagram Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* Left Column — CRM Integration Tree Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center py-10"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-accent-50 rounded-[3rem] blur-xl opacity-60 -z-10" />

            {/* Tree diagram layout */}
            <div className="relative w-full max-w-[380px] p-6 rounded-[2.5rem] glass-card border border-white/80 shadow-2xl flex flex-col items-center">
              {/* Header Connector Point */}
              <div className="bg-white border border-slate-200/60 shadow-sm px-4 py-1.5 rounded-full text-slate-400 font-bold text-[9px] uppercase tracking-wider mb-8">
                Your CRM
              </div>

              {/* Dotted Line Down */}
              <div className="absolute top-[48px] w-px h-10 border-l-2 border-dashed border-slate-200" />

              {/* Mia Carter Avatar card (main node) */}
              <div className="bg-white border border-slate-200/50 rounded-2xl p-4 shadow-md w-full relative z-10 mb-6 mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 flex items-center justify-center font-bold text-white text-xs">
                    MC
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">Mia Carter</h4>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase leading-none mt-0.5">Chief Operations of Soer</p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3.5">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>Nivel de Sincronización</span>
                    <span className="text-brand-650">88%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-brand-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* New Contact Green pill button */}
                <div className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full py-2 px-4 text-xs font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer relative overflow-hidden group">
                  <span className="absolute inset-0 rounded-full bg-emerald-450/40 animate-ping scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <LogoAsterisk className="w-3.5 h-3.5 fill-white stroke-white animate-spin-slow" />
                  <span>Nuevo contacto activo</span>
                </div>
              </div>

              {/* Branched animated curved lines going down */}
              <svg className="w-full h-16 text-slate-200 overflow-visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 64">
                <path d="M 150 0 C 150 30, 40 10, 40 64" fill="none" stroke="currentColor" strokeWidth="2" className="animate-line-flow-reverse text-slate-350" />
                <path d="M 150 0 C 150 30, 260 10, 260 64" fill="none" stroke="currentColor" strokeWidth="2" className="animate-line-flow text-slate-350" />
                <path d="M 150 0 L 150 64" fill="none" stroke="currentColor" strokeWidth="2" className="animate-line-flow text-slate-350" />
              </svg>

              {/* Bottom branching nodes with hover scale effects */}
              <div className="flex justify-between w-full mt-2 relative z-10 px-2">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="w-[80px] h-[80px] rounded-2xl bg-white border border-slate-150 shadow-sm flex flex-col items-center justify-center gap-1 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <Database className="w-5 h-5 text-slate-400" />
                  <span className="text-[9px] text-slate-500 font-bold">SQL DB</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="w-[80px] h-[80px] rounded-2xl bg-white border border-slate-150 shadow-sm flex flex-col items-center justify-center gap-1 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <LogoAsterisk className="w-5 h-5 text-brand-500 animate-[spin_10s_linear_infinite]" />
                  <span className="text-[9px] text-slate-500 font-bold">Softnow</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="w-[80px] h-[80px] rounded-2xl bg-white border border-slate-150 shadow-sm flex flex-col items-center justify-center gap-1 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <Database className="w-5 h-5 text-slate-400" />
                  <span className="text-[9px] text-slate-500 font-bold">Cloud API</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block text-brand-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Automatización Profunda
            </span>

            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-slate-900 mb-8 leading-tight tracking-tight font-serif">
              Integración total sin <br className="hidden md:inline" />
              <span className="gradient-text">fricción técnica</span>
            </h2>

            <p className="text-slate-650 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Tus bases de datos, APIs y sistemas CRM necesitan sincronía. Softnow trabaja en segundo plano para leer, transformar y unificar cada flujo de datos en tu infraestructura. A diferencia de las integraciones manuales complejas, Softnow gestiona pipelines redundantes que protegen tu información y escalan automáticamente.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35"
            >
              Solicitar acceso anticipado
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* ── Stats Grid (at the bottom) ──────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-slate-200/50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group p-4 bg-white/45 backdrop-blur-sm rounded-2xl border border-slate-100 hover:border-slate-200/80 transition-all shadow-sm"
            >
              <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <h5 className="text-2xl md:text-3xl font-bold font-serif mb-1 tracking-tight text-slate-900">{stat.value}</h5>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
