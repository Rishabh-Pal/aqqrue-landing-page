import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { PromiseSection } from './components/PromiseSection';
import { ProblemSection } from './components/ProblemSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <PromiseSection />
      <ProblemSection />
      <Footer />
    </main>
  );
}
