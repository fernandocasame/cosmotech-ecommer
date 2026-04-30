"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "CosmoTech transformó completamente nuestra presencia digital. En solo 3 meses triplicamos nuestro tráfico orgánico y las ventas aumentaron un 240%.",
      author: "María Rodríguez",
      role: "CEO · TechVision",
      initials: "MR",
      color: "from-blue-500 to-indigo-500"
    },
    {
      text: "No solo entregan resultados extraordinarios, sino que se convierten en un verdadero socio estratégico. Su enfoque data-driven es impresionante. Los mejores del sector.",
      author: "Carlos López",
      role: "Fundador · NovaCorp",
      initials: "CL",
      color: "from-sky-400 to-blue-500"
    },
    {
      text: "Las campañas de Google Ads que gestionan tienen un ROI que no había visto con ninguna otra agencia. Profesionales de otro nivel, resultados al siguiente nivel.",
      author: "Andrea Martínez",
      role: "Directora · EliteMedia",
      initials: "AM",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 dark:text-brand-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Voces del Éxito
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-black text-zinc-950 dark:text-white leading-[1.1]"
          >
            Líderes que <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 font-medium">confían</span> en nuestra visión
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-900 p-10 rounded-[2rem] shadow-sm border border-zinc-100 dark:border-white/5 flex flex-col h-full relative group transition-all duration-300"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-zinc-50 dark:text-white/5 group-hover:text-brand-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-8 text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              
              <p className="text-zinc-500 dark:text-zinc-400 mb-10 flex-grow leading-relaxed font-light text-lg italic">
                "{test.text}"
              </p>
              
              <div className="flex items-center space-x-5 mt-auto">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${test.color} flex items-center justify-center text-white font-black tracking-wider shadow-lg shadow-brand-500/20`}>
                  {test.initials}
                </div>
                <div>
                  <p className="font-bold text-zinc-950 dark:text-white text-lg tracking-tight">{test.author}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-widest text-[10px]">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}
