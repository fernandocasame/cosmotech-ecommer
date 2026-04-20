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
    <section className="py-24 bg-white overflow-hidden relative" id="nosotros">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-indigo-50 rounded-full scale-[1.15] -rotate-6 transition-transform duration-700 group-hover:rotate-0" />
              <div className="absolute inset-0 bg-white shadow-2xl rounded-full flex items-center justify-center p-12 border border-zinc-100">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:20px_20px] rounded-full" />
                <Image 
                  src="/images/logo.png" 
                  alt="CosmoTech Logo" 
                  width={300} 
                  height={300}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>

              {/* Badges */}
              <div className="absolute -right-8 top-12 bg-white px-4 py-2 rounded-xl shadow-lg border border-zinc-100 font-bold text-sm z-20 flex items-center gap-2">
                <span>🏆</span> Top Agency 2026
              </div>
              <div className="absolute -left-8 bottom-12 bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm z-20 flex items-center gap-2">
                <span>⭐</span> 5-Star Rated
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Sobre CosmoTech
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              La agencia que tu marca <span className="italic text-brand-600 font-normal">merecía</span>
            </h2>
            
            <p className="text-zinc-600 text-lg mb-4 leading-relaxed">
              Nacemos de la pasión por el marketing digital y la obsesión por los resultados medibles. En CosmoTech no gestionamos presupuestos, <strong className="text-zinc-900 font-semibold">construimos ecosistemas digitales</strong> que generan impacto real.
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Nuestro equipo de élite combina creatividad con análisis de datos precisos para crear estrategias que evolucionan constantemente y superan los objetivos.
            </p>

            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mr-4">
                    <v.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">{v.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
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
