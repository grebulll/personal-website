import { AboutSection } from './components/templates/AboutSection';
import { HeroSection } from './components/templates/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-salt-white relative overflow-hidden">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
