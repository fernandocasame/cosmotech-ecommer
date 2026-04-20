"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-300 to-accent-300 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Agencia Premium de Marketing</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-zinc-900 mb-6">
              Transformamos ideas en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 italic font-normal">
                experiencias épicas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
              En CosmoTech fusionamos estrategia, creatividad y tecnología para 
              catapultar tu marca a otro nivel. Resultados medibles. Impacto real.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-brand-600 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/20 group"
              >
                Impulsa tu Marca
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zinc-900 font-medium border border-zinc-200 hover:border-zinc-900 transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-zinc-100 pt-8">
              <div>
                <p className="text-3xl font-serif font-bold text-zinc-900">15+</p>
                <p className="text-sm font-medium text-zinc-500">Clientes</p>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <p className="text-3xl font-serif font-bold text-zinc-900">98%</p>
                <p className="text-sm font-medium text-zinc-500">Satisfacción</p>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <p className="text-3xl font-serif font-bold text-zinc-900">20+</p>
                <p className="text-sm font-medium text-zinc-500">Proyectos</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-white rounded-[2rem] rotate-3 scale-105" />
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl border border-zinc-100 overflow-hidden flex items-center justify-center">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <Image 
                  src="/images/hero_visual.png" 
                  alt="CosmoTech Dashboard" 
                  width={500} 
                  height={500}
                  className="object-cover w-full h-full relative z-10"
                  priority
                />
              </div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center space-x-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-zinc-900">+385%</p>
                  <p className="text-xs font-medium text-zinc-500">ROI Promedio</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center space-x-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-zinc-900">10x</p>
                  <p className="text-xs font-medium text-zinc-500">Más Alcance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
