'use client'

import Image from "next/image"

export default function TechSpec() {
  return (
    <section className="py-20 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Esquerdo: Texto de Impacto */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            TECNOLOGIA DE <br /> <span className="text-blue-600">CINEMA EM 6K.</span>
          </h2>
          <p className="text-zinc-400 text-sm uppercase tracking-widest leading-loose">
            Trabalhamos com o que há de mais moderno no mercado audiovisual. 
            Nossas produções utilizam sensores de alta dynamic range, garantindo 
            detalhes em altas luzes e sombras profundas.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-white">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Resolução 6K RAW
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Lentes Anamórficas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Estabilização Ronin RS3
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Drone FPV de Alta Velocidade
            </li>
          </ul>
        </div>

        {/* Lado Direito: Imagem de Detalhe (ex: uma lente ou câmera no gimbal) */}
        <div className="flex-1 relative aspect-square md:aspect-video rounded-2xl overflow-hidden grayscale">
           <Image
            src="/assets/photos/camera-setup.jpg" 
            alt="Setup de Cinema Grego Filmes" 
            className="w-full h-full object-cover"
            width={500}
            height={500}
           />
           <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
        </div>

      </div>
    </section>
  )
}