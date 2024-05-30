import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){

    return (<div className="mt-10 flex justify-center">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-3/4">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">Mis Proyectos</h2>
        <div className="grid grid-cols-4 gap-6">
        
            <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
            <Image src="/yo3.jpeg"
          width={1000}
          height={760}
          className="w-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
           alt="Foto mia"/>
                <div className="p-4">
                    <p className="text-gray-300 mb-4">Dead RuN</p>
                    <Link href="principal/deadrun" legacyBehavior>
                    <a id="link" className="text-purple-400 hover:text-purple-300 font-bold">Ver más</a>
                    </Link>
                </div>
            </div>
        
            <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
            <Image src="/walle.jpeg"
          width={1000}
          height={760}
          className="w-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
           alt="walle"/>
                <div className="p-4">
                <p className="text-gray-300 mb-4">Walle</p>
                    <Link href="principal/walle" legacyBehavior>
                    <a id="link" className="text-purple-400 hover:text-purple-300 font-bold">Ver más</a>
                    </Link>
                </div>
            </div>
           
            <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
            <Image src="/remix.jpg"
          width={1000}
          height={760}
          className="w-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
           alt="remix"/>
                <div className="p-4">
                    <p className="text-gray-300 mb-4">CRUD Contrato Inteligente</p>
                    <Link href="principal/blockchain" legacyBehavior>
                    <a id="link" className="text-purple-400 hover:text-purple-300 font-bold">Ver más</a>
                    </Link>
                </div>
            </div>
         
            <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
              
                <div className="p-4">
                    <p className="text-gray-300 mb-4">Piedra, Papel y Tijera</p>
                    <a href="#" className="text-purple-400 hover:text-purple-300 font-bold">Ver más</a>
                </div>
            </div>
        </div>
    </div>
</div>)

}