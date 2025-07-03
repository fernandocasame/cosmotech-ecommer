import Link from 'next/link';

export default function ChatbotsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center pt-8 md:pt-12 animate-fade-in-up">
          <Link href="/" className="text-sm text-primary hover:text-primary-dark transition-colors mb-4 inline-block">&larr; Volver a Inicio</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">Chatbots Inteligentes con n8n</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Automatiza la comunicación y optimiza procesos con chatbots personalizados e integraciones n8n.
          </p>
        </header>

        <main className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <section className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-6">Potencia tu Negocio con Automatización Inteligente</h2>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
              <div>
                <p className="mb-4">
                  En CosmoTech, desarrollamos chatbots inteligentes que van más allá de simples respuestas predefinidas. Utilizamos la flexibilidad de n8n para crear flujos de trabajo automatizados que se integran con tus sistemas existentes (CRM, ERP, bases de datos), mejorando la eficiencia operativa y la experiencia del cliente.
                </p>
                <p>
                  Desde la atención al cliente 24/7 hasta la captación de leads y la automatización de tareas repetitivas, nuestros chatbots son una herramienta poderosa para tu transformación digital.
                </p>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2 pl-4 marker:text-primary">
                  <li>Diseño de flujos conversacionales lógicos e intuitivos.</li>
                  <li>Desarrollo de chatbots para web, WhatsApp, Telegram, y más.</li>
                  <li>Integración avanzada con APIs y servicios mediante n8n.</li>
                  <li>Automatización de procesos de negocio (marketing, ventas, soporte).</li>
                  <li>Procesamiento de Lenguaje Natural (NLP) para interacciones más humanas.</li>
                  <li>Generación y cualificación de leads.</li>
                  <li>Soporte técnico y resolución de consultas frecuentes.</li>
                  <li>Monitoreo y optimización continua del rendimiento del chatbot.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-10 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary-dark">¿Por qué n8n para tus Chatbots?</h3>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
              n8n es una herramienta de automatización de flujo de trabajo de código abierto que permite conectar diferentes aplicaciones y servicios sin necesidad de escribir código complejo. Esto nos da la capacidad de construir chatbots altamente personalizados y conectados de manera eficiente.
            </p>
            {/* Placeholder for an n8n related image or diagram */}
            <div className="bg-muted p-6 rounded-lg shadow-sm inline-block">
              <span className="text-accent text-lg">n8n + Tu Chatbot = Automatización Sin Límites</span>
            </div>
          </section>

          <section className="text-center mt-10 mb-8">
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Descubre el Poder de los Chatbots
            </Link>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} CosmoTech - Chatbots con n8n</p>
        </footer>
      </div>
    </div>
  );
}
