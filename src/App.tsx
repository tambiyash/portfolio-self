
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { useSound } from './hooks/useSound';
import backgroundMusic from './assets/background.mp3';

// Import Components
import HomePage from './components/HomePage';
import HubPage from './components/HubPage';
import Layout from './components/Layout';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AccoladesSection from './components/AccoladesSection';
import PricingSection from './components/PricingSection';
import TermsSection from './components/TermsSection';
import SupportSection from './components/SupportSection';
import RefundSection from './components/RefundSection';

// Define Page IDs
type Page = 'home' | 'hub' | 'about' | 'skills' | 'projects' | 'contact' | 'accolades' | 'pricing' | 'terms' | 'support' | 'refund';

const VALID_PAGES: Page[] = ['home', 'hub', 'about', 'skills', 'projects', 'contact', 'accolades', 'pricing', 'terms', 'support', 'refund'];

const hashToPage = (): Page => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase() as Page;
  return VALID_PAGES.includes(hash) ? hash : 'home';
};

const pageToHash = (page: Page) => {
  if (page === 'home') return '#/';
  return `#/${page}`;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(hashToPage);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const { play: playBackground, pause: pauseBackground } = useSound(backgroundMusic, { loop: true, volume: 0.3 });

  // Sync hash → state (browser back/forward)
  useEffect(() => {
    const onHashChange = () => setCurrentPage(hashToPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home' && isSoundEnabled) {
      playBackground();
    } else {
      pauseBackground();
    }
  }, [currentPage, isSoundEnabled, playBackground, pauseBackground]);

  const handleNavigation = (page: Page) => {
    window.location.hash = pageToHash(page);
    // hashchange listener above will call setCurrentPage
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'accolades':
        return <AccoladesSection />;
      case 'pricing':
        return <PricingSection />;
      case 'terms':
        return <TermsSection />;
      case 'support':
        return <SupportSection />;
      case 'refund':
        return <RefundSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        {currentPage === 'home' && (
          <HomePage 
            key="home" 
            onNavigate={() => handleNavigation('hub')} 
            onEnableSound={() => setIsSoundEnabled(true)}
          />
        )}

        {currentPage === 'hub' && (
          <HubPage key="hub" onNavigate={(pageId) => handleNavigation(pageId as Page)} />
        )}

        {['about', 'skills', 'projects', 'accolades', 'contact', 'pricing', 'terms', 'support', 'refund'].includes(currentPage) && (
           <Layout key="content-layout" currentPage={currentPage} onNavigate={(pageId) => handleNavigation(pageId as Page)}>
            <AnimatePresence mode='wait'>
                <motion.div key={currentPage}>
                    {renderContent()}
                </motion.div>
            </AnimatePresence>
           </Layout>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
