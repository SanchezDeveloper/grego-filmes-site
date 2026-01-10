import Image from 'next/image';
import ButtonLink from '../shared/ButtonLink';

export default function HeroSection() {

  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/photos/grego-9.jpg')" }}
    >
      <div className="absolute inset-0 bg-background/60"/>

      <div className="relative z-10 flex flex-col items-center">
        <Image 
          src="/assets/brand/logobranca.png"
          width={500}
          height={500}
          alt="Enterprise white brand"
          className='hidden dark:block w-4/5 max-w-75 md:max-w-125 h-auto'
          priority
        />
        <Image 
          src="/assets/brand/logopreta.png"
          width={500}
          height={500}
          alt="Enterprise white brand"
          className='block dark:hidden w-4/5 max-w-75 md:max-w-125 h-auto'
          priority
        />

        <div className="flex flex-col text-center my-10 text-md font-bold md:text-2xl gap-2">
          <h2 className="">
            Narrativas fortes. Estética de impacto.
          </h2>
          <h2 className="">
            Videoclipes e produções que elevam sua marca.
          </h2>
        </div>

        <div className="flex gap-2">
          <ButtonLink
            label="Ver Portfólio"
            href="#portfolio"
            className="font-semibold"
          />
          <ButtonLink
            label="Fale Conosco"
            href="/contact"
            className="font-semibold"
          />
        </div>

      </div>
    </section>
  );
}