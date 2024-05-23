import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer(){


    return (
        <footer className="bg-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex space-x-4">
                {/* Iconos de GitHub e Instagram */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-all duration-300">
                <FontAwesomeIcon icon={faCoffee} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-all duration-300">
                     <FontAwesomeIcon icon={faCoffee} />
                </a>
            </div>
            <div className="flex items-center space-x-2">
                {/* Icono de WhatsApp */}
                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-all duration-300">
                    <i className="fab fa-whatsapp fa-lg"></i>
                </a>
                {/* Número de teléfono */}
                <p className="text-gray-300">Teléfono: <a href="tel:+123456789" className="text-white hover:text-purple-300 transition-all duration-300">+123 456 789</a></p>
            </div>
        </div>
        {/* Derechos de autor */}
        <div className="text-center text-gray-400 mt-2">
            &copy; 2024 Tu Empresa. Todos los derechos reservados.
        </div>
    </footer>
    );
}