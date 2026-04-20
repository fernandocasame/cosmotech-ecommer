"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Results() {
  const steps = [
    { num: "01", title: "Diagnóstico", desc: "Auditamos tu marca y detectamos oportunidades." },
    { num: "02", title: "Estrategia", desc: "Diseñamos un roadmap orientado a resultados." },
    { num: "03", title: "Ejecución", desc: "Implementamos con precisión y creatividad." },
    { num: "04", title: "Optimización", desc: "Medimos, iteramos y escalamos." }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="resultados">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Nuestro Proceso</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              El método detrás del <span className="italic font-normal text-brand-300">éxito</span> de tu marca
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              No dejamos nada al azar. Cada paso en nuestra metodología está pensado para maximizar tu inversión y generar crecimiento sostenible.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center font-serif text-brand-400">
                      {step.num}
                    </div>
                    {idx < steps.length - 1 && <div className="w-px h-full bg-zinc-800 my-2" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-zinc-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800 p-8 md:p-12 rounded-[2.5rem] border border-zinc-700 relative">
            <div className="absolute -top-6 -right-6 text-6xl opacity-10">📊</div>
            <h3 className="text-3xl font-serif font-bold mb-8">Nuestros números hablan</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-zinc-300">ROI Promedio</span>
                  <span className="font-bold text-white">385%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-500 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-zinc-300">Alcance Orgánico Incrementado</span>
                  <span className="font-bold text-white">10x</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-indigo-500 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-zinc-300">Campañas Exitosas</span>
                  <span className="font-bold text-white">20+</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 bg-zinc-900/50 rounded-2xl p-6 border border-zinc-700 flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
              <p className="text-sm text-zinc-300 leading-relaxed">
                "El 98% de nuestros clientes recuperan su inversión inicial durante los primeros 3 meses de trabajo continuo con nuestra metodología probada."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
