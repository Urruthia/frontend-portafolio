
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';

import Link from 'next/link';


import {faGithub, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer(){
    const links =  [     {
          name: 'Github',
          href: 'https://github.com/Urruthia',
          icon: faGithub,
          text: 'Urruthia'
        },
         {
            name: 'Instagrma',
            href: 'https://www.instagram.com/urrhutia/',
            icon: faInstagram,
            text: '@urrhutia'
          }
         
    ]
      
      

    return (
        <footer className="bg-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
 <div className="flex space-x-4 items-center">
      {links.map((link) => (
        <Link key={link.name} href={link.href}  legacyBehavior>
    <a id="link" target="_blank" className=' w-16'>
            <FontAwesomeIcon icon={link.icon} size="4x" />
            <p >{link.text}</p>
            </a>
        </Link>
      ))}
    </div>

    <div className="flex items-center space-x-2">
      <Link key={'whatsapp'} href={'https://wa.me/50233916781?text=Holaaaaa%20He%20visto%20tu%20Pagina%20de%20Internet'} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className='flex items-center'>

            <FontAwesomeIcon icon={faWhatsapp} />
            <p className="text-gray-300 ml-2">Envia un Mensaje</p>

        </a>
      </Link>
    </div>
        </div>
        {/* Derechos de autor */}
        <div className="text-center text-gray-400 mt-2">
            &copy; 2024 Urruthia. Todos los derechos reservados.
        </div>
    </footer>
    );
}