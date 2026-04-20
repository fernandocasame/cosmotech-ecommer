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
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-900/40 to-transparent pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-900/30 to-transparent pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                ✨ ¿Listo para despegar?
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ¿Tu marca está lista para conquistar el <span className="italic text-brand-300 font-normal">universo digital?</span>
              </h2>
              
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-lg">
                Únete a los más de 15 negocios que ya están escalando con CosmoTech. Solicita una consultoría de evaluación gratuita, sin compromisos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-brand-400" />
                  <span>Respuesta prioritaria en menos de 24h</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-brand-400" />
                  <span>Análisis profundo de tu presencia actual</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-brand-400" />
                  <span>Roadmap estratégico preliminar</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-zinc-600">Nos pondremos en contacto contigo increíblemente rápido.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Solicita tu consultoría</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Nombre Completo</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50" placeholder="Ej. Juan Pérez" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50" placeholder="tu@email.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1">Empresa</label>
                        <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50" placeholder="Tu Negocio" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Cuéntanos sobre tu proyecto</label>
                      <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-zinc-50 resize-none" placeholder="¿Cuáles son tus objetivos?"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="w-full mt-2 bg-zinc-900 text-white font-medium py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-brand-600 transition-colors duration-300">
                    <span>Enviar Solicitud</span>
                    <Send className="w-4 h-4" />
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
