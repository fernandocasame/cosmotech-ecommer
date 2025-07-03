import Link from 'next/link';
import Image from 'next/image'; // Import Image

// Placeholder for FeatureCard component
const FeatureCard: React.FC<{ title: string, description: string, icon?: string, anDelay?: string }> = ({ title, description, icon, anDelay = "0s" }) => (
  <div
    className="bg-card p-6 rounded-xl shadow-lg hover-lift animate-fade-in-up border border-border hover:border-primary-light"
    style={{ animationDelay: anDelay }}
  >
    {icon && <div className="text-3xl text-primary mb-3">{icon}</div>}
    <h4 className="font-semibold text-lg text-primary-dark mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default function VideoCallsPage() {
  const useCases = [
    { title: "Reuniones de Equipo y Colaboración", description: "Facilita la colaboración interna eficiente y productiva, sin importar la ubicación.", icon: "👥", anDelay: "0.1s" },
    { title: "Atención al Cliente Personalizada", description: "Ofrece soporte visual, demostraciones de producto y consultas cara a cara.", icon: " headset", anDelay: "0.15s" },
    { title: "Teleconsultas Médicas y Asesoramiento", description: "Proporciona servicios de salud o consultoría especializada a distancia de forma segura.", icon: "🩺", anDelay: "0.2s" },
    { title: "Educación a Distancia y Webinars", description: "Imparte clases virtuales interactivas, talleres y conferencias online a gran escala.", icon: "🎓", anDelay: "0.25s" },
    { title: "Eventos Virtuales e Híbridos", description: "Organiza conferencias, ferias y presentaciones online con alcance global.", icon: "🎉", anDelay: "0.3s" },
    { title: "Entrevistas Remotas y Reclutamiento", description: "Agiliza los procesos de selección de personal con entrevistas virtuales fluidas.", icon: "💼", anDelay: "0.35s" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Placeholder */}
      <header className="bg-card/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-border">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
            Cosmo<span className="text-secondary">Tech</span>
          </Link>
          <Link href="/#contact" className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm">
              Contáctanos
          </Link>
        </div>
      </header>

      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <header className="mb-12 md:mb-16 text-center animate-fade-in-up">
            <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>&larr; Volver a Inicio</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Soluciones de Videollamada Profesionales</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Conecta con tu equipo y clientes cara a cara, de forma segura, eficiente y con alta calidad, desde cualquier lugar del mundo.
            </p>
          </header>

          <main>
            <section className="bg-card p-6 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Comunicación Visual Sin Fronteras ni Complicaciones</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-foreground/90 leading-relaxed">
                <div>
                  <p className="mb-4">
                    En CosmoTech, implementamos y personalizamos soluciones de videollamada robustas que se adaptan a tus necesidades. Ya sea para reuniones internas, demostraciones de productos, consultas remotas o webinars, te proporcionamos las herramientas para una comunicación fluida y de alta definición.
                  </p>
                  <p>
                    Priorizamos la <strong className="text-foreground">seguridad (encriptación E2E), la facilidad de uso y la integración</strong> con tus flujos de trabajo. Desarrollamos sobre tecnologías como WebRTC, Jitsi, o integramos con las principales plataformas del mercado.
                  </p>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2.5 pl-4 marker:text-primary">
                    <li>Implementación de plataformas de videollamada personalizadas.</li>
                    <li>Funcionalidades avanzadas: grabación, chat, pantalla compartida, pizarras virtuales.</li>
                    <li>Sistemas seguros con encriptación de extremo a extremo.</li>
                    <li>Optimización para baja latencia y alta calidad (HD/4K).</li>
                    <li>Integración con calendarios, CRM y herramientas colaborativas.</li>
                    <li>Soluciones para telemedicina, educación online y eventos.</li>
                    <li>Soporte técnico especializado y capacitación.</li>
                    <li>Consultoría para la elección de la tecnología adecuada.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12 text-primary-dark animate-fade-in-up">Casos de Uso Comunes y Aplicaciones</h3>
               <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {useCases.map(useCase => (
                  <FeatureCard key={useCase.title} {...useCase} />
                ))}
              </div>
            </section>

            <section className="py-12 md:py-16 text-center bg-muted rounded-xl">
                 <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-dark animate-fade-in-up">¿Listo para Mejorar tu Comunicación?</h3>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-8 md:mb-10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    Descubre cómo nuestras soluciones de videollamada pueden transformar la manera en que interactúas con tu equipo y clientes, haciéndola más personal, productiva y eficiente.
                </p>
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <Image src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Videollamada en acción" width={800} height={400} className="rounded-lg shadow-xl mx-auto object-cover" />
                </div>
            </section>


            <section className="text-center mt-12 md:mt-16 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Link
                href="/#contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
              >
                Implementa Videollamadas en tu Empresa
              </Link>
            </section>
          </main>

          <footer className="mt-16 text-center text-muted-foreground text-sm pb-8">
            <p>&copy; {new Date().getFullYear()} CosmoTech - Soluciones de Videollamada</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
