import Image from "next/image"

const clips = [
  { id: 1, artist: "MC Exemplo", song: "Vida Louca", thumbnail: "/assets/images/clip-1.jpg" },
  { id: 2, artist: "Rapper X", song: "No Topo", thumbnail: "/assets/images/clip-2.jpg" },
  { id: 3, artist: "MC Exemplo", song: "Vida Louca", thumbnail: "/assets/images/clip-1.jpg" },
  { id: 4, artist: "Rapper X", song: "No Topo", thumbnail: "/assets/images/clip-2.jpg" },
  { id: 5, artist: "MC Exemplo", song: "Vida Louca", thumbnail: "/assets/images/clip-1.jpg" },
  { id: 6, artist: "Rapper X", song: "No Topo", thumbnail: "/assets/images/clip-2.jpg" } // ... mais clipes
]

export function ClipGrid() {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {clips.map((clip) => (
          <div key={clip.id} className="group relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer">
            <Image 
              src={clip.thumbnail} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              alt={clip.artist}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-blue-500 font-black text-xs uppercase">{clip.artist}</span>
              <h3 className="text-white text-xl font-bold uppercase">{clip.song}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}