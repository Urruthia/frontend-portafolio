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
            <h1 className="text-3xl font-bold text-white mb-4">Piedra, Papel y Tijera</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
              <p className="text-white">Un proyecto fuera de lo comùn, teniamos que aplicar lo visto en inteligencia artificial en cualquier tipo de idea, el proyecto es lo mas sencillo en cuanto a funcionalidad, con la camara de la computadora reconoce la mano de una o 2 personas, en caso de ser una se jugara contra la maquina en caso de ser 2 jugaran entre ello, se debe agitar la mano simulando el 3,2,1 del piedra papale y tijera, a la hora de que se termine la se reconocera que saco cada jugador y se sumara un punto al ganador.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Procedimiento y Resultado</h2>
              <p className="text-white">Para el proyecto se utilizo python y destaco de entre todas las herramientas, la libreria de datos utilizada para crear la vision artiicial, osea la capacidad de poder reconocer la mano de una persona, asi como tener super dividida la mano en diferentes partes, atraves de poder definir la mano con esas partes, nuestro trabajo se centrò en recnocer el movimiento de los dedos y con diferente condiciones recnocer el par+on de los deedos para piedra, papel o tijera. Estos patrones se recnocian estableciendo la posiciòn de los dedos con respecto a la pantalla </p>
              <br />
              <p className="text-white">El resultado fue un juego sencillo analizado completamente por la visiòn artificial, pudiendo asì recnocer los patrones que en este se lleva para poder crear vs entre personas y maquinas.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Mi Rol</h2>
              <p className="text-white">Mi rol Principal fue codificar pues a mi falta de camara en mi computadora, no podia probar el software, eso se encargaban mis compañeros los cuales probaban el programa y mirabamos que patrones faltaban y lo modificabamos en el codigo, podrìa resaltar mi trabajo tambièn en hacer que el juego funcione para 2 personas</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}