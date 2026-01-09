'use client'

import Image from 'next/image'

// Aqui podes colocar s de marcas da REC ou fotos de artistas da GREGO
const partners = [
  { name: 'S7 Portas Automáticas', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 1', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 1', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 1', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 1', logo: '/assets/brand/s7-logo.png' },
  { name: 'Parceiro 1', logo: '/assets/brand/s7-logo.png' },
]

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-background border-t border-background/10">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center space-y-2">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">CONFIANÇA</span>
          <h2 className="text-2xl font-black tracking-tighter uppercase text-foreground">
            Quem confia no nosso olhar
          </h2>
        </div>
      </div>

      {/* Container do Carrossel Infinito */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
          {/* Duplicamos a lista para o efeito ser infinito e contínuo */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="mx-12 w-32 md:w-48 flex justify-center items-center">
              <div key={index} className="mx-12 w-32 md:w-48 flex justify-center items-center">
                <div className="relative h-12 md:h-16 w-full grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain" // Garante que a logo não distorça
                  /> 
                </div>
              </div>
            </div>
          ))}
          
        </div>

        {/* Gradientes laterais para suavizar a entrada/saída dos logos */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}