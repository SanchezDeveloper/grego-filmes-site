'use client'

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Grego",
    nicho: "Grego Filmes (ver mais)",
    link: "/grego-filmes",
    video: "/assets/videos/grego-bastidores.webm",
  },
  {
    title: "S7 Portas Automáticas",
    nicho: "Rec Produções (ver mais)",
    link: "/rec-producoes",
    video: "/assets/videos/grego-bastidores.webm",
  },
  {
    title: "Elas no corre",
    nicho: "Projetos Sociais (ver mais)",
    link: "/projetos-sociais",
    video: "/assets/videos/grego-bastidores.webm",
  }
]

export default function PortfolioHighlight() {
  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        {/* Cabeçalho Simples */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Curadoria</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground">Trabalhos em <br/> Destaque</h2>
          </div>
          <Link href="/portfolio" className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2 uppercase text-xs font-bold tracking-widest border-b border-foreground pb-2">
            Ver portfólio completo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link 
              key={index} 
              href={project.link}
              className="group relative aspect-video md:aspect-4/5 overflow-hidden rounded-xl bg-foregroun/90 shadow-2xl"
            >
              {/* Vídeo de Background (sem áudio) */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              >
                <source src={project.video} type="video/mp4" />
              </video>

              {/* Overlay de Informações */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/20 to-transparent">
                <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">{project.nicho}</span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                
                {/* Linha Decorativa que cresce no hover */}
                <div className="w-0 group-hover:w-full h-px bg-blue-600 mt-4 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}