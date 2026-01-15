'use client'

export default function GregoHero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background de Clipe (Mix de Rap/Funk) */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
        <source src="/assets/videos/grego-showreel-urbano.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay de Textura (Film Grain) */}
      <div className="absolute inset-0 bg-[url('/assets/textures/grain.png')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-4 px-4">
        <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-xs">Visual Culture</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white uppercase leading-none">
          ESTÉTICA <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>DE RUA.</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base font-bold uppercase tracking-widest max-w-2xl mx-auto">
          Audiovisual de alto nível para o cenário do Rap e Funk brasileiro. 
          Transformamos rimas em cinema.
        </p>
      </div>
    </section>
  )
}