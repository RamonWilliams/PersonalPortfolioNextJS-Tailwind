import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" alt="hero" src="/images/bridge.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Hola soy Ramón Williams 👋🏼!
            <br className="hidden lg:inline-block" />Junior Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy una persona inquieta y en contínuo aprendizaje, estoy buscando una oprtunidad para seguir creciendo como
            desarrollador, me consideron alguien que le gusta trabajar en equipo y muy comprometido en las tareas que se me asignan,
             Os aseguro responsabilidad,ilusón y compromiso 💪🏽.
            Me encata el deporte, las películas, las series y compartir tiempo con las personas de mi entorno.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              <Link href="/bootcamp">
                <a>Bootcamp</a>
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;