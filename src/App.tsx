import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import SolutionsByArea from './components/SolutionsByArea';
import ResultsSection from './components/ResultsSection';
import MethodologySection from './components/MethodologySection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import CredibilitySection from './components/CredibilitySection';
import UrgencySection from './components/UrgencySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <SolutionsByArea />
      <ResultsSection />
      <MethodologySection />
      <AboutSection />
      <FAQSection />
      <CredibilitySection />
      <UrgencySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;