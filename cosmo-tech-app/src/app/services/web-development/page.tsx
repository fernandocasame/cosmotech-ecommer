import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center pt-8 md:pt-12 animate-fade-in-up">
          <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block">&larr; Volver a Inicio</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">Desarrollo Web a Medida</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Creamos experiencias digitales impactantes y funcionales que impulsan tu presencia online.
          </p>
        </header>

        <main className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <section className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Nuestra Oferta de Desarrollo Web</h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
              <div>
                <p className="mb-4">
                  En CosmoTech, nos especializamos en el diseño y desarrollo de sitios web y aplicaciones web que no solo lucen increíbles, sino que también son intuitivos, rápidos y están optimizados para los motores de búsqueda.
                </p>
                <p>
                  Entendemos que cada proyecto es único. Por eso, trabajamos de cerca contigo para comprender tus objetivos y traducirlos en una solución digital efectiva.
                </p>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2 pl-4 marker:text-primary">
                  <li>Diseño web responsivo y adaptado a móviles.</li>
                  <li>Desarrollo de sitios web corporativos y portafolios.</li>
                  <li>Creación de Landing Pages optimizadas para conversión.</li>
                  <li>Desarrollo de Aplicaciones Web Progresivas (PWA).</li>
                  <li>Integración con APIs y servicios de terceros.</li>
                  <li>Optimización de rendimiento y velocidad (Core Web Vitals).</li>
                  <li>Consultoría y estrategia digital.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-10">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary-dark">Tecnologías que Dominamos</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-muted-foreground">
              {/* Placeholder for tech icons/logos */}
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">Next.js</span>
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">React</span>
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">TypeScript</span>
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">Node.js</span>
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">Tailwind CSS</span>
              <span className="bg-muted px-4 py-2 rounded-md shadow-sm">GraphQL</span>
            </div>
          </section>

          <section className="text-center mt-10 mb-8">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Solicitar Cotización de Desarrollo Web
            </Link>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} CosmoTech - Desarrollo Web</p>
        </footer>
      </div>
    </div>
  );
}
