"use client";

import { motion } from "framer-motion";
import { Search, Smartphone, Monitor, Target, Mail, BarChart3, ArrowUpRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "SEO & Posicionamiento",
      desc: "Llevamos tu web a la cima de Google con estrategias SEO avanzadas. Más visibilidad, más tráfico orgánico.",
      icon: Search,
      tags: ["On-Page", "Link Building", "Auditoría"],
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50"
    },
    {
      title: "Social Media",
      desc: "Gestionamos tu presencia en redes sociales con contenido estratégico que conecta y genera comunidad.",
      icon: Smartphone,
      tags: ["Instagram", "TikTok", "LinkedIn"],
      color: "from-pink-500 to-rose-400",
      bg: "bg-pink-50"
    },
    {
      title: "Diseño & Dev Web",
      desc: "Sitios web y landing pages de alto impacto que convierten visitantes en clientes. Experiencias premium.",
      icon: Monitor,
      tags: ["UX/UI", "E-commerce", "Web Apps"],
      color: "from-indigo-500 to-violet-400",
      bg: "bg-indigo-50"
    },
    {
      title: "Publicidad Digital",
      desc: "Campañas altamente optimizadas en Google y Meta Ads. ROI máximo con targeting preciso.",
      icon: Target,
      tags: ["Google Ads", "Meta Ads", "PPC"],
      color: "from-orange-500 to-amber-400",
      bg: "bg-orange-50"
    },
    {
      title: "Email Marketing",
      desc: "Secuencias de email que nutren leads y convierten prospectos en clientes fieles las 24 horas.",
      icon: Mail,
      tags: ["Automatización", "Nurturing", "A/B Testing"],
      color: "from-emerald-500 to-teal-400",
      bg: "bg-emerald-50"
    },
    {
      title: "Analítica & Estrategia",
      desc: "Convertimos datos en decisiones estratégicas. Reportes claros y roadmaps de crecimiento.",
      icon: BarChart3,
      tags: ["Analytics", "KPIs", "Reporting"],
      color: "from-purple-500 to-fuchsia-400",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden transition-colors duration-500" id="servicios">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,110,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 dark:text-brand-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Nuestra Experiencia
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-black text-zinc-950 dark:text-white leading-[1.1]"
            >
              Soluciones que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 dark:from-brand-400 dark:to-accent-400 italic">escalan realidades</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm mb-2"
          >
            No solo hacemos marketing, creamos sistemas de crecimiento imparables para empresas audaces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:shadow-brand-500/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated Border/Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  <service.icon size={32} />
                </div>
                <div className="p-2 rounded-full border border-zinc-100 dark:border-white/5 group-hover:bg-zinc-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-950 transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white mb-4 tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-light text-lg">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 rounded-xl text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-white/10 transition-all">
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

