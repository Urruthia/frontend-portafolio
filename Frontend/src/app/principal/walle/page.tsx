export default function Page() {
    return (

<main>  
<div className="flex h-screen">

  <div className="w-1/2 flex items-center justify-center">
  
    <iframe className="w-full h-full" src="/walle.mp4"  ></iframe>
  </div>

  <div className="w-1/2 flex items-center justify-center bg-purple-800 transition-transform hover:translate-x-4">
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-4">Walle</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Descripcion </h2>
        <p className="text-white">El proyecto tenia como objetivo usar microcontroladores para llevar acabo una idea cualquiera, nosotros decidimos crear un carro espia, el cual fue evolucionando en diseño hasta convertirse en Walle</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">Procedimiento Y Resultado</h2>
        <p className="text-white">Vamos a resaltar el uso de los controladores que son Aruino,y el pick 18f4450, el arduino fue quien controlo el moviemiento de los motores del Walle por medio de Còdigo escrito en C en su ID, Mientras el pic18f4550 se encargaba de de controlar la ESP32CAM la cual era la responsable de transmitir una imagen hacia una pagina web, aparte se encargaban de la iluminaciòn de los ojos.</p>
        <br />
        <p>El diseño se hizo atractivo a la hora pensar en crear un personaje conocido y volverlo un espia el diseño fue hecho por nostros mismos, con diferentes materiales</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Mi rol</h2>
        <p className="text-white">Mi rol dentro de este proyecto fue crear el primer circuito para que el motor moviera las llantas, asi como la programaciòn del IDE del Arduino.</p>
      </div>
    </div>
  </div>

</div>

</main>
    )
  }