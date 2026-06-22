"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, ShieldCheck, Plus } from "lucide-react";
import { LogoAsterisk } from "./Navbar";

export function Services() {
  const services = [
    {
      title: "Desarrollo Cloud & IA",
      desc: "Diseñamos software integrado con modelos GPT y LLMs especializados. Ingerimos y procesamos tus flujos de datos corporativos en tiempo real.",
      icon: Brain,
      color: "text-brand-500 bg-brand-50",
      accentGrad: "from-brand-500/10 to-brand-500/2"
    },
    {
      title: "Arquitectura Cloud Auto-Escalable",
      desc: "Implementamos infraestructura resiliente y tolerante a fallos sobre AWS y GCP. Operaciones automatizadas preparadas para soportar millones de peticiones.",
      icon: Cloud,
      color: "text-emerald-500 bg-emerald-50",
      accentGrad: "from-emerald-500/10 to-emerald-500/2"
    },
    {
      title: "Seguridad & Datos de Élite",
      desc: "Diseñamos sistemas bajo normativas estrictas de protección de datos, asegurando integraciones robustas y flujos de negocio auditados.",
      icon: ShieldCheck,
      color: "text-slate-800 bg-slate-100",
      accentGrad: "from-slate-500/10 to-slate-500/2"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="servicios">
      {/* Background Soft Glow */}
      <div className="glow-spot-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full border border-brand-100"
          >
            Qué Nos Diferencia
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-slate-900 leading-tight tracking-tight font-serif"
          >
            Menos Complejidad, <span className="gradient-text">Mejores Resultados</span>
          </motion.h2>
        </div>

        {/* Cards Grid with Staggered Spring Animation */}
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
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 85,
                    damping: 14
                  }
                }
              }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group cursor-pointer"
            >
              {/* Connector icon graphic (* + Icon) */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover:rotate-45 transition-transform duration-300">
                  <LogoAsterisk className="w-5 h-5 text-slate-400" />
                </div>
                <span className="text-slate-300 font-light text-sm">+</span>
                <div className={`w-9 h-9 rounded-full ${service.color} border border-slate-200/40 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-350`}>
                  <service.icon className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight font-serif">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-550 leading-relaxed text-sm md:text-[14.5px] font-normal">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
