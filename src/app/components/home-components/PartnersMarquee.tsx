'use client'

import { useState } from 'react'
import Image from 'next/image'

const partners = [
  { name: 'S7 Portas Automáticas', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 2', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 3', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 4', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 5', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 6', logo: '/assets/brand/s7-logo.png' },
]

export default function PartnersMarquee() {
  // Estado para destacar um logo específico no toque (Mobile)
  const [activePartner, setActivePartner] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center space-y-2">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">CONFIANÇA</span>
          <h2 className="text-2xl font-black tracking-tighter uppercase text-foreground">
            Quem confia no nosso olhar
          </h2>
        </div>
      </div>

      {/* Container com 'group' para o hover no desktop */}
      <div className="relative flex overflow-hidden group">
        
        {/* Faixa animada - No mobile ela não para, apenas reage ao toque */}
        <div className="flex animate-marquee group-hover:pause-marquee whitespace-nowrap py-4 items-center">
          {[...partners, ...partners, ...partners].map((partner, index) => {
            const isSelected = activePartner === index;

            return (
              <div 
                key={index} 
                className="mx-8 md:mx-16 w-32 md:w-48 shrink-0 touch-none"
                onMouseEnter={() => setActivePartner(index)}
                onMouseLeave={() => setActivePartner(null)}
                onTouchStart={() => setActivePartner(index)}
                onTouchEnd={() => setTimeout(() => setActivePartner(null), 1000)}
              >
                <div className={`
                  relative h-12 md:h-20 w-full transition-all duration-500 
                  ${isSelected ? 'grayscale-0 opacity-100 scale-110' : 'grayscale opacity-40 scale-100'}
                `}>
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain"
                  /> 
                </div>
              </div>
            );
          })}
        </div>

        {/* Gradientes laterais - pointer-events-none é essencial para o toque passar para os logos */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}