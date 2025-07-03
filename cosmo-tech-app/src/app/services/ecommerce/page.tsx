export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-purple-400">Soluciones E-commerce</h1>
          <p className="text-lg text-gray-400 mt-2">Impulsa tus ventas online con nuestras plataformas de comercio electrónico.</p>
        </header>

        <main>
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">Desarrollo de Tiendas Online</h2>
            <p className="text-gray-300 mb-4">
              Construimos tiendas virtuales robustas, seguras y optimizadas para la conversión. Te ayudamos a vender más y mejor.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Diseño personalizado de tiendas online.</li>
              <li>Integración con pasarelas de pago.</li>
              <li>Gestión de inventario y catálogo de productos.</li>
              <li>Optimización para la experiencia del usuario (UX).</li>
              <li>Plataformas escalables (Shopify, WooCommerce, etc.).</li>
            </ul>
          </section>

          <section className="text-center">
            <a
              href="/#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Descubre Nuestras Soluciones E-commerce
            </a>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CosmoTech - E-commerce</p>
        </footer>
      </div>
    </div>
  );
}
