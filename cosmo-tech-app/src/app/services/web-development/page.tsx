import Link from 'next/link';
import Image from 'next/image'; // Import Image

// Updated TechLogo to use next/image
const TechLogo: React.FC<{ name: string, src: string, alt: string, anDelay?: string }> = ({ name, src, alt, anDelay = "0s" }) => (
  <div
    className="flex flex-col items-center justify-center p-3 bg-card rounded-xl shadow-lg hover-lift card-hover-effect animate-fade-in-up text-center h-32 md:h-36" // Adjusted height
    style={{ animationDelay: anDelay }}
  >
    <div className="relative w-16 h-16 mb-2"> {/* Adjusted size for logos */}
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
    <span className="text-xs font-medium text-muted-foreground">{name}</span>
  </div>
);

export default function WebDevelopmentPage() {
  const technologies = [
    { name: "Next.js", src: "/logos/nextjs.svg", alt: "Next.js Logo", anDelay: "0.1s" },
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React Logo", anDelay: "0.15s" }, // Using a general React logo URL as placeholder
    { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", alt: "TypeScript Logo", anDelay: "0.2s" }, // Placeholder
    { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js Logo", anDelay: "0.25s" }, // Placeholder
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS Logo", anDelay: "0.3s" }, // Placeholder
    { name: "Vue.js", src: "/logos/vuejs.svg", alt: "Vue.js Logo", anDelay: "0.4s" },
    { name: "Laravel", src: "/logos/laravel.svg", alt: "Laravel Logo", anDelay: "0.45s" }
    // GraphQL can be added if a suitable logo is found/created
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Placeholder - Assuming a global header is present in layout.tsx */}
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Desarrollo Web a Medida</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Creamos experiencias digitales impactantes y funcionales que impulsan tu presencia online.
            </p>
          </header>

          <main>
            <section className="bg-card p-6 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Nuestra Oferta de Desarrollo Web</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-foreground/90 leading-relaxed">
                <div>
                  <p className="mb-4">
                    En CosmoTech, nos especializamos en el diseño y desarrollo de sitios web y aplicaciones web que no solo lucen increíbles, sino que también son intuitivos, rápidos y están optimizados para los motores de búsqueda.
                  </p>
                  <p>
                    Entendemos que cada proyecto es único. Por eso, trabajamos de cerca contigo para comprender tus objetivos y traducirlos en una solución digital efectiva y a la medida de tus ambiciones.
                  </p>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2.5 pl-4 marker:text-primary">
                    <li>Diseño web responsivo (Mobile-First).</li>
                    <li>Desarrollo de sitios web corporativos y portafolios.</li>
                    <li>Creación de Landing Pages optimizadas para conversión.</li>
                    <li>Desarrollo de Aplicaciones Web Progresivas (PWA).</li>
                    <li>Integración con APIs y servicios de terceros.</li>
                    <li>Optimización de rendimiento (Core Web Vitals).</li>
                    <li>Consultoría y estrategia digital personalizada.</li>
                    <li>Mantenimiento evolutivo y soporte técnico.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technologies Section */}
            <section className="py-12 md:py-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12 text-primary-dark animate-fade-in-up">Tecnologías que Dominamos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {technologies.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} anDelay={tech.anDelay} />
                ))}
              </div>
            </section>

            <section className="text-center mt-10 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Link
                href="/#contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
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
    </div>
  );
}
