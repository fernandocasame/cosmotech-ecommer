"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award, BarChart } from "lucide-react";
import Image from "next/image";

export function Results() {
  const steps = [
    { num: "01", title: "Diagnóstico", desc: "Auditamos tu marca y detectamos oportunidades." },
    { num: "02", title: "Estrategia", desc: "Diseñamos un roadmap orientado a resultados." },
    { num: "03", title: "Ejecución", desc: "Implementamos con precisión y creatividad." },
    { num: "04", title: "Optimización", desc: "Medimos, iteramos y escalamos." }
  ];

  const stats = [
    { icon: TrendingUp, label: "ROI Promedio", value: "385%", color: "text-brand-400" },
    { icon: Users, label: "Clientes Satisfechos", value: "100%", color: "text-indigo-400" },
    { icon: Award, label: "Premios Ganados", value: "12", color: "text-amber-400" },
    { icon: BarChart, label: "Crecimiento", value: "10x", color: "text-emerald-400" },
  ];

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden transition-colors duration-500" id="resultados">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/10 dark:bg-brand-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 dark:bg-accent-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          
          <div className="order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-400 dark:text-brand-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Nuestro ADN
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black mb-8 leading-tight tracking-tighter"
            >
              Metodología <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400 italic">de alto rendimiento</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl mb-12 font-light leading-relaxed max-w-lg"
            >
              No creemos en la suerte. Creemos en procesos rigurosos que transforman el potencial en resultados exponenciales.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-black text-zinc-800 dark:text-zinc-800 group-hover:text-brand-500/50 transition-colors duration-500">{step.num}</span>
                    <h4 className="text-xl font-bold">{step.title}</h4>
                  </div>
                  <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/5 dark:border-white/5 shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)] dark:shadow-none group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
              <Image 
                src="/images/results_visual.png" 
                alt="Marketing Results" 
                width={800} 
                height={1000}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="dark-glass p-8 rounded-3xl border border-white/10 backdrop-blur-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <p className="font-bold text-lg">Resultados Garantizados</p>
                  </div>
                  <p className="text-zinc-400 text-sm font-light">
                    "Nuestra tasa de éxito es del 98%. Si no vemos potencial de crecimiento real en tu negocio, no tomamos el proyecto."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-zinc-900 dark:border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-zinc-900 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-all duration-500 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <h5 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</h5>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

