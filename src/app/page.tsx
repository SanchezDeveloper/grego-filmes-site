import HeroSection from "./components/HeroSection";
import NichesSection from "./components/NichesSection";
import Navbar from "./components/shared/Navbar";
import VerticalShowreel from "./components/VerticalShowreel";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VerticalShowreel />
      <NichesSection />
    </div>
  );
}
