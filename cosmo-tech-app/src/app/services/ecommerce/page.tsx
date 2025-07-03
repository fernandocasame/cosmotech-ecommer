import Link from 'next/link';

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center pt-8 md:pt-12 animate-fade-in-up">
          <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block">&larr; Volver a Inicio</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">Soluciones E-commerce Avanzadas</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Transforma tu negocio con tiendas online potentes, escalables y diseñadas para convertir.
          </p>
        </header>

        <main className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <section className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Impulsa tus Ventas con E-commerce Profesional</h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
              <div>
                <p className="mb-4">
                  En CosmoTech, creamos plataformas de e-commerce que ofrecen experiencias de compra excepcionales. Desde catálogos de productos atractivos hasta procesos de pago seguros y eficientes, cubrimos todos los aspectos para maximizar tu potencial de ventas online.
                </p>
                <p>
                  Nos adaptamos a tus necesidades, ya sea que estés comenzando o busques escalar una operación existente, integrando las mejores herramientas y tecnologías del mercado.
                </p>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2 pl-4 marker:text-primary">
                  <li>Diseño personalizado de tiendas online (UI/UX).</li>
                  <li>Desarrollo sobre plataformas líderes (Shopify, WooCommerce, Magento, etc.).</li>
                  <li>Integración de pasarelas de pago seguras.</li>
                  <li>Gestión avanzada de catálogos e inventario.</li>
                  <li>Optimización para la conversión (CRO).</li>
                  <li>Funcionalidades SEO para e-commerce.</li>
                  <li>Sistemas de gestión de pedidos y clientes.</li>
                  <li>Soluciones B2B y B2C.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-10">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary-dark">Características Clave de Nuestras Tiendas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{title: "Diseño Atractivo", desc: "Interfaces intuitivas y modernas que capturan la atención."},
               {title: "Totalmente Responsivo", desc: "Experiencia perfecta en móviles, tablets y desktops."},
               {title: "Optimización SEO", desc: "Mejor visibilidad en motores de búsqueda."},
               {title: "Pasarelas de Pago", desc: "Integración segura con múltiples opciones de pago."},
               {title: "Fácil Gestión", desc: "Paneles de administración intuitivos para tu equipo."},
               {title: "Escalabilidad", desc: "Soluciones que crecen con tu negocio."}].map(feat => (
                 <div key={feat.title} className="bg-muted p-6 rounded-lg shadow-sm">
                   <h4 className="font-semibold text-lg text-secondary-dark mb-2">{feat.title}</h4>
                   <p className="text-sm text-foreground/80">{feat.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          <section className="text-center mt-10 mb-8">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
  );
}
