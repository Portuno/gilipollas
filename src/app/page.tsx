export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            GILIPOLLAS
          </h1>
          
          <div className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            <p className="mb-4">¡Bienvenido a la página más honesta de internet!</p>
            <p className="text-lg md:text-xl text-white/80">
              Aquí celebramos la sinceridad sin filtros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">🤡</div>
              <h3 className="text-white font-semibold text-lg mb-2">Zona Libre</h3>
              <p className="text-white/80 text-sm">Sin censura, sin filtros</p>
            </div>
            
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">😂</div>
              <h3 className="text-white font-semibold text-lg mb-2">Humor Real</h3>
              <p className="text-white/80 text-sm">Risas garantizadas</p>
            </div>
            
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-white font-semibold text-lg mb-2">Autenticidad</h3>
              <p className="text-white/80 text-sm">100% genuino</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              ¡Únete al Club!
            </button>
            
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Más Info
            </button>
          </div>

          <div className="mt-8 text-white/60 text-sm">
            <p>* Esta página es solo para entretenimiento</p>
          </div>
        </div>

        <div className="mt-8 text-white/80 text-center">
          <p className="text-lg font-medium">
            "La honestidad es el mejor regalo que puedes dar... o recibir"
          </p>
        </div>
      </div>
    </div>
  );
}