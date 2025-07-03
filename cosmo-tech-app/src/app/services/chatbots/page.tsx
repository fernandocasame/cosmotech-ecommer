import Link from 'next/link';
import Image from 'next/image'; // Import Image

// Placeholder for TechLogo component or directly use text/SVG
const BenefitCard: React.FC<{ title: string, description: string, icon?: string, anDelay?: string }> = ({ title, description, icon, anDelay = "0s" }) => (
  <div
    className="bg-card p-6 rounded-xl shadow-lg hover-lift animate-fade-in-up border border-border hover:border-accent-light"
    style={{ animationDelay: anDelay }}
  >
    {icon && <div className="text-3xl text-accent mb-3">{icon}</div>}
    <h4 className="font-semibold text-lg text-accent-dark mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default function ChatbotsPage() {
  const benefits = [
    { title: "Atención al Cliente 24/7", description: "Responde consultas y resuelve problemas comunes instantáneamente, a cualquier hora.", icon: "🕒", anDelay: "0.1s" },
    { title: "Reducción de Costos Operativos", description: "Automatiza tareas repetitivas y libera a tu equipo humano para interacciones de mayor valor.", icon: "💰", anDelay: "0.15s" },
    { title: "Generación y Cualificación de Leads", description: "Captura información de prospectos y guíalos a través del embudo de ventas.", icon: "📈", anDelay: "0.2s" },
    { title: "Mejora de la Experiencia del Usuario", description: "Ofrece respuestas rápidas y personalizadas, aumentando la satisfacción del cliente.", icon: "😊", anDelay: "0.25s" },
    { title: "Integración con Sistemas Existentes", description: "Conecta con tu CRM, ERP y otras herramientas gracias a la flexibilidad de n8n.", icon: "🔗", anDelay: "0.3s" },
    { title: "Escalabilidad y Flexibilidad", description: "Adapta y expande las capacidades de tu chatbot a medida que tu negocio crece.", icon: "🚀", anDelay: "0.35s" }
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Chatbots Inteligentes con n8n</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Automatiza la comunicación y optimiza procesos con chatbots personalizados, integrados con la potencia y flexibilidad de n8n.
            </p>
          </header>

          <main>
            <section className="bg-card p-6 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Potencia tu Negocio con Automatización Inteligente</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-foreground/90 leading-relaxed">
                <div>
                  <p className="mb-4">
                    En CosmoTech, desarrollamos chatbots que van más allá de simples respuestas. Utilizamos <strong className="text-foreground">n8n</strong> para crear flujos de trabajo automatizados que se integran profundamente con tus sistemas (CRM, ERP, bases de datos), mejorando la eficiencia y la experiencia del cliente.
                  </p>
                  <p>
                    Nuestros chatbots, impulsados por IA y Procesamiento de Lenguaje Natural (NLP), ofrecen interacciones fluidas y personalizadas, capaces de entender la intención del usuario y escalar conversaciones complejas si es necesario.
                  </p>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2.5 pl-4 marker:text-primary">
                    <li>Diseño de flujos conversacionales lógicos y empáticos.</li>
                    <li>Desarrollo para web, WhatsApp, Telegram, Slack, y más.</li>
                    <li>Integración avanzada con APIs vía n8n.</li>
                    <li>Automatización de marketing, ventas y soporte.</li>
                    <li>Implementación de NLP para comprensión natural.</li>
                    <li>Generación y cualificación avanzada de leads.</li>
                    <li>Sistemas de ticketing y escalado a agentes humanos.</li>
                    <li>Monitoreo, análisis y optimización continua.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="py-12 md:py-16 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-dark animate-fade-in-up">¿Por qué n8n para tus Chatbots?</h3>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-10 md:mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                n8n es una herramienta de automatización de código abierto que permite conectar visualmente cualquier aplicación con una API. Esto nos da una flexibilidad sin precedentes para construir chatbots altamente personalizados, integrados y potentes de manera eficiente, sin las limitaciones de plataformas cerradas.
              </p>
              <div className="animate-fade-in-up flex flex-col items-center" style={{animationDelay: '0.2s'}}>
                <div className="relative w-48 h-48 mb-4"> {/* Container for n8n logo */}
                    <Image src="/logos/n8n.svg" alt="n8n Logo" layout="fill" objectFit="contain" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Automatiza y conecta con n8n.</p>
              </div>
            </section>

            <section className="py-12 md:py-16 bg-muted rounded-xl">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12 text-primary-dark animate-fade-in-up">Beneficios Clave de Nuestros Chatbots</h3>
                <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map(benefit => (
                        <BenefitCard key={benefit.title} {...benefit} />
                    ))}
                </div>
            </section>

            <section className="text-center mt-12 md:mt-16 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Link
                href="/#contact"
                className="bg-[#555CBCFF] text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
              >
                Descubre el Poder de los Chatbots con n8n
              </Link>
            </section>
          </main>

          <footer className="mt-16 text-center text-muted-foreground text-sm pb-8">
            <p>&copy; {new Date().getFullYear()} CosmoTech - Chatbots con n8n</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
