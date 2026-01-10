'use client'

import { useState } from 'react';
import Image from 'next/image';

const niches = [
  {
    title: "GREGO FILMES",
    desc: "CULTURA URBANA, RAP E FUNK.",
    image: "/assets/photos/grego-2.jpg",
    color: "text-blue-500", // Removido o prefixo group-hover para controle manual
    id: 0
  },
  {
    title: "REC PRODUÇÕES",
    desc: "SOCIAL MEDIA E BUSINESS.",
    image: "/assets/photos/grego-1.jpg",
    color: "text-zinc-400",
    id: 1
  },
  {
    title: "PROJETOS SOCIAIS",
    desc: "FORMAÇÃO E IMPACTO.",
    image: "/assets/photos/grego-4.jpg",
    color: "text-green-500",
    id: 2
  }
];

export default function NichesSection() {
  // Estado para controlar qual item está ativo (importante para Mobile)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-background overflow-hidden">
      {niches.map((niche, i) => {
        const isActive = activeIndex === i;

        return (
          <div 
            key={i} 
            // Eventos para Desktop (Mouse) e Mobile (Touch)
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(isActive ? null : i)}
            className={`
              relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-foreground/20 
              transition-all duration-700 ease-in-out
              ${isActive ? 'flex-[2.5] md:flex-[1.5]' : 'flex-1'}
            `}
          >
            {/* Background Image */}
            <Image
              src={niche.image}
              alt={niche.title}
              fill
              className={`
                object-cover transition-all duration-700
                ${isActive ? 'grayscale-0 opacity-60 scale-105' : 'grayscale opacity-40 scale-100'}
              `}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10 bg-linear-to-t from-background via-transparent to-transparent">
              <h3 className={`
                text-2xl md:text-4xl font-black italic tracking-tighter transition-colors duration-500
                ${isActive ? niche.color : 'text-foreground'}
              `}>
                {niche.title}
              </h3>
              
              <p className={`
                text-foreground/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-2
                transition-opacity duration-500
                ${isActive ? 'opacity-100' : 'opacity-70'}
              `}>
                {niche.desc}
              </p>
              
              {/* CTA que expande via altura ou opacidade */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isActive ? 'h-14 opacity-100 mt-4' : 'h-0 opacity-0'}
              `}>
                <button className="bg-foreground text-background px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest active:scale-95 transition-transform">
                  Explorar Nicho
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}