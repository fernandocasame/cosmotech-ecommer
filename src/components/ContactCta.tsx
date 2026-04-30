"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      {/* Background with advanced gradient mesh */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-900/30 dark:from-brand-600/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-20 backdrop-blur-3xl shadow-2xl overflow-hidden relative">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                ✨ ¿Listo para despegar?
              </div>
              
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black text-white mb-8 leading-[1.1]">
                ¿Tu marca está lista para conquistar el <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400 font-medium">universo digital?</span>
              </h2>
              
              <p className="text-zinc-300 text-lg mb-10 leading-relaxed max-w-lg font-light">
                Únete a los negocios que ya están escalando con CosmoTech. Solicita una consultoría de evaluación gratuita y descubre tu potencial real.
              </p>

              <div className="space-y-6">
                {[
                  "Respuesta prioritaria en menos de 24h",
                  "Análisis profundo de tu presencia actual",
                  "Roadmap estratégico preliminar"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 text-zinc-300">
                    <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-brand-400" />
                    </div>
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border border-white/10 dark:border-white/5">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-24 h-24 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="w-12 h-12 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mb-3">¡Solicitud Enviada!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light">Nos pondremos en contacto contigo increíblemente rápido.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white mb-8 tracking-tight">Solicita tu consultoría</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Nombre Completo</label>
                      <input type="text" id="name" required className="w-full px-5 py-4 rounded-2xl border border-zinc-100 dark:border-white/5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50 dark:bg-white/5 text-zinc-950 dark:text-white" placeholder="Ej. Juan Pérez" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Email</label>
                        <input type="email" id="email" required className="w-full px-5 py-4 rounded-2xl border border-zinc-100 dark:border-white/5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50 dark:bg-white/5 text-zinc-950 dark:text-white" placeholder="tu@email.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Empresa</label>
                        <input type="text" id="company" className="w-full px-5 py-4 rounded-2xl border border-zinc-100 dark:border-white/5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50 dark:bg-white/5 text-zinc-950 dark:text-white" placeholder="Tu Negocio" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Proyecto</label>
                      <textarea id="message" rows={3} className="w-full px-5 py-4 rounded-2xl border border-zinc-100 dark:border-white/5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50 dark:bg-white/5 text-zinc-950 dark:text-white resize-none" placeholder="¿Cuáles son tus objetivos?"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="w-full relative group bg-zinc-950 dark:bg-brand-600 text-white font-bold py-5 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center">
                      Enviar Solicitud
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
