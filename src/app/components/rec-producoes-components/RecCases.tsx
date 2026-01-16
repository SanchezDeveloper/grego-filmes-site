import Image from "next/image";

export function RecCases() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-foreground/40 font-bold uppercase text-xs mb-10 tracking-[0.3em]">Cases de Sucesso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de Case */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image src="/assets/cases/empresa-1.jpg" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" alt={"Empresa exemplo"} width={500} height={500} />
            </div>
            <h4 className="font-foreground uppercase text-xl">S7 Portas Automáticas</h4>
            <p className="text-background/60 text-xs uppercase tracking-widest mt-1">Institucional + Gestão de Tráfego</p>
          </div>
        </div>
      </div>
    </section>
  )
}