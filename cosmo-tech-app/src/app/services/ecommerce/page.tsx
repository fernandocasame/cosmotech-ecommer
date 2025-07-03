import Link from 'next/link';

// Placeholder for TechLogo or FeatureCard if needed, or integrate directly
const FeatureCard: React.FC<{title: string, desc: string, anDelay?: string}> = ({ title, desc, anDelay = "0s" }) => (
  <div
    className="bg-card p-6 rounded-xl shadow-lg hover-lift animate-fade-in-up hover:border-secondary-light"
    style={{ animationDelay: anDelay }}
  >
    <h4 className="font-semibold text-lg text-secondary-dark mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default function EcommercePage() {
  const features = [
    { title: "Diseño Atractivo y UI/UX Centrado en el Usuario", desc: "Interfaces intuitivas y modernas que capturan la atención y facilitan la compra.", anDelay: "0.1s" },
    { title: "Totalmente Responsivo y Optimizado para Móviles", desc: "Experiencia de compra perfecta en smartphones, tablets y desktops.", anDelay: "0.15s" },
    { title: "Optimización SEO para E-commerce", desc: "Mejor visibilidad de tus productos en motores de búsqueda.", anDelay: "0.2s" },
    { title: "Pasarelas de Pago Seguras y Variadas", desc: "Integración con múltiples opciones de pago confiables.", anDelay: "0.25s" },
    { title: "Gestión de Catálogo e Inventario Intuitiva", desc: "Paneles de administración fáciles de usar para tu equipo.", anDelay: "0.3s" },
    { title: "Plataformas Escalables y Robustas", desc: "Soluciones que crecen con tu negocio y soportan alto tráfico.", anDelay: "0.35s" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Placeholder */}
      <header className="bg-white backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
            Cosmo<span className="text-secondary">Tech</span>
          </Link>
          <Link href="/#contact" className="bg-[#555CBCFF] text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-sm">
              Contáctanos
          </Link>
        </div>
      </header>

      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <header className="mb-12 md:mb-16 text-center animate-fade-in-up">
            <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>&larr; Volver a Inicio</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Soluciones E-commerce Avanzadas</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Transforma tu negocio con tiendas online potentes, escalables y diseñadas para convertir visitantes en clientes.
            </p>
          </header>

          <main>
            <section className="bg-card p-6 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Impulsa tus Ventas con E-commerce Profesional</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-foreground/90 leading-relaxed">
                <div>
                  <p className="mb-4">
                    En CosmoTech, creamos plataformas de e-commerce que ofrecen experiencias de compra excepcionales. Desde catálogos de productos atractivos y dinámicos hasta procesos de pago seguros y eficientes, cubrimos todos los aspectos para maximizar tu potencial de ventas online.
                  </p>
                  <p>
                    Nos adaptamos a tus necesidades, ya sea que estés comenzando o busques escalar una operación existente. Integramos las mejores herramientas y tecnologías del mercado como <strong className="text-foreground">Shopify, WooCommerce, Magento</strong>, y soluciones personalizadas.
                  </p>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2.5 pl-4 marker:text-primary">
                    <li>Diseño personalizado de tiendas online (UI/UX).</li>
                    <li>Desarrollo sobre plataformas líderes y personalizadas.</li>
                    <li>Integración de múltiples pasarelas de pago.</li>
                    <li>Gestión avanzada de catálogos, inventario y variantes.</li>
                    <li>Estrategias de Optimización para la Conversión (CRO).</li>
                    <li>SEO avanzado para e-commerce y marketing de contenidos.</li>
                    <li>Sistemas de gestión de pedidos, envíos y clientes (CRM).</li>
                    <li>Soluciones B2B, B2C y D2C.</li>
                    <li>Analítica avanzada e informes de rendimiento.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12 text-primary-dark animate-fade-in-up">Características Clave de Nuestras Tiendas Online</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map(feat => (
                  <FeatureCard key={feat.title} title={feat.title} desc={feat.desc} anDelay={feat.anDelay}/>
                ))}
              </div>
            </section>

            <section className="text-center mt-10 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Link
                href="/#contact"
                className="bg-[#555CBCFF] text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
              >
                Cotiza tu Proyecto E-commerce
              </Link>
            </section>
          </main>

          <footer className="mt-16 text-center text-muted-foreground text-sm pb-8">
            <p>&copy; {new Date().getFullYear()} CosmoTech - Soluciones E-commerce</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
