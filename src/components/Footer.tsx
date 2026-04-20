import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold text-zinc-900 leading-none tracking-tight">
                Cosmo<span className="text-brand-600">Tech</span>
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">
                Digital Agency
              </span>
            </a>
            <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
              Transformamos ideas en experiencias digitales épicas. Orientados a resultados y metodologías probadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">SEO & Posicionamiento</a></li>
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Social Media</a></li>
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Diseño & Dev Web</a></li>
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Publicidad Digital (SEM)</a></li>
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Email Marketing</a></li>
              <li><a href="#servicios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Analítica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#nosotros" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Sobre Nosotros</a></li>
              <li><a href="#resultados" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Casos de Éxito</a></li>
              <li><a href="#testimonios" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Testimonios</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-600 text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start tracking-tight">
                <Mail className="w-5 h-5 mr-3 text-zinc-400 mt-0.5 shrink-0" />
                <a href="mailto:fcasame@gmail.com" className="hover:text-brand-600 transition-colors">fcasame@gmail.com</a>
              </li>
              <li className="flex items-center tracking-tight">
                <Phone className="w-5 h-5 mr-3 text-zinc-400 shrink-0" />
                <a href="tel:+593939219616" className="hover:text-brand-600 transition-colors">+593 939 219 616</a>
              </li>
              <li className="flex items-start mt-4 tracking-tight">
                <MapPin className="w-5 h-5 mr-3 text-zinc-400 mt-0.5 shrink-0" />
                <span>Marketing Digital Global<br/>Presencia en todo el mundo</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} CosmoTech. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-900 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Términos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
