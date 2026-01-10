'use client'

import { useState } from "react"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Grego",
    nicho: "Grego Filmes",
    link: "/grego-filmes",
    video: "/assets/videos/grego-bastidores.webm",
  },
  {
    title: "S7 Portas Automáticas",
    nicho: "Rec Produções",
    link: "/rec-producoes",
    video: "/assets/videos/grego-bastidores.webm",
  },
  {
    title: "Elas no corre",
    nicho: "Projetos Sociais",
    link: "/projetos-sociais",
    video: "/assets/videos/grego-bastidores.webm",
  }
]

export default function PortfolioHighlight() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Curadoria</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground leading-none">
              Trabalhos em <br/> Destaque
            </h2>
          </div>
          <Link href="/portfolio" className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest border-b border-foreground/20 pb-2">
            Ver portfólio completo <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const isActive = activeItem === index;

            return (
              <div 
                key={index}
                className="relative group aspect-video md:aspect-4/5 overflow-hidden rounded-xl bg-zinc-900 shadow-2xl touch-none"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                onClick={() => setActiveItem(isActive ? null : index)}
              >
                {/* Vídeo de Background */}
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "opacity-100 scale-105" : "opacity-40 scale-100"
                  }`}
                >
                  <source src={project.video} type="video/webm" />
                </video>

                {/* Overlay de Informações */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/20 to-transparent">
                  <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                    {project.nicho}
                  </span>
                  
                  <h3 className={`text-white text-xl font-bold uppercase tracking-tight transition-transform duration-500 ${
                    isActive ? "translate-x-0" : "md:-translate-x-2"
                  }`}>
                    {project.title}
                  </h3>
                  
                  {/* Linha Decorativa Dinâmica */}
                  <div className={`h-px bg-blue-600 mt-4 transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}></div>

                  {/* Botão de Link Visível apenas quando ativo (Importante para Mobile) */}
                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                    isActive ? "h-10 opacity-100" : "h-0 opacity-0"
                  }`}>
                    <Link 
                      href={project.link}
                      className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest bg-blue-600 w-fit px-4 py-2 rounded-full"
                    >
                      Ver Case <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}