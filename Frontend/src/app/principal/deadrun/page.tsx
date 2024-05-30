export default function Page() {
    return (

<main>  

<div className="flex h-screen">

  <div className="w-1/2 flex items-center justify-center">
   
  </div>

  <div className="w-1/2 flex items-center justify-center bg-purple-800 transition-transform hover:translate-x-4 relative">
    <div className="absolute inset-0 bg-opacity-50 bg-black"></div> 
    <div className="p-8 z-10 relative">
      <h1 className="text-3xl font-bold text-white mb-4">Walle</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Descripción</h2>
        <p className="text-white">El proyecto tenía como objetivo usar microcontroladores para llevar a cabo una idea cualquiera. Nosotros decidimos crear un carro espía, el cual fue evolucionando en diseño hasta convertirse en Walle.</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Procedimiento y Resultado</h2>
        <p className="text-white">Vamos a resaltar el uso de los controladores que son Arduino y el PIC18F4450. El Arduino controló el movimiento de los motores del Walle mediante código escrito en C en su IDE, mientras que el PIC18F4550 se encargaba de controlar la ESP32CAM, la cual era la responsable de transmitir una imagen hacia una página web. Además, se encargaban de la iluminación de los ojos.</p>
        <br />
        <p className="text-white">El diseño se hizo atractivo al pensar en crear un personaje conocido y convertirlo en un espía. El diseño fue hecho por nosotros mismos, utilizando diferentes materiales.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Mi Rol</h2>
        <p className="text-white">Mi rol dentro de este proyecto fue crear el primer circuito para que el motor moviera las llantas, así como la programación del IDE del Arduino.</p>
      </div>
    </div>
  </div>

</div>
</main>
    )
  }