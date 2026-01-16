'use client'

const services = [
  {
    title: "Vídeos Institucionais",
    desc: "Apresente sua estrutura e valores com qualidade cinematográfica para gerar confiança imediata."
  },
  {
    title: "Social Media Ads",
    desc: "Criativos de alta conversão desenhados especificamente para campanhas de tráfego pago (Instagram/TikTok)."
  },
  {
    title: "Gestão de Conteúdo",
    desc: "Planejamento e execução de cronogramas que mantêm sua marca relevante e ativa diariamente."
  },
  {
    title: "Posicionamento de Autoridade",
    desc: "Transformamos especialistas em referências do mercado através de vídeos educativos de alto padrão."
  }
]

export default function Strategy() {
  return (
    <section className="py-24 bg-background text-foreground/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Não é apenas vídeo. <br /> É <span className="text-blue-600">Alavancagem.</span>
          </h2>
          <p className="text-foreground/50 text-lg uppercase font-medium tracking-tight">
            Unimos a estética da Grego Filmes com a inteligência de dados da Rec para criar um funil de vendas visual irresistível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((item, i) => (
            <div key={i} className="flex gap-6 items-start border-l-2 border-foreground pl-8 hover:border-blue-600 transition-colors">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold uppercase tracking-tighter">{item.title}</h3>
                <p className="text-foreground/90 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}