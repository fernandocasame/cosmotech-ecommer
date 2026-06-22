"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export function Solutions() {
  return (
    <section className="py-24 relative overflow-hidden" id="soluciones">
      {/* Background Soft Glows */}
      <div className="glow-spot-green w-[500px] h-[500px] top-[20%] right-[-10%]" />
      <div className="glow-spot-blue w-[400px] h-[400px] bottom-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block text-brand-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Integración de Ingeniería
            </span>

            <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-slate-900 mb-8 leading-tight tracking-tight font-serif">
              Tus equipos de desarrollo son excelentes, <br className="hidden md:inline" />
              <span className="gradient-text">SoftNow los hace aún mejores</span>
            </h2>

            <p className="text-slate-650 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Habilitamos a tus líderes técnicos y desarrolladores para construir y desplegar plataformas críticas sin fricciones. SoftNow automatiza la sincronización de APIs, despliegues en la nube e inteligencia artificial a medida, asegurando que tu código corra de forma óptima desde el día uno.
            </p>

            {/* List of benefits */}
            <div className="space-y-4 mb-10 w-full max-w-md">
              {[
                "Soporte inmediato para integraciones de modelos LLM",
                "Monitoreo proactivo de latencia y consumo cloud",
                "Estructuración automática de código limpio y modular"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-slate-600 text-sm md:text-[14.5px] font-normal leading-tight text-left">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35"
            >
              Solicitar acceso anticipado
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column — Professional Image with floating chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Soft decorative color shape behind image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-100 to-accent-100 rounded-[3rem] blur-2xl opacity-50 -z-10" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-[360px] md:max-w-[400px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/80 shadow-2xl">
              <Image
                src="/developer_hero.png"
                alt="SoftNow developer leading project"
                fill
                sizes="(max-w-750px) 100vw, 400px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating Glass Chart Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-[-5%] right-[-5%] md:right-[-2%] glass-card rounded-2xl p-4 md:p-5 w-52 md:w-60 shadow-2xl border border-white/70 relative z-20"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Peticiones API / sec</span>
                <span className="text-[10px] font-bold text-emerald-650 bg-emerald-50 px-2 py-0.5 rounded-full">+2.4%</span>
              </div>
              <div className="text-xl md:text-2xl font-bold font-serif text-slate-900 mb-3">6,845</div>

              {/* Custom SVG Line Chart with Viewport Entrance Animation */}
              <svg viewBox="0 0 100 30" className="w-full h-12 text-emerald-500 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M0,25 Q15,10 30,20 T60,5 T90,15 T100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.path
                  d="M0,25 Q15,10 30,20 T60,5 T90,15 T100,10 L100,30 L0,30 Z"
                  fill="url(#chart-gradient-fill)"
                  opacity="0.12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.12 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.circle
                  cx="100"
                  cy="10"
                  r="2.5"
                  className="fill-emerald-500 stroke-white stroke-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                />
                <circle cx="100" cy="10" r="2.5" className="fill-emerald-500 stroke-white stroke-2 animate-ping" style={{ animationDelay: '1.8s' }} />
                <defs>
                  <linearGradient id="chart-gradient-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
