import Image from 'next/image';



export default function Information() {
    return (
<div className="flex justify-center items-center ">
        <div className="bg-gray-800 rounded-lg p-8 max-w-5xl shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="flex flex-col md:flex-row items-center">
                
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
          <Image src="/yo3.jpeg"
          width={1000}
          height={760}
          className="w-full rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
           alt="Foto mia"/>
                </div>
              
                <div className="md:w-1/2">
                 <h2 className="text-5xl mb-4 text-violet-500 font-bold ">Bienvenido</h2>
                 <h2 className="text-4xl mb-4 text-purple-500 font-bold ">Mi nombres es:</h2>
                    <h2 className="text-5xl mb-4 text-purple-400 font-bold ">Pedro Andres Urrutia Hurtarte</h2>
                    <p className="text-2xl text-gray-300 font-bold">Soy un Estudiante de Ingenieria En Informàtica y Sistemas cursando el quinto año de la carrera.</p>
                    <br />
                    <p className="text-2xl text-gray-300 font-bold">Tengo 22 años y Estudio en la Universidad Rafael Landivar.</p>
                    <br />
                    <p className="text-2xl text-gray-300 font-bold">Aun no tengo expeiencia laboral, pero por medio de la carrera he podido aprender, probar,tener experiencias con diferentes tipos de tecnologìas.<br /></p>
                </div>
            </div>
        </div>
    </div>
   
    );
  }