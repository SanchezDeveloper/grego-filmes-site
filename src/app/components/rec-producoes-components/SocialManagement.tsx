'use client'

import { LayoutDashboard, Smartphone, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    title: "Planejamento Estratégico",
    desc: "Criação de cronogramas mensais alinhados aos objetivos de venda e autoridade da marca."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Conteúdo Vertical (Reels/TikTok)",
    desc: "Produção de vídeos curtos dinâmicos que retêm atenção e performam organicamente."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Análise de Métricas",
    desc: "Relatórios mensais de performance para entender o que gera engajamento e conversão real."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Gestão de Comunidade",
    desc: "Direcionamento de tom de voz e interação estratégica para humanizar o perfil da empresa."
  }
]

export default function SocialManagement() {
  return (
    <section className="py-24 bg-background/95 text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: CONTEÚDO VISUAL (MOCKUP) */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Círculo decorativo de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] rounded-full" />
            
            {/* Mockup de Interface de Social Media */}
            <div className="relative w-full max-w-112.5 aspect-9/16 bg-background/90 border border-foreground/10 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-background relative">
                {/* Simulando um Reels da REC sendo assistido */}
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover opacity-60"
                >
                  <source src="/assets/videos/reels-preview.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay de Interface de Rede Social */}
                <div className="absolute inset-x-0 bottom-0 p-6 space-y-3 bg-linear-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600" />
                    <div className="w-24 h-2 bg-foreground/20 rounded" />
                  </div>
                  <div className="w-full h-2 bg-foreground/10 rounded" />
                  <div className="w-2/3 h-2 bg-foreground/10 rounded" />
                </div>
              </div>
            </div>
            
            {/* Card de Métricas Flutuante */}
            <div className="absolute -right-4 top-1/4 bg-foreground p-4 rounded-xl shadow-2xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-background/40 text-[10px] font-bold uppercase tracking-tighter leading-none">Crescimento</p>
                  <p className="text-background/90 font-black text-xl leading-none">+124%</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TEXTO E FEATURES */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Gestão 360º</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                SUA MARCA <br /> EM <span className="text-transparent stroke-foreground" style={{ WebkitTextStroke: `1px gray` }}>EVIDÊNCIA.</span>
              </h2>
              <p className="text-background/90 text-lg leading-relaxed max-w-xl">
                Cuidamos de todas as etapas da sua presença digital. Do roteiro do Reels à análise do Dashboard de resultados.
              </p>
            </div>

            <div className="grid gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="p-4 bg-background/90 rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                    {f.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">{f.title}</h3>
                    <p className="text-background/50 text-sm leading-relaxed max-w-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}