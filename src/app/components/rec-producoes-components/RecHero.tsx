'use client'

export default function RecHero() {
  return (
    <section className="relative h-[70vh] w-full flex items-center bg-background/90 overflow-hidden">
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Business & Media Strategy</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
            TRANSFORME SUA <br /> <span className="text-foreground/40 ">PRESENÇA DIGITAL.</span>
          </h1>
          <p className="text-foreground/40 text-sm md:text-lg max-w-lg leading-relaxed">
            Produção audiovisual estratégica e gestão de mídias para empresas que buscam autoridade, escala e resultados reais no mercado.
          </p>
          <button className="bg-blue-600 text-foreground px-8 py-4 rounded-lg font-bold uppercase text-xs hover:bg-foreground hover:text-background transition-all">
            Solicitar Consultoria
          </button>
        </div>
        
        {/* Elemento Visual: Um mockup de celular ou monitor com vídeos da Rec */}
        <div className="hidden md:block relative aspect-video bg-background rounded-2xl shadow-2xl border border-foreground/5 overflow-hidden">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
            <source src="/assets/videos/rec-showreel-business.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10" />
    </section>
  )
}