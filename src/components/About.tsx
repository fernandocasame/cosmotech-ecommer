"use client";

import { motion } from "framer-motion";
import { Search, Code2, RefreshCcw, Rocket } from "lucide-react";

export function About() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Descubrimiento & Arquitectura",
      desc: "Analizamos tus necesidades técnicas y comerciales para diseñar el mapa tecnológico óptimo para tu negocio.",
      color: "text-brand-600 bg-brand-50"
    },
    {
      num: "02",
      icon: Code2,
      title: "Desarrollo Modular & Limpio",
      desc: "Escribimos código modular y estructurado en React, Next.js y Python, respaldado por pruebas unitarias automatizadas.",
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      num: "03",
      icon: RefreshCcw,
      title: "Integración & Sincronización",
      desc: "Conectamos tus APIs, bases de datos y sistemas legados bajo flujos robustos de información sin fricción técnica.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      num: "04",
      icon: Rocket,
      title: "Despliegue Cloud & Escala",
      desc: "Lanzamos a producción en infraestructura auto-escalable sobre AWS y GCP, monitoreada de forma proactiva 24/7.",
      color: "text-slate-800 bg-slate-100"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="nosotros">
      {/* Background soft glows */}
      <div className="glow-spot-blue w-[400px] h-[400px] top-[10%] left-[-10%]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full border border-brand-100"
          >
            Nuestra Metodología
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-slate-900 leading-tight tracking-tight font-serif"
          >
            Ingeniería de Software <span className="gradient-text">de Alto Rendimiento</span>
          </motion.h2>
          
          <p className="text-slate-550 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            No improvisamos. Aplicamos procesos estructurados de diseño de sistemas para mitigar riesgos, acelerar lanzamientos y construir valor real.
          </p>
        </div>

        {/* Steps Grid with Staggered Entrance Animations */}
        <motion.div 
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 14
                  }
                }
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)"
              }}
              className="glass-card p-6 md:p-8 rounded-3xl flex flex-col relative cursor-pointer transition-shadow"
            >
              {/* Step number badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-black font-serif text-slate-200">{step.num}</span>
                <div className={`w-9 h-9 rounded-full ${step.color} border border-slate-200/20 flex items-center justify-center shadow-sm`}>
                  <step.icon className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Step Title */}
              <h4 className="text-base font-bold text-slate-900 mb-3 tracking-tight font-serif">
                {step.title}
              </h4>
              
              {/* Step Desc */}
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
