import Image from 'next/image';

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <div className="flex flex-col lg:flex-row">
        {/* Imágenes */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-1/2 mb-10 lg:mb-0">
            <Image src="/blockchain2.jpeg" layout="fill" objectFit="cover" alt="blockchain" />
          </div>
          <div className="relative w-full h-48">
            <Image src="/blockchain1.jpeg" layout="fill" objectFit="cover" alt="blockchain1" />
          </div>
        </div>
        
        {/* Texto */}
        <div className="lg:w-1/2 bg-purple-800 transition-transform hover:translate-x-4">
          <div className="p-8 lg:p-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Dead Run</h1>
            <div className="mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">Descripción</h2>
              <p className="text-white">Teníamos que crear un juego dejando fluir nuestras ideas, el objetivo era seguir patrones de diseño de código y buenas prácticas de programación. Decidimos crear un juego de carrera 2D con personajes que tienen diferentes características y 3 niveles donde los personajes corren y hay diferentes obstáculos que hacen que los jugadores vayan perdiendo vida o los matan directamente, también hay cajitas que activan efectos sobre los jugadores. Hay que recolectar monedas para así sumar puntos, al finalizar cada nivel los jugadores que llegan al final suman puntos, los cuales al final se usan para determinar un ganador.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">Procedimiento y Resultado</h2>
              <p className="text-white">El resultado es el proyecto el cual más me ha gustado participar, usamos Python con la librería Pygame para realizarlo, pero antes de hicimos un planteamiento muy bueno con los patrones de diseño que habíamos visto, y pudimos llevarlos a la práctica, así como un tiempo semanal para dedicarle totalmente al proyecto, una división de trabajo muy buena por el equipo, así como un código bastante limpio y legible por las prácticas de programación.</p>
              <br />
              <p className="text-white">Mi proyecto universitario favorito.</p>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">Mi Rol</h2>
              <p className="text-white">Mi rol en este proyecto fue bastante claro: mi función era encargarme de desarrollar todo lo que tenía que ver con los personajes, movimiento, físicas, controles, características, animaciones, que funcionen en los entornos.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}