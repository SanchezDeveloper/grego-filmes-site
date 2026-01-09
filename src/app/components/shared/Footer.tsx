'use client'

import Link from 'next/link'
import { Instagram, Youtube, Mail, ArrowUp, ArrowRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-foreground/20 pb-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* COLUNA 1: IDENTIDADE */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase text-foreground">
              GREGO<span className="text-blue-600">FILMES</span>
            </h2>
            <p className="text-foreground/60 text-sm max-w-sm leading-relaxed uppercase tracking-wider font-light">
              Elevando o padrão audiovisual através da cultura, estratégia e impacto social.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="p-3 bg-foreground/60 border border-foreground/80 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-white group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="p-3 bg-foreground/60 border border-foreground/80 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-white group">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="p-3 bg-foreground/60 border border-foreground/80 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-white group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* COLUNA 2: CONVERSÃO DIRETA (O "O QUE VOCÊ PRECISA?") */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
              Inicie um projeto
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/contatos?tipo=clipe" className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-blue-600 transition-all">
                <span className="text-foreground text-xs font-bold uppercase tracking-tighter">Quero um Clipe</span>
                <ArrowRight size={14} className="text-foreground/60 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/contatos?tipo=empresa" className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-blue-600 transition-all">
                <span className="text-foreground text-xs font-bold uppercase tracking-tighter">Vídeo Institucional</span>
                <ArrowRight size={14} className="text-foreground/60 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/contatos?tipo=social" className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-blue-600 transition-all">
                <span className="text-foreground text-xs font-bold uppercase tracking-tighter">Projeto Social</span>
                <ArrowRight size={14} className="text-zinc-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/contatos" className="group flex items-center justify-between p-4 bg-blue-600 rounded-xl hover:bg-foreground transition-all">
                <span className="text-white group-hover:text-background text-xs font-black uppercase tracking-tighter">Falar Agora</span>
                <ArrowRight size={14} className="text-white group-hover:text-background group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* LINHA FINAL: COPYRIGHT E BACK TO TOP */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            <p>© {new Date().getFullYear()} Grego Filmes | © SANCHEZ DEV</p>
            <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
          >
            Voltar ao topo 
            <span className="p-2.5 border border-zinc-800 rounded-full group-hover:border-blue-600 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}