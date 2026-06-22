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
      {/* Background Soft Sky Blue leak */}
      <div className="glow-spot-blue w-[600px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Container Box */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

            {/* Info Column */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-wider mb-8">
                ✨ ¿Listo para crear el futuro?
              </div>

              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                ¿Tu plataforma está lista para el <span className="gradient-text font-medium">siguiente nivel?</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-normal">
                Únete a las empresas que lideran el mercado digital de la mano de SoftNow. Solicita una consultoría de arquitectura gratuita y diseñemos tu roadmap tecnológico.
              </p>

              <div className="space-y-6">
                {[
                  "Respuesta técnica detallada en menos de 24h",
                  "Análisis preliminar de arquitectura y stack",
                  "Plan de desarrollo y estimación de inversión"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="font-normal text-sm md:text-base text-slate-650">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 shadow-xl relative border border-slate-200/60">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-slate-500 font-light text-sm md:text-base">Un ingeniero de nuestro equipo se pondrá en contacto contigo muy pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Solicita tu consultoría</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2 ml-1">Nombre Completo</label>
                      <input type="text" id="name" required className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="Ej. Juan Pérez" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2 ml-1">Email Corporativo</label>
                        <input type="email" id="email" required className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="tu@empresa.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2 ml-1">Compañía / Empresa</label>
                        <input type="text" id="company" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="Nombre de tu negocio" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2 ml-1">Cuéntanos sobre tu proyecto</label>
                      <textarea id="message" rows={3} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400 text-sm resize-none" placeholder="¿Qué objetivos técnicos o comerciales buscas resolver?"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-md shadow-accent-500/10 cursor-pointer">
                    Enviar Solicitud
                    <Send className="w-3.5 h-3.5" />
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
