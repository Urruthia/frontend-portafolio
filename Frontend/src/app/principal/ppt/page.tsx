import Image from 'next/image';

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Imágenes */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <Image src="/blockchain2.jpeg" layout="responsive" width={1600} height={1067} alt="blockchain" />
          </div>
          <div className="relative w-full h-48 lg:h-auto">
            <Image src="/blockchain1.jpeg" layout="responsive" width={1600} height={1067} alt="blockchain1" />
          </div>
        </div>
        
        {/* Texto */}
        <div className="lg:w-1/2 bg-purple-800 transition-transform hover:translate-x-4 relative">
          <div className="absolute inset-0 bg-opacity-50 "></div>
          <div className="p-10 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Piedra, Papel y Tijera</h1>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Descripción</h2>
              <p className="text-white">Un proyecto fuera de lo común, teníamos que aplicar lo visto en inteligencia artificial en cualquier tipo de idea. El proyecto es lo más sencillo en cuanto a funcionalidad: con la cámara de la computadora reconoce la mano de una o dos personas...</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Procedimiento y Resultado</h2>
              <p className="text-white">Para el proyecto se utilizó Python y destacó, entre todas las herramientas, la librería de datos utilizada para crear la visión artificial, es decir, la capacidad de poder reconocer la mano de una persona...</p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Mi Rol</h2>
              <p className="text-white">Mi rol principal fue codificar, pues a falta de cámara en mi computadora, no podía probar el software. Eso se encargaban mis compañeros, quienes probaban el programa y mirábamos qué patrones faltaban y los modificábamos en el código...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}