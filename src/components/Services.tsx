"use client";

import { motion } from "framer-motion";
import { Search, Smartphone, Monitor, Target, Mail, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "SEO & Posicionamiento",
      desc: "Llevamos tu web a la cima de Google con estrategias SEO avanzadas. Más visibilidad, más tráfico orgánico.",
      icon: Search,
      tags: ["On-Page", "Link Building", "Auditoría"],
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Social Media",
      desc: "Gestionamos tu presencia en redes sociales con contenido estratégico que conecta y genera comunidad.",
      icon: Smartphone,
      tags: ["Instagram", "TikTok", "LinkedIn"],
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      title: "Diseño & Dev Web",
      desc: "Sitios web y landing pages de alto impacto que convierten visitantes en clientes. Experiencias premium.",
      icon: Monitor,
      tags: ["UX/UI", "E-commerce", "Web Apps"],
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Publicidad Digital",
      desc: "Campañas altamente optimizadas en Google y Meta Ads. ROI máximo con targeting preciso.",
      icon: Target,
      tags: ["Google Ads", "Meta Ads", "PPC"],
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Email Marketing",
      desc: "Secuencias de email que nutren leads y convierten prospectos en clientes fieles las 24 horas.",
      icon: Mail,
      tags: ["Automatización", "Nurturing", "A/B Testing"],
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Analítica & Estrategia",
      desc: "Convertimos datos en decisiones estratégicas. Reportes claros y roadmaps de crecimiento.",
      icon: BarChart3,
      tags: ["Analytics", "KPIs", "Reporting"],
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Lo que hacemos para ti</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
            Servicios que <span className="italic text-brand-600 font-normal">potencian</span> tu negocio
          </h2>
          <p className="text-lg text-zinc-600">
            Estrategias digitales de alto impacto diseñadas para escalar tu marca y multiplicar tus resultados, con una ejecución sencillamente impecable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl ${service.bg} text-brand-600 flex items-center justify-center mb-6`}>
                <service.icon size={28} className={service.color} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
