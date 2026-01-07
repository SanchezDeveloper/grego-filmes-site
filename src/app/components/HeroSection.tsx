import Image from 'next/image';
import ButtonLink from './shared/ButtonLink';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

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
          className='hidden dark:block'
          priority
        />
        <Image 
          src="/assets/brand/logopreta.png"
          width={500}
          height={500}
          alt="Enterprise white brand"
          className='block dark:hidden'
          priority
        />

        <div className="flex flex-col text-center my-10 text-2xl gap-2">
          <h2 className="">
            {t('title1')}
          </h2>
          <h2 className="">
            {t('title2')}
          </h2>
        </div>

        <div className="flex gap-2">
          <ButtonLink
            label={t('ctaPortfolio')}
            href="#portfolio"
            className="font-semibold"
          />
          <ButtonLink
            label={t('ctaContact')}
            href="#portfolio"
            className="font-semibold"
          />
        </div>

      </div>
    </section>
  );
}