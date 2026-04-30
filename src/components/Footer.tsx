import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-white/5 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-8 group">
              <span className="font-serif text-3xl font-black text-zinc-950 dark:text-white leading-none tracking-tighter transition-colors">
                Cosmo<span className="text-brand-600 dark:text-brand-400">Tech</span>
              </span>
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] mt-1.5 transition-colors">
                Next-Gen Digital Agency
              </span>
            </a>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-light">
              Transformamos ideas en experiencias digitales épicas. Orientados a resultados y metodologías de alto rendimiento.
            </p>
            <div className="flex space-x-5">
              {[
                { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
              ].map((social, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d={social.icon}/></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-950 dark:text-white mb-8 uppercase tracking-widest text-xs">Servicios</h4>
            <ul className="space-y-4">
              {["SEO & Posicionamiento", "Social Media", "Diseño & Dev Web", "Publicidad Digital", "Email Marketing", "Analítica"].map((link) => (
                <li key={link}>
                  <a href="#servicios" className="text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-950 dark:text-white mb-8 uppercase tracking-widest text-xs">Empresa</h4>
            <ul className="space-y-4">
              {["Sobre Nosotros", "Casos de Éxito", "Testimonios", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-950 dark:text-white mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-6 text-sm text-zinc-500 dark:text-zinc-400">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <a href="mailto:fcasame@gmail.com" className="hover:text-zinc-950 dark:hover:text-white transition-colors font-light">fcasame@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-brand-600 dark:text-brand-400 shrink-0" />
                <a href="tel:+593939219616" className="hover:text-zinc-950 dark:hover:text-white transition-colors font-light">+593 939 219 616</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">Marketing Digital Global<br/>Presencia en todo el mundo</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} CosmoTech. Todos los derechos reservados.</p>
          <div className="flex space-x-8 uppercase">
            <a href="#" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
