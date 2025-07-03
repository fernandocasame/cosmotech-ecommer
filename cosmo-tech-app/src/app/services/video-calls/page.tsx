export default function VideoCallsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-purple-400">Soluciones de Videollamada</h1>
          <p className="text-lg text-gray-400 mt-2">Comunícate cara a cara, sin importar la distancia.</p>
        </header>

        <main>
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">Implementación de Sistemas de Videollamada</h2>
            <p className="text-gray-300 mb-4">
              Integramos y desarrollamos soluciones de videollamada seguras, estables y de alta calidad para tus necesidades
              de comunicación interna, atención al cliente o servicios de teleconsulta.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Integración de plataformas de videollamada (Jitsi, WebRTC, etc.).</li>
              <li>Desarrollo de funcionalidades personalizadas.</li>
              <li>Sistemas seguros y con encriptación.</li>
              <li>Optimización para diferentes dispositivos.</li>
              <li>Consultoría para la mejor solución según tu caso de uso.</li>
            </ul>
          </section>

          <section className="text-center">
            <a
              href="/#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Mejora tu Comunicación
            </a>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CosmoTech - Soluciones de Videollamada</p>
        </footer>
      </div>
    </div>
  );
}
