import Image from 'next/image';

const niches = [
  {
    title: "GREGO FILMES",
    desc: "CULTURA URBANA, RAP E FUNK.",
    image: "/assets/photos/grego-2.jpg",
    color: "group-hover:text-blue-500"
  },
  {
    title: "REC PRODUÇÕES",
    desc: "SOCIAL MEDIA E BUSINESS.",
    image: "/assets/photos/grego-1.jpg",
    color: "group-hover:text-zinc-400"
  },
  {
    title: "PROJETOS SOCIAIS",
    desc: "FORMAÇÃO E IMPACTO.",
    image: "/assets/photos/grego-4.jpg",
    color: "group-hover:text-green-500"
  }
];

export default function NichesSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-background">
      {niches.map((niche, i) => (
        <div 
          key={i} 
          className="group relative flex-1 overflow-hidden border-b md:border-b-0 md:border-r border-foreground/80 transition-all duration-700 hover:flex-[1.5]"
        >
          {/* Background Image */}
          <Image
            src={niche.image}
            alt={niche.title}
            fill
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 z-10 bg-linear-to-t from-background via-transparent to-transparent">
            <h3 className={`text-2xl md:text-4xl font-foreground italic tracking-tighter transition-colors ${niche.color}`}>
              {niche.title}
            </h3>
            <p className="text-foreground/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-2">
              {niche.desc}
            </p>
            
            {/* CTA Invisível que aparece no hover */}
            <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 mt-4">
              <button className="bg-background text-foreground px-6 py-2 text-xs font-bold uppercase tracking-widest">
                Explorar Nicho
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}