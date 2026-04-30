"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Microscope, Rocket } from "lucide-react";

export function About() {
  const values = [
    { icon: Target, title: "Orientados a Resultados", desc: "Cada acción tiene un propósito medible y cuantificable en tu línea de fondo." },
    { icon: Microscope, title: "Data-Driven", desc: "Decisiones basadas en datos puros, no en intuiciones pasajeras." },
    { icon: Rocket, title: "Innovación Constante", desc: "Siempre a la vanguardia del ecosistema tecnológico global." }
  ];

  return (
    <section className="py-32 bg-white dark:bg-zinc-950 overflow-hidden relative transition-colors duration-500" id="nosotros">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-50/50 dark:bg-brand-900/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-indigo-50 dark:from-brand-900/20 dark:to-indigo-900/10 rounded-[2.5rem] scale-[1.15] -rotate-6 transition-transform duration-700 group-hover:rotate-0" />
              <div className="absolute inset-0 bg-white dark:bg-zinc-900 shadow-2xl rounded-[2.5rem] flex items-center justify-center p-12 border border-zinc-100 dark:border-white/5">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[radial-gradient(#000_2px,transparent_2px)] dark:bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:20px_20px] rounded-[2.5rem]" />
                <Image 
                  src="/images/logo.png" 
                  alt="CosmoTech Logo" 
                  width={300} 
                  height={300}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>

              {/* Badges */}
              <div className="absolute -right-8 top-12 bg-white dark:bg-zinc-800 dark:text-white px-4 py-2 rounded-xl shadow-lg border border-zinc-100 dark:border-white/10 font-bold text-sm z-20 flex items-center gap-2">
                <span>🏆</span> Top Agency 2026
              </div>
              <div className="absolute -left-8 bottom-12 bg-zinc-950 dark:bg-brand-600 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm z-20 flex items-center gap-2">
                <span>⭐</span> 5-Star Rated
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-100 dark:border-white/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-8">
              Sobre CosmoTech
            </div>
            
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-black text-zinc-950 dark:text-white mb-8 leading-[1.1]">
              La agencia que tu marca <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 font-medium">merecía</span>
            </h2>
            
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-6 leading-relaxed font-light">
              Nacemos de la pasión por el marketing digital y la obsesión por los resultados medibles. En CosmoTech no gestionamos presupuestos, <strong className="text-zinc-950 dark:text-zinc-100 font-bold">construimos ecosistemas digitales</strong> que generan impacto real.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10 leading-relaxed font-light">
              Nuestro equipo de élite combina creatividad con análisis de datos precisos para crear estrategias que evolucionan constantemente y superan los objetivos.
            </p>

            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 text-brand-600 dark:text-brand-400 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <v.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-950 dark:text-white mb-1 tracking-tight">{v.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  );
}
