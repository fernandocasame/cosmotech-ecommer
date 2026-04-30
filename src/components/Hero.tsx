"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Sparkles, Target } from "lucide-react";
import Image from "next/image";

const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const charVars = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const title = "Transformamos ideas en";
  const titleAccent = "experiencias épicas";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500" id="hero">
      {/* Background gradients and elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/50 dark:bg-brand-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-50/30 dark:bg-accent-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      {/* Decorative Dots */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-400 dark:bg-brand-600" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="max-w-2xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-50/80 dark:bg-brand-950/50 backdrop-blur-sm border border-brand-100 dark:border-brand-900/50 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Agencia Digital de Próxima Generación</span>
            </motion.div>
            
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="mb-8"
            >
              <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.05] text-zinc-950 dark:text-white tracking-tighter text-balance">
                {title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-[0.3em] whitespace-nowrap">
                    {word.split("").map((char, j) => (
                      <motion.span key={j} variants={charVars} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
                <br className="hidden md:block" />
                <span className="relative inline-block mt-4">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 italic font-medium pr-4">
                    {titleAccent}
                  </span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.5, ease: "circOut" }}
                    className="absolute bottom-2 left-0 w-full h-[30%] bg-brand-100/60 dark:bg-brand-900/40 -rotate-1 origin-left -z-0 rounded-full" 
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-lg leading-relaxed font-light"
            >
              En <span className="font-semibold text-zinc-900 dark:text-zinc-100 underline decoration-brand-400 decoration-4 underline-offset-8">CosmoTech</span> diseñamos el futuro de tu marca con estrategias que rompen el molde.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <a 
                href="#contacto" 
                className="w-full sm:w-auto relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-zinc-950 dark:bg-brand-600 text-white font-bold text-lg overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-500 dark:to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center">
                  Despegar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#servicios" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white dark:bg-white/5 text-zinc-950 dark:text-white font-bold text-lg border-2 border-zinc-100 dark:border-white/10 hover:border-zinc-950 dark:hover:border-white transition-all hover:shadow-lg"
              >
                Explorar Soluciones
              </a>
            </motion.div>


          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-8 border-white dark:border-zinc-900 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
              <Image 
                src="/images/hero_visual.png" 
                alt="CosmoTech Vision" 
                width={800} 
                height={800}
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              {/* Overlays/Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 glass p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 max-w-[200px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">+420%</p>
                  <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Crecimiento Digital</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 glass p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-white/50 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/40">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-zinc-900 dark:text-white leading-tight">10x</p>
                  <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Velocidad de Escala</p>
                </div>
              </motion.div>
            </div>
            
            {/* Background glowing sphere */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-300/30 dark:from-brand-900/20 to-accent-300/30 dark:to-accent-900/20 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>

  );
}

