import Image from 'next/image';
import Link from 'next/link';

// Define an interface for service card props
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Emoji or SVG path
  link: string;
  color: 'primary' | 'secondary' | 'accent' | 'success'; // Restrict color to defined theme colors
  animationDelay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, color, animationDelay }) => {
  // Dynamically construct border and text color classes
  // Note: For full dynamic class generation with Tailwind, it might require safelisting if classes are too dynamic.
  // Here, we assume 'primary', 'secondary', etc., are part of class names like 'border-primary-light', 'text-primary-dark'.
  // This approach is generally fine if the color names directly map to Tailwind's naming convention in the config.
  const borderColorClass = `hover:border-${color}-light`;
  const titleColorClass = `text-${color}-dark`;
  const iconColorClass = `text-${color}`;
  const linkColorClass = `text-${color}`;

  return (
    <Link
      href={link}
      className={`block bg-card p-6 rounded-xl shadow-lg hover-lift card-hover-effect animate-fade-in-up group ${borderColorClass}`}
      style={{ animationDelay }}
    >
      <div className={`text-4xl mb-4 ${iconColorClass} group-hover:animate-subtle-beat animate-float`}> {/* Added animate-float */}
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${titleColorClass}`}>{title}</h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
      <span className={`mt-4 inline-block text-sm font-semibold group-hover:underline ${linkColorClass}`}>
        Saber más &rarr;
      </span>
    </Link>
  );
};


export default function HomePage() {
  const services: ServiceCardProps[] = [
    { title: "Desarrollo Web", description: "Sitios modernos, responsivos y optimizados.", icon: "💻", link: "/services/web-development", color: "primary", animationDelay: "0.2s" },
    { title: "E-commerce", description: "Tiendas online robustas para impulsar tus ventas.", icon: "🛒", link: "/services/ecommerce", color: "secondary", animationDelay: "0.35s" },
    { title: "Chatbots Inteligentes (n8n)", description: "Automatiza la atención al cliente con IA.", icon: "🤖", link: "/services/chatbots", color: "accent", animationDelay: "0.5s" },
    { title: "Soluciones de Videollamada", description: "Comunicación segura y eficiente.", icon: "📹", link: "/services/video-calls", color: "success", animationDelay: "0.65s" } // Using 'success' color
  ];

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      {/* Header */}
      <header className="bg-white backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 md:py-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
            Cosmo<span className="text-secondary">Tech</span>
          </Link>
          <nav className="space-x-2 md:space-x-3 hidden md:flex items-center">
            <Link href="/#services" className="text-foreground transition-colors px-3 py-2 rounded-md text-xl font-medium">Servicios</Link>
            <div className="relative group inline-block">
              {/* Botón principal */}
              <button className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md focus:outline-none flex items-center text-xl font-medium">
                Nuestros Productos
                <span className="ml-1 text-xs transform group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>

              {/* Menú desplegable */}
              <div
                className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-1 z-50
               opacity-0 group-hover:opacity-100
               invisible group-hover:visible
               transition-all duration-200"
              >
                <Link href="/services/web-development" className="block px-4 py-2 text-[1rem] text-card-foreground hover:bg-[#555CBCFF] hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
                <Link href="/services/ecommerce" className="block px-4 py-2 text-[1rem] text-card-foreground hover:bg-[#555CBCFF] hover:text-white transition-colors">
                  E-commerce
                </Link>
                <Link href="/services/chatbots" className="block px-4 py-2 text-[1rem] text-card-foreground hover:bg-[#555CBCFF] hover:text-white transition-colors">
                  Chatbots (n8n)
                </Link>
                <Link href="/services/video-calls" className="block px-4 py-2 text-[1rem] text-card-foreground hover:bg-[#555CBCFF] hover:text-white transition-colors">
                  Videollamadas
                </Link>
              </div>
            </div>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-xl font-medium">Nosotros</Link>
            <Link href="/#contact" className="bg-[#555CBCFF] text-white hover:bg-primary-dark font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-[1rem]">
              Contacto
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-foreground focus:outline-none p-2 rounded-md hover:bg-muted">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section
          className="relative text-white py-0 md:py-0 overflow-hidden bg-cover bg-center"
          // Using a more abstract tech image, ensure it's high quality and relevant
          style={{ backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
          <div className="absolute inset-0 bg-slate-900 opacity-60"></div> {/* Darker overlay for better contrast */}

          <div className="container h-[calc(100vh-55px)] flex flex-col justify-center mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
              Innovación Digital <span className="block md:inline">a tu Alcance</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-slate-200 animate-fade-in-up" style={{ animationDelay: '0.3s', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              Transformamos tus ideas en soluciones de software de vanguardia: desarrollo web, e-commerce, IA y más.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link
                href="/#contact"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base animate-pulse-glow" // Added pulse-glow
              >
                Hablemos de tu Proyecto
              </Link>
              <Link
                href="/#services"
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base"
              >
                Explorar Servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-16 md:py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Herramientas de Vanguardia</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Tecnologías Que Impulsan Nuestras Soluciones
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Utilizamos un stack tecnológico moderno y robusto para construir aplicaciones de alto rendimiento, escalables y seguras.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                { src: "/logos/nextjs.svg", alt: "Next.js Logo", name: "Next.js" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React Native Logo", name: "React Native" },
                { src: "https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-logomark-320px.png", alt: "Flutter Logo", name: "Flutter" },
                { src: "/logos/vuejs.svg", alt: "Vue.js Logo", name: "Vue.js" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png", alt: "Laravel Logo", name: "Laravel" },
                { src: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png", alt: "n8n Logo", name: "n8n" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-lg hover-lift card-hover-effect animate-fade-in-up text-center"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="relative w-20 h-20 mb-3"> {/* Fixed size container for logos */}
                    <Image src={tech.src} alt={tech.alt} layout="fill" objectFit="contain" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Soluciones Integrales</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Nuestros Productos y Servicios Clave
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Desde el concepto hasta el despliegue, te acompañamos con tecnología de punta y estrategias personalizadas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section - Enhanced */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm animate-fade-in-up">Conócenos Mejor</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Tu Socio Tecnológico Estratégico
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/2 animate-slide-in-left group" style={{ animationDelay: '0.2s' }}> {/* Added group for potential child animations */}
                <div className="w-full h-80 bg-neutral-100 rounded-xl shadow-xl flex items-center justify-center overflow-hidden shadow-lg relative">
                  {/* Replace with a relevant, high-quality image using next/image */}
                  <Image src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Equipo CosmoTech colaborando" width={600} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> {/* Subtle gradient overlay on hover */}
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">Más que Desarrollo, Creamos Valor Estratégico</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  En CosmoTech, somos un colectivo de innovadores: desarrolladores full-stack, diseñadores UX/UI y estrategas digitales apasionados por construir el futuro de la web y las aplicaciones móviles. Nos especializamos en transformar ideas complejas en <strong className="text-foreground">soluciones tecnológicas elegantes, eficientes y altamente escalables</strong>.
                </p>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Trabajamos con <strong className="text-foreground">metodologías ágiles como Scrum y Kanban</strong>, fomentando una colaboración estrecha con nuestros clientes B2B y startups tecnológicas. Esto asegura transparencia total, flexibilidad ante cambios y entregas incrementales de valor que se alinean con tus objetivos de negocio.
                </p>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Nuestro enfoque se centra en entender profundamente tus desafíos y tu mercado para ofrecer no solo un producto final, sino una <strong className="text-foreground">ventaja competitiva sostenible</strong>. Estamos comprometidos con la <strong className="text-foreground">innovación constante</strong>, la seguridad robusta (DevSecOps) y la adopción de las últimas tendencias tecnológicas para garantizar que tu proyecto esté siempre a la vanguardia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecemos <strong className="text-foreground">consultoría tecnológica especializada</strong> para ayudarte a definir tu roadmap de producto, optimizar tu arquitectura de software y tomar decisiones informadas sobre tu stack tecnológico.
                </p>
                <Link href="/#contact" className="mt-6 inline-block bg-[#555CBCFF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                  Descubre cómo podemos ayudarte
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Why Choose Us Section for Tech Companies */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-up">¿Por Qué Elegir CosmoTech para tu Empresa de Tecnología?</h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Entendemos los desafíos únicos que enfrentan las empresas de tecnología, desde startups innovadoras hasta corporaciones consolidadas.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Experiencia Técnica Profunda", description: "Dominio de arquitecturas modernas, microservicios, serverless, y desarrollo nativo en la nube.", icon: "💡", delay: "0.1s" },
                { title: "Enfoque en Escalabilidad y Rendimiento", description: "Construimos soluciones que crecen contigo y manejan cargas de trabajo exigentes.", icon: "🚀", delay: "0.2s" },
                { title: "Seguridad Desde el Diseño (DevSecOps)", description: "Integramos prácticas de seguridad en cada fase del ciclo de vida del desarrollo.", icon: "🛡️", delay: "0.3s" },
                { title: "Colaboración Ágil y Transparente", description: "Comunicación constante y adaptación flexible a tus necesidades evolutivas.", icon: "🤝", delay: "0.4s" },
                { title: "Innovación y Adopción Tecnológica", description: "Exploramos y aplicamos las últimas tendencias para ofrecerte soluciones de vanguardia.", icon: "🔬", delay: "0.5s" },
                { title: "Soporte y Mantenimiento Continuo", description: "Asociaciones a largo plazo para asegurar el éxito y la evolución de tus aplicaciones.", icon: "⚙️", delay: "0.6s" }
              ].map(item => (
                <div key={item.title} className="bg-card p-6 rounded-xl shadow-lg hover-lift animate-fade-in-up hover:border-primary-light" style={{ animationDelay: item.delay }}>
                  <div className="text-3xl text-primary mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent"> {/* Gradient background */}
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="font-semibold uppercase tracking-wider text-sm animate-fade-in-up">¿Listo para Empezar?</span>
              <h2 className="text-3xl md:text-4xl font-bold  mt-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Hablemos de tu Próximo Proyecto
              </h2>
              <p className="mt-4 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Completa el formulario o contáctanos directamente. Estamos aquí para ayudarte a alcanzar tus objetivos digitales.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground/80 mb-1">Nombre Completo</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2.5 bg-neutral-50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground/80 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2.5 bg-neutral-50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow" />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground/80 mb-1">Asunto</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2.5 bg-neutral-50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground/80 mb-1">Tu Mensaje</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-2.5 bg-neutral-50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow"></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#555CBCFF] text-white font-bold py-3.5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Enviar Mensaje Ahora
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Updated with new neutral colors */}
      <footer className="bg-neutral-800 text-neutral-300 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-light transition-colors duration-300">
              Cosmo<span className="text-secondary">Tech</span>
            </Link>
          </div>
          <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} CosmoTech Solutions. Todos los derechos reservados.</p>
          <p className="text-xs text-neutral-400">Innovación Digital para un Futuro Brillante y Conectado.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-neutral-400 hover:text-primary text-sm">Política de Privacidad</Link>
            <Link href="#" className="text-neutral-400 hover:text-primary text-sm">Términos de Servicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
