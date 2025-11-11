import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSectionNew } from './components/HeroSectionNew';
import { PromiseSectionNew } from './components/PromiseSectionNew';
import { ProblemSectionNew } from './components/ProblemSectionNew';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <HeroSectionNew />
      <PromiseSectionNew />
      <ProblemSectionNew />
      <Footer />
    </main>
  );
}
