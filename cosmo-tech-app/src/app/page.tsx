import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary hover:text-primary-dark transition-colors">
            CosmoTech
          </Link>
          <nav className="space-x-2 md:space-x-4 hidden md:flex items-center">
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md">Servicios</Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md focus:outline-none flex items-center">
                Nuestros Productos <span className="ml-1 text-xs transform group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-card rounded-md shadow-lg py-1 z-20 hidden group-hover:block animate-fade-in-up_fast">
                <Link href="/services/web-development" className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary-light hover:text-white transition-colors">Desarrollo Web</Link>
                <Link href="/services/ecommerce" className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary-light hover:text-white transition-colors">E-commerce</Link>
                <Link href="/services/chatbots" className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary-light hover:text-white transition-colors">Chatbots (n8n)</Link>
                <Link href="/services/video-calls" className="block px-4 py-2 text-sm text-card-foreground hover:bg-primary-light hover:text-white transition-colors">Videollamadas</Link>
              </div>
            </div>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md">Nosotros</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md">Contacto</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-foreground focus:outline-none">
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
          className="relative text-white py-20 md:py-32 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} // Example image of neural network / abstract tech
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}

          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Innovación Digital a tu Alcance
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Transformamos tus ideas en soluciones de software de vanguardia.
            </p>
            <Link
              href="/#contact"
              className="bg-white text-primary font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}
            >
              Hablemos de tu Proyecto
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark animate-fade-in-up">
              Nuestros Productos y Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Desarrollo Web", description: "Sitios modernos, responsivos y optimizados.", icon: "💻", link: "/services/web-development", color: "primary" },
                { title: "E-commerce", description: "Tiendas online robustas para impulsar tus ventas.", icon: "🛒", link: "/services/ecommerce", color: "secondary" },
                { title: "Chatbots Inteligentes (n8n)", description: "Automatiza la atención al cliente con IA.", icon: "🤖", link: "/services/chatbots", color: "accent" },
                { title: "Soluciones de Videollamada", description: "Comunicación segura y eficiente.", icon: "📹", link: "/services/video-calls", color: "primary" }
              ].map((service, index) => (
                <Link href={service.link} key={service.title} className={`block bg-card p-6 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fade-in-up group border border-transparent hover:border-${service.color}-light`} style={{animationDelay: `${0.2 + index * 0.15}s`}}>
                  <div className={`text-4xl mb-4 text-${service.color} group-hover:animate-subtle-beat`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-${service.color}-dark`}>{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <span className={`mt-4 inline-block text-sm text-${service.color} font-semibold group-hover:underline`}>
                    Saber más &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary-dark animate-fade-in-up">
              Sobre Nosotros
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                {/* Replace with an actual image or illustration using next/image */}
                <div className="w-full h-72 bg-muted rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  {/* <Image src="/path-to-your-about-image.jpg" alt="Equipo CosmoTech" width={500} height={400} className="object-cover"/> */}
                  <span className="text-gray-400 text-2xl">Imagen del Equipo</span>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <p className="text-lg mb-4 text-foreground/90">
                  En CosmoTech, somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales dedicados a impulsar el éxito de nuestros clientes a través de la tecnología.
                </p>
                <p className="text-lg mb-4 text-foreground/90">
                  Creemos en el poder de la innovación para transformar negocios y estamos comprometidos a ofrecer soluciones personalizadas y de alta calidad que superen las expectativas.
                </p>
                <p className="text-lg text-foreground/90">
                  Nuestra misión es ser tu socio tecnológico de confianza, guiándote en cada paso del camino hacia la digitalización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-dark animate-fade-in-up">
              Contáctanos
            </h2>
            <div className="max-w-xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Nombre Completo</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow" />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Tu Mensaje</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-shadow"></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 text-center"> {/* Kept footer dark for contrast, can be changed */}
        <div className="container mx-auto px-6">
          <p className="mb-1">&copy; {new Date().getFullYear()} CosmoTech. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400">Innovación Digital para un Futuro Brillante.</p>
        </div>
      </footer>
    </div>
  );
}
