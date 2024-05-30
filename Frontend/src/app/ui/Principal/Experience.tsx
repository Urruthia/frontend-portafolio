export default function Experience() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-start mt-20 px-4">
            <div className="flex flex-col items-start space-y-4 lg:max-w-md w-full lg:mr-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 hover:scale-105">
                    <h2 className="text-4xl font-bold text-purple-400 mb-4">He tenido experiencia desarrollando en...</h2>
                    <ul className="space-y-2">
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Python (Nivel: Experimentado)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Java (Nivel: Experimentado)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">C++ (Nivel: Experimentado)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">C# (Nivel: Intermedio)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Nodejs (Nivel: Bajo)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Javascript (Nivel: Intermedio)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Blockchain (Nivel: Bajo)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Nextjs (Nivel: Aprendizaje)</li>
                        <li className="text-2xl bg-gray-700 p-2 rounded font-bold">Nestjs (Nivel: Aprendizaje)</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 hover:scale-105">
                    <h3 className="text-3xl font-bold text-purple-400">Datos Personales</h3>
                    <p className="text-2xl font-bold text-gray-300">Soy una persona que intenta buscar el balance entre salud y esfuerzo de trabajo, hago ejercicios e intento comer bien.</p>
                    <p className="text-2xl font-bold text-gray-300">Soy aficionado de los videojuegos deportes, freestyle y me encanta escuchar música.</p>
                </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-full lg:max-w-2xl w-full transform transition-all duration-500 hover:scale-105">
                <h2 className="text-4xl font-bold text-violet-400 mb-4">Yo he Aprendido...</h2>
                <h3 className="text-3xl font-bold text-purple-500 mb-4">Los Entornos de Trabajo Reales</h3>
                <p className="text-2xl text-gray-300 mb-4 text-justify font-bold">A lo largo de mi carrera universitaria, sobre diferentes tecnologías que se nos han presentado, así como diferentes principios de desarrollo, metodologías de trabajo también como gestionar un proyecto.</p>
                <h3 className="text-3xl font-bold text-purple-500 mb-4">Tecnologías y Herramientas</h3>
                <p className="text-2xl text-gray-300 mb-4 text-justify font-bold">Puedo mencionar desde que he tenido experiencia en el área de desarrollo, como en el estudio de diferentes tecnologías como realidad aumentada, blockchain, visión artificial, el uso de Active Directory en una red y también he aprendido sobre diferentes dispositivos electrónicos.</p>
                <h3 className="text-3xl font-bold text-purple-500 mb-4">Valores y Principios</h3>
                <p className="text-2xl text-gray-300 text-justify font-bold">El paso por la universidad no solo me ha enseñado mucho en mi conocimiento, la universidad me ha enseñado principios y valores que han influido en mi vida, como la importancia del trabajo en equipo, la puntualidad, responsabilidad, siempre dar más, importancia de ser un líder. Son principios y valores que han influido en mí, para ser un buen profesional y a su vez mejor persona.</p>
            </div>
        </div>
    );
}