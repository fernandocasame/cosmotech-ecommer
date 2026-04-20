"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "CosmoTech transformó completamente nuestra presencia digital. En solo 3 meses triplicamos nuestro tráfico orgánico y las ventas aumentaron un 240%.",
      author: "María Rodríguez",
      role: "CEO · TechVision",
      initials: "MR",
      color: "from-blue-500 to-indigo-500"
    },
    {
      text: "No solo entregan resultados extraordinarios, sino que se convierten en un verdadero socio estratégico. Su enfoque data-driven es impresionante. Los mejores del sector.",
      author: "Carlos López",
      role: "Fundador · NovaCorp",
      initials: "CL",
      color: "from-sky-400 to-blue-500"
    },
    {
      text: "Las campañas de Google Ads que gestionan tienen un ROI que no había visto con ninguna otra agencia. Profesionales de otro nivel, resultados al siguiente nivel.",
      author: "Andrea Martínez",
      role: "Directora · EliteMedia",
      initials: "AM",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Líderes que <span className="italic text-brand-600 font-normal">confían</span> en nosotros
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col h-full relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-zinc-100" />
              
              <div className="flex gap-1 mb-6 text-yellow-400 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              
              <p className="text-zinc-600 mb-8 flex-grow leading-relaxed relative z-10">
                "{test.text}"
              </p>
              
              <div className="flex items-center space-x-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${test.color} flex items-center justify-center text-white font-bold tracking-wider shadow-inner`}>
                  {test.initials}
                </div>
                <div>
                  <p className="font-bold text-zinc-900">{test.author}</p>
                  <p className="text-sm text-zinc-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
