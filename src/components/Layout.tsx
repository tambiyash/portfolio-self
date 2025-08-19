
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconUser, IconCode, IconLayers, IconMail, IconBack, IconStar, IconMenu } from './icons';
import { useSound } from '../hooks/useSound';
import clickSound from '../assets/click.mp3';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'about', title: 'About', icon: <IconUser /> },
  { id: 'skills', title: 'Skills', icon: <IconCode /> },
  { id: 'projects', title: 'Projects', icon: <IconLayers /> },
  { id: 'accolades', title: 'Accolades', icon: <IconStar /> },
  { id: 'contact', title: 'Contact', icon: <IconMail /> },
];

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { play: playClick } = useSound(clickSound, { volume: 0.5 });

  const handleNavAndClose = (page: string) => {
    playClick();
    onNavigate(page);
    setSidebarOpen(false);
  };

  return (
    <>
      <motion.div
        className="content-layout"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isSidebarOpen && (
          <button className="mobile-menu-button" onClick={() => setSidebarOpen(true)}>
            <IconMenu />
          </button>
        )}
        <aside className={`sidebar-nav ${isSidebarOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavAndClose('hub')} style={{ marginBottom: '1rem' }}>
            <IconBack size={20} /> Return to Hub
          </button>
          <div className="nav-separator"></div>
          {navItems.map(item => (
            <button
              key={item.id}
              className={currentPage === item.id ? 'active' : ''}
              onClick={() => handleNavAndClose(item.id)}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </aside>
        <main className="main-content">
          {children}
        </main>
      </motion.div>
      <AnimatePresence>
        {isSidebarOpen && (
            <motion.div
                className="sidebar-overlay"
                onClick={() => setSidebarOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
