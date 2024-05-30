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
            <h1 className="text-3xl font-bold text-white mb-4">CRUD Contrato Inteligente</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
              <p className="text-white">El proyecto es pequeño, debiamos crear un CRUD por un contrato inteligente para poder utilizar la tecnologìa blockhain, teniamos que aplicar a un empleado que tuviera dpi, nombre, apellido, direccion, fecha de nacimiento, edad, salario, y puesto. Un atributo que se modificaba para saber si el empleado estaba contratado ono.  Es el proyecto mas reciente en el cual he participado</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Procedimiento y Resultado</h2>
              <p className="text-white">Utilizamos el IDE de Remix para porgramar contratos inteligentes por medio de Solidity, Utilizamos redes de prueba por medio de Metamask para poder conseguir Ether que son necesarios para poder desplegar nuestro contrato y que se haga cambio en el Blochain.</p>
              <br />
              <p className="text-white">Decidimos aprovchar que blockchain tiene una forma de almacenar los datos por medio de nodos, y un nodo nunca sera elimnado por completo, entonce se puede tener historial de datos, por lo que el eliminar empleado en este caso solo se le desactiva el role para seguir aprovechando el nodo.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Mi Rol</h2>
              <p className="text-white">Fue un proyecto realizado por 2 personas se podria decir que utilizamos la metodologìa de programacion extrema, mi rol en este caso fue codificar el Contrato Inteligente</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}