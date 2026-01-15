'use client'

const steps = [
  {
    num: "01",
    title: "Roteiro & Conceito",
    desc: "Analisamos a letra e o beat para criar uma narrativa que reforce a identidade do artista. Não é só gravar, é contar uma história."
  },
  {
    num: "02",
    title: "Direção de Arte",
    desc: "Curadoria de locações, iluminação estilizada e direção de cena para garantir que cada frame pareça um quadro de cinema."
  },
  {
    num: "03",
    title: "Captura de Elite",
    desc: "Uso de câmeras de alta performance e lentes anamórficas para entregar a textura que o Rap e o Funk exigem."
  },
  {
    num: "04",
    title: "Pós-Produção",
    desc: "Color grading agressivo, efeitos visuais (VFX) e montagem rítmica que segue a batida da música."
  }
]

export default function Workflow() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Processo Criativo</span>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mt-2">
            COMO A MÁGICA <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>ACONTECE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 border border-zinc-900 bg-zinc-950/50 hover:border-blue-600 transition-all duration-500 relative overflow-hidden">
              <span className="text-6xl font-black text-zinc-900 absolute -right-2 -top-2 group-hover:text-blue-600/20 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-tighter">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}