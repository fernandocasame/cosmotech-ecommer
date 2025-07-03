export default function ChatbotsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-purple-400">Chatbots Inteligentes con n8n</h1>
          <p className="text-lg text-gray-400 mt-2">Automatiza la interacción con tus clientes y optimiza procesos.</p>
        </header>

        <main>
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">Integración y Desarrollo de Chatbots</h2>
            <p className="text-gray-300 mb-4">
              Desarrollamos chatbots personalizados utilizando la potencia de n8n para automatizar flujos de trabajo,
              atención al cliente, captación de leads y mucho más.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Diseño de flujos conversacionales.</li>
              <li>Integración con CRM, ERP y otras plataformas.</li>
              <li>Desarrollo de chatbots para WhatsApp, web, y otras mensajerías.</li>
              <li>Automatización de procesos con n8n.</li>
              <li>Soporte y mantenimiento de chatbots.</li>
            </ul>
          </section>

          <section className="text-center">
            <a
              href="/#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Automatiza tu Negocio Hoy
            </a>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CosmoTech - Chatbots con n8n</p>
        </footer>
      </div>
    </div>
  );
}
