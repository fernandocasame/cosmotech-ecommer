import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-purple-400">
            CosmoTech
          </a>
          <nav className="space-x-4 hidden md:flex items-center">
            <a href="/#services" className="hover:text-purple-300">Servicios</a>
            <div className="relative group">
              <button className="hover:text-purple-300 focus:outline-none">
                Nuestros Servicios <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                <a href="/services/web-development" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-500 hover:text-white">Desarrollo Web</a>
                <a href="/services/ecommerce" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-500 hover:text-white">E-commerce</a>
                <a href="/services/chatbots" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-500 hover:text-white">Chatbots (n8n)</a>
                <a href="/services/video-calls" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-500 hover:text-white">Videollamadas</a>
              </div>
            </div>
            <a href="/#about" className="hover:text-purple-300">Nosotros</a>
            <a href="/#contact" className="hover:text-purple-300">Contacto</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button - functionality to be added with JS if needed */}
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Innovación Digital a tu Alcance
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transformamos tus ideas en soluciones de software de vanguardia.
            </p>
            <a
              href="#contact"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Hablemos de tu Proyecto
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-400">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
                <div className="text-purple-400 mb-4">
                  {/* Placeholder for an icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a1 1 0 000-2H4a1 1 0 000 2zm12 0h-3a1 1 0 100 2h3a1 1 0 100-2zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm12 4H4a1 1 0 100 2h12a1 1 0 100-2zM4 15a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
                <p className="text-gray-400">
                  Creamos sitios web modernos, responsivos y optimizados para tus necesidades.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                <div className="text-pink-400 mb-4">
                   {/* Placeholder for an icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                <p className="text-gray-400">
                  Desarrollamos tiendas online robustas y escalables para impulsar tus ventas.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-red-500/50 transition-shadow duration-300">
                 <div className="text-red-400 mb-4">
                   {/* Placeholder for an icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2c.265 0 .512-.05.74-.14l3.071-1.281A1 1 0 0018 12V8a1 1 0 00-1-1h-2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chatbots Inteligentes (n8n)</h3>
                <p className="text-gray-400">
                  Automatiza la atención al cliente con chatbots personalizados integrados con n8n.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300">
                <div className="text-yellow-400 mb-4">
                  {/* Placeholder for an icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.586-1.414a2 2 0 012.828 0l1.172 1.172a2 2 0 010 2.828l-1.172 1.172a2 2 0 01-2.828 0L12 10.172V6.828l2.586-2.242zM12 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Soluciones de Videollamada</h3>
                <p className="text-gray-400">
                  Implementamos sistemas de videollamada seguros y eficientes para tu comunicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-400">
              Sobre Nosotros
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                {/* Replace with an actual image or illustration */}
                <div className="w-full h-64 bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">Imagen/Ilustración</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4 text-gray-300">
                  En CosmoTech, somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales dedicados a impulsar el éxito de nuestros clientes a través de la tecnología.
                </p>
                <p className="text-lg mb-4 text-gray-300">
                  Creemos en el poder de la innovación para transformar negocios y estamos comprometidos a ofrecer soluciones personalizadas y de alta calidad que superen las expectativas.
                </p>
                <p className="text-lg text-gray-300">
                  Nuestra misión es ser tu socio tecnológico de confianza, guiándote en cada paso del camino hacia la digitalización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-400">
              Contáctanos
            </h2>
            <div className="max-w-lg mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} CosmoTech. Todos los derechos reservados.</p>
          <p>Innovación Digital para un Futuro Brillante.</p>
        </div>
      </footer>
    </div>
  );
}
