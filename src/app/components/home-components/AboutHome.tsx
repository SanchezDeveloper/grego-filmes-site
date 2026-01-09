'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutHome() {
  return (
    // min-h-screen para mobile, mas md:h-screen para travar no desktop
    <section className="relative w-full min-h-screen md:h-screen flex items-center bg-background overflow-hidden py-12 md:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          
          {/* FOTO: Ajustada com max-h para não estourar a tela */}
          <div className="flex-1 relative w-full h-[40vh] md:h-[70vh] lg:h-[80vh] max-h-150 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/photos/about-photo.jpeg" 
              alt="Bastidores Grego Filmes"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              priority
            />
            {/* Overlay sutil para profundidade */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
          </div>

          {/* CONTEÚDO: Espaçamento ajustado para compactar verticalmente */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-2 md:space-y-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                A ARTE DE <br />
                <span className="text-blue-600">
                  CONTAR HISTÓRIAS.
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              <p>
                Não apenas captamos imagens. Criamos atmosferas. Seja no ritmo frenético do asfalto, 
                na precisão estratégica de uma marca ou no impacto de um projeto social.
              </p>
              <p className="hidden lg:block">
                A <strong>Grego Filmes</strong> une tecnologia de ponta e uma visão artística única para cada nicho, transformando cada frame em uma experiência memorável.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contatos" 
                className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-foreground transition-all duration-300 transform hover:scale-105"
              >
                Trabalhe Conosco
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Elemento decorativo de fundo para preencher espaço sem altura real */}
      <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-foreground/5 select-none pointer-events-none hidden lg:block">
        GREGO
      </div>
    </section>
  )
}