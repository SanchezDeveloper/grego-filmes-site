import { ClipGrid } from "../components/grego-filmes-components/ClipGrid";
import GregoHero from "../components/grego-filmes-components/GregoHero";
import TechSpec from "../components/grego-filmes-components/TechSpec";
import Workflow from "../components/grego-filmes-components/WorkFlow";


export default function GregoPage() {
  return (
    <main>
      <GregoHero />
      <ClipGrid />
      <Workflow />
      <TechSpec />
      {/* Outras seções específicas aqui */}
    </main>
  );
}