import Image from 'next/image';

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Imágenes */}
        <div className="lg:w-1/2 relative">
          <div className="relative  ">
            <Image src="/blockchain2.jpeg" layout="responsive" width={1600} height={1067}  alt="blockchain" />
          </div>
          <div className="relative w-full h-48 lg:h-auto">
            <Image src="/blockchain1.jpeg" layout="responsive"  width={1600} height={1067}  alt="blockchain1" />
          </div>
        </div>
        
        {/* Texto */}
        <div className="lg:w-1/2 bg-purple-800 transition-transform hover:translate-x-4">
          <div className="p-8 lg:p-10 flex flex-col justify-center h-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">CRUD Contrato Inteligente</h1>
            <div className="mb-6">
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">Descripción</h2>
              <p className="text-white">El proyecto es pequeño, debíamos crear un CRUD por un contrato inteligente para poder utilizar la tecnología blockchain, teníamos que aplicar a un empleado que tuviera DPI, nombre, apellido, dirección, fecha de nacimiento, edad, salario y puesto. Un atributo que se modificaba para saber si el empleado estaba contratado o no. Es el proyecto más reciente en el cual he participado.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">Procedimiento y Resultado</h2>
              <p className="text-white">Utilizamos el IDE de Remix para programar contratos inteligentes por medio de Solidity. Utilizamos redes de prueba por medio de Metamask para poder conseguir Ether que son necesarios para poder desplegar nuestro contrato y que se haga cambio en el Blockchain.</p>
              <br />
              <p className="text-white">Decidimos aprovechar que blockchain tiene una forma de almacenar los datos por medio de nodos, y un nodo nunca será eliminado por completo, entonces se puede tener historial de datos, por lo que el eliminar empleado en este caso solo se le desactiva el rol para seguir aprovechando el nodo.</p>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">Mi Rol</h2>
              <p className="text-white">Fue un proyecto realizado por 2 personas, se podría decir que utilizamos la metodología de programación extrema. Mi rol en este caso fue codificar el Contrato Inteligente.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}