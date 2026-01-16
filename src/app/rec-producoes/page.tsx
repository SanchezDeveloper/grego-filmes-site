import PartnersMarquee from "../components/home-components/PartnersMarquee";
import { RecCases } from "../components/rec-producoes-components/RecCases";
import RecHero from "../components/rec-producoes-components/RecHero";
import SocialManagement from "../components/rec-producoes-components/SocialManagement";
import Strategy from "../components/rec-producoes-components/Strategy";
import ButtonLink from "../components/shared/ButtonLink";

export default function Home() {
  return (
    <div>
      <RecHero />
      <PartnersMarquee />
      <Strategy />
      <SocialManagement />
      <RecCases />
      <section className="py-20 bg-blue-600 text-foreground text-center">
        <h2 className="text-4xl font-background uppercase italic mb-6">Pronto para o próximo nível?</h2>
        <ButtonLink 
        label="Falar com Especialista"
        href="#portfolio"
        className="font-semibold bg-background"
      />
      </section>
      
    </div>
  )
}