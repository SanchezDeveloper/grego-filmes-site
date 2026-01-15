import AboutHome from "./components/home-components/AboutHome";
import HeroSection from "./components/home-components/HeroSection";
import NichesSection from "./components/home-components/NichesSection";
import VerticalShowreel from "./components/home-components/VerticalShowreel";
import PortfolioHighlight from "./components/home-components/PortfolioHighlight";
import PartnersMarquee from "./components/home-components/PartnersMarquee";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <VerticalShowreel />
      <NichesSection />
      <AboutHome />
      <PortfolioHighlight />
      <PartnersMarquee />
    </div>
  );
}
