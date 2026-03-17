import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import { DesignSystemPage } from './pages/DesignSystemPage';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.2,  ease: 'easeIn'  } },
};

const HomePage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
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
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/design-system"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <DesignSystemPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
