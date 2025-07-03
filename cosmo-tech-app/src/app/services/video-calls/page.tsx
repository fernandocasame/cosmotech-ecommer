import Link from 'next/link';

export default function VideoCallsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center pt-8 md:pt-12 animate-fade-in-up">
          <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block">&larr; Volver a Inicio</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">Soluciones de Videollamada Profesionales</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Conecta con tu equipo y clientes cara a cara, de forma segura y eficiente, desde cualquier lugar.
          </p>
        </header>

        <main className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <section className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Comunicación Visual Sin Fronteras</h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
              <div>
                <p className="mb-4">
                  En CosmoTech, implementamos y personalizamos soluciones de videollamada robustas que se adaptan a tus necesidades específicas. Ya sea para reuniones internas, demostraciones de productos, consultas remotas o webinars, te proporcionamos las herramientas para una comunicación fluida y de alta calidad.
                </p>
                <p>
                  Priorizamos la seguridad, la facilidad de uso y la integración con tus flujos de trabajo existentes para ofrecer una experiencia de videollamada superior.
                </p>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2 pl-4 marker:text-primary">
                  <li>Implementación de plataformas de videollamada (Jitsi, WebRTC, y otras).</li>
                  <li>Desarrollo de funcionalidades personalizadas (grabación, chat, pantalla compartida).</li>
                  <li>Sistemas seguros con encriptación de extremo a extremo.</li>
                  <li>Optimización para baja latencia y alta calidad de video/audio.</li>
                  <li>Integración con calendarios y herramientas de productividad.</li>
                  <li>Soluciones para telemedicina, educación online y eventos virtuales.</li>
                  <li>Soporte técnico y capacitación para usuarios.</li>
                  <li>Consultoría para elegir la mejor tecnología para tu caso de uso.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-10">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary-dark">Casos de Uso Comunes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{title: "Reuniones de Equipo", desc: "Colaboración interna eficiente y productiva."},
               {title: "Atención al Cliente", desc: "Soporte personalizado y demostraciones de producto."},
               {title: "Teleconsultas", desc: "Consultas médicas o de asesoramiento a distancia."},
               {title: "Educación a Distancia", desc: "Clases virtuales interactivas y webinars."},
               {title: "Eventos Virtuales", desc: "Conferencias y presentaciones online a gran escala."},
               {title: "Entrevistas Remotas", desc: "Procesos de selección de personal ágiles."}].map(useCase => (
                 <div key={useCase.title} className="bg-muted p-6 rounded-lg shadow-sm">
                   <h4 className="font-semibold text-lg text-secondary-dark mb-2">{useCase.title}</h4>
                   <p className="text-sm text-foreground/80">{useCase.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          <section className="text-center mt-10 mb-8">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
  );
}
