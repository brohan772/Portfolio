import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeProvider } from './context/ThemeContext';
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // After loader finishes, we enable particles with a small delay
    if (!loading) {
      const timer = setTimeout(() => {
        setShowParticles(true);
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader finishLoading={() => setLoading(false)} key="loader" />
        ) : (
          <div className="min-h-screen flex flex-col bg-grey-200 dark:bg-grey-900 text-grey-900 dark:text-white transition-colors duration-300">
            {showParticles && <ParticlesBackground />}
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
              <PageTransition>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
            <ScrollReveal />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
