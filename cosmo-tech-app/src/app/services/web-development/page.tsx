export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-purple-400">Desarrollo Web</h1>
          <p className="text-lg text-gray-400 mt-2">Soluciones web a medida para tu negocio.</p>
        </header>

        <main>
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">Nuestra Oferta de Desarrollo Web</h2>
            <p className="text-gray-300 mb-4">
              Creamos experiencias web impactantes y funcionales, desde sitios corporativos hasta aplicaciones web complejas.
              Nos enfocamos en la usabilidad, el rendimiento y el diseño responsivo.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Diseño y desarrollo de sitios web personalizados.</li>
              <li>Desarrollo de aplicaciones web progresivas (PWA).</li>
              <li>Optimización para motores de búsqueda (SEO).</li>
              <li>Mantenimiento y soporte web.</li>
            </ul>
          </section>

          <section className="text-center">
            <a
              href="/#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Solicitar Cotización
            </a>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CosmoTech - Desarrollo Web</p>
        </footer>
      </div>
    </div>
  );
}
