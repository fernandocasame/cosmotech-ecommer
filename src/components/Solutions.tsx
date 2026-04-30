"use client";

import { motion } from "framer-motion";
import { MessageSquare, LayoutGrid, CheckSquare, ArrowUpRight } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      name: "FlowChat",
      desc: "Plataforma omnicanal avanzada para comunicación masiva y automatización de ventas.",
      icon: MessageSquare,
      color: "bg-blue-500",
      link: "#"
    },
    {
      name: "Nubox",
      desc: "Ecosistema ERP integral para la gestión contable y administrativa de empresas modernas.",
      icon: LayoutGrid,
      color: "bg-indigo-600",
      link: "#"
    },
    {
      name: "Taskify",
      desc: "Gestión de proyectos y productividad empresarial para equipos de alto rendimiento.",
      icon: CheckSquare,
      color: "bg-emerald-500",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 dark:text-brand-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Ecosistema de Soluciones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-black text-zinc-950 dark:text-white leading-[1.1]"
          >
            Nuestras <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 font-medium">Soluciones</span> de Élite
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-white/5 overflow-hidden transition-all duration-500"
            >
              {/* Background Glow */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 ${sol.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 ${sol.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-zinc-200/50 dark:shadow-none group-hover:scale-110 transition-transform duration-500`}>
                <sol.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-black text-zinc-950 dark:text-white mb-4 tracking-tight flex items-center">
                {sol.name}
                <ArrowUpRight className="ml-2 w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-8">
                {sol.desc}
              </p>

              <div className="pt-6 border-t border-zinc-200/50 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 group-hover:tracking-[0.3em] transition-all duration-500">
                  Ver Solución
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
