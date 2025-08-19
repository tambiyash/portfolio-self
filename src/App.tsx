
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

// Define Page IDs
type Page = 'home' | 'hub' | 'about' | 'skills' | 'projects' | 'contact' | 'accolades';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const { play: playBackground, pause: pauseBackground } = useSound(backgroundMusic, { loop: true, volume: 0.3 });

  useEffect(() => {
    if (currentPage !== 'home' && isSoundEnabled) {
      playBackground();
    } else {
      pauseBackground();
    }
  }, [currentPage, isSoundEnabled, playBackground, pauseBackground]);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
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
      default:
        // This case should ideally not be reached if inside the layout
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

        {['about', 'skills', 'projects', 'accolades', 'contact'].includes(currentPage) && (
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
