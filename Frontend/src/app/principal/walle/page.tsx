export default function Page() {
  return (
    <main className="h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <iframe className="w-full h-full" src="/walle.mp4" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-purple-800 transition-transform hover:translate-x-4">
          <div className="p-12 lg:p-24">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Walle</h1>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Descripción</h2>
              <p className="text-white text-lg lg:text-xl">
                El proyecto tenía como objetivo usar microcontroladores para llevar a cabo una idea cualquiera, nosotros decidimos crear un carro espía, el cual fue evolucionando en diseño hasta convertirse en Walle.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Procedimiento y Resultado</h2>
              <p className="text-white text-lg lg:text-xl">
                Vamos a resaltar el uso de los controladores que son Arduino y el PIC 18f4450. El Arduino fue quien controló el movimiento de los motores del Walle por medio de código escrito en C en su IDE, mientras el PIC18f4550 se encargaba de controlar la ESP32CAM, la cual era responsable de transmitir una imagen hacia una página web. Además, se encargaban de la iluminación de los ojos.
              </p>
              <br />
              <p className="text-white text-lg lg:text-xl">
                El diseño se hizo atractivo al pensar en crear un personaje conocido y volverlo un espía. El diseño fue hecho por nosotros mismos, utilizando diferentes materiales.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Mi Rol</h2>
              <p className="text-white text-lg lg:text-xl">
                Mi rol dentro de este proyecto fue crear el primer circuito para que el motor moviera las llantas, así como la programación del IDE del Arduino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}