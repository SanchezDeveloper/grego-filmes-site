import AboutHome from "./components/home-components/AboutHome";
import HeroSection from "./components/home-components/HeroSection";
import NichesSection from "./components/home-components/NichesSection";
import Navbar from "./components/shared/Navbar";
import VerticalShowreel from "./components/home-components/VerticalShowreel";
import PortfolioHighlight from "./components/home-components/PortfolioHighlight";
import PartnersMarquee from "./components/home-components/PartnersMarquee";
import Footer from "./components/shared/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VerticalShowreel />
      <NichesSection />
      <AboutHome />
      <PortfolioHighlight />
      <PartnersMarquee />
      <Footer />
    </div>
  );
}
