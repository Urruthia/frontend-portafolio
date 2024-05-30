import Image from 'next/image';
export default function Page() {
  return (
    <main>  
      <div className="flex ">
        <div className="  items-center justify-center">
          <div className="relative">
          <Image src="/blockchain2.jpeg"
          width={900}
          height={0}
  
           alt="blockchain"/>
                    <Image src="/blockchain1.jpeg"
          width={900}
          height={0}
  
           alt="blockchain1"/>

    
    

          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center bg-purple-800 transition-transform hover:translate-x-4 relative">
          <div className="absolute inset-0 bg-opacity-50 bg-black"></div> 
          <div className="p-8 z-10 relative">
            <h1 className="text-3xl font-bold text-white mb-4">Dead Run</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
              <p className="text-white">Teniamos que crear un juego dejando fluir nuestras ideas, el objetivo era seguir patrones de diseño de codigo y buenas practicas de programaciòn. Decidimos crear un juego de carrera 2d con personajes que tienen diferentes caracteristicas y 3 niveles donde los personajes corren y hay diferentes obstaculos que hacen que los jugadores vayan perdiendo vida o los matan directamente, tambièn hay cajitas que activan efectos sobre los jugadores. Hay que recolectar monedas para asì sumar puntos, al finalizar cada nivel los jugaodres que llegan al final suman puntos, los cuales al final se usan para deterinar un ganador</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Procedimiento y Resultado</h2>
              <p className="text-white">EL resultado es el proyecto el cual mas me ha gustado participar, usamos python con la libreria pygame para realizarlo, pero antes de hicimos un planteamiento muy bueno con los patrones de diseño que habiamos visto, y pudimos llevarlos a la pràctica, asi como un tiempo semanala para dedicarle totalmente al proyecto, una divisiòn de trabajo muy buena por el equipo, asi como un codigo bastante limpio y legible por las practicas de programaciòn.
</p>
              <br />
              <p className="text-white">Mi proyecto universitario favorito</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Mi Rol</h2>
              <p className="text-white">Mi rol en este proyecto fue bastante claro mi funcion era encargarme de desarrollar  todo lo que tenia que ver con los personajes, movimiento, fisicas, controles, caracteristicas, animaciones, que funcionen en los entornos.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}