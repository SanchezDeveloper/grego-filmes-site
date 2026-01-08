'use client'

export default function VerticalShowreel() {
  return (
    // Mudamos py-24 para py-12 e adicionamos min-h-screen ou h-auto para controle
    <section className="py-12 md:py-20 bg-background overflow-hidden flex items-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          
          {/* LADO ESQUERDO: TEXTOS */}
          <div className="flex-1 space-y-8 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tighter uppercase">
                UMA ESTRUTURA, <br />
                <span className="text-blue-600">TRÊS FRENTES.</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {/* Nicho 1: Grego Filmes */}
              <div className="group cursor-default">
                <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  GREGO FILMES
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-md mx-auto md:mx-0">
                  A estética das ruas. Clipes de Rap e Funk com identidade visual de alto nível.
                </p>
              </div>

              {/* Nicho 2: Rec Produções */}
              <div className="group cursor-default border-y border-zinc-900 py-4">
                <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  REC PRODUÇÕES
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-md mx-auto md:mx-0">
                  Sua marca em movimento. Social media e audiovisual estratégico para empresas.
                </p>
              </div>

              {/* Nicho 3: Projetos Sociais */}
              <div className="group cursor-default">
                <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  PROJETOS SOCIAIS
                </h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-md mx-auto md:mx-0">
                  Audiovisual como ferramenta de mudança. Capacitação e impacto através da lente.
                </p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: VÍDEO VERTICAL COM ALTURA CONTROLADA */}
          <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
            {/* Ajustamos o max-w e adicionamos max-h para o vídeo não estourar a tela */}
            <div className="relative group w-full max-w-70 md:max-w-[320px] lg:max-w-87.5">
              <div className="absolute -inset-1 bg-blue-600/10 rounded-[2rem] blur-2xl"></div>
              
              {/* Definimos uma altura máxima baseada na viewport (ex: 60vh ou 70vh) */}
              <div className="relative aspect-9/16 max-h-[60vh] md:max-h-[70vh] bg-zinc-900 rounded-[1.8rem] overflow-hidden border border-zinc-800 shadow-2xl mx-auto">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/assets/videos/grego-bastidores.webm" type="video/webm" />
                </video>
              </div>

              <div className="absolute top-6 -right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg -rotate-12">
                All-in-one
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}