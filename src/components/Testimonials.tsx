"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "SoftNow transformó completamente nuestra infraestructura y plataforma web. Su equipo de ingeniería resolvió cuellos de botella críticos, triplicando nuestra velocidad de procesamiento.",
      author: "María Rodríguez",
      role: "CTO · TechVision",
      initials: "MR",
      color: "text-brand-700 bg-brand-50 border-brand-100"
    },
    {
      text: "No solo escriben código limpio, sino que entienden la lógica del negocio. La automatización de procesos con IA que implementaron nos ahorró cientos de horas operativas al mes.",
      author: "Carlos López",
      role: "Fundador · NovaCorp",
      initials: "CL",
      color: "text-emerald-700 bg-emerald-50 border-emerald-100"
    },
    {
      text: "Las soluciones de software a medida y la migración cloud que lideraron corren de forma impecable. Un nivel técnico excepcional y un soporte que realmente responde.",
      author: "Andrea Martínez",
      role: "Directora de Producto · EliteMedia",
      initials: "AM",
      color: "text-slate-800 bg-slate-100 border-slate-200/60"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="testimonios">
      {/* Background Soft Glows */}
      <div className="glow-spot-green w-[600px] h-[300px] bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 bg-brand-50 px-3 py-1 rounded-full border border-brand-100"
          >
            Casos de Éxito
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold text-slate-900 leading-tight tracking-tight font-serif"
          >
            Líderes que aceleran con <span className="gradient-text">nuestra ingeniería</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid with Staggered Spring Animation */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 35 },
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
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)"
              }}
              className="glass-card p-8 md:p-10 rounded-3xl flex flex-col h-full relative group transition-all cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-450" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-650 mb-10 flex-grow leading-relaxed text-sm md:text-[14.5px] font-normal">
                &ldquo;{test.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-slate-200/50">
                <div className={`w-10 h-10 rounded-full border ${test.color} flex items-center justify-center text-sm font-bold shadow-sm group-hover:scale-105 transition-transform`}>
                  {test.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">{test.author}</p>
                  <p className="text-[10px] text-slate-455 font-bold uppercase tracking-wider mt-1">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
