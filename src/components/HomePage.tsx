
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { useSound } from '../hooks/useSound';
import bootupSound from '../assets/bootup.mp3';

interface HomePageProps {
  onNavigate: () => void;
  onEnableSound: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onEnableSound }) => {
  const { play: playBootup } = useSound(bootupSound, { volume: 0.5 });

  const handleNavigate = () => {
    onEnableSound();
    playBootup();
    setTimeout(onNavigate, 1000); // Delay navigation to allow sound to play
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #0b0c10 0%, #1a1b24 100%)'
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{
          fontSize: '1.5rem',
          color: '#66fcf1',
          fontFamily: 'Roboto Mono, monospace'
        }}
      >
        Frontend Developer & Product Leader
      </motion.p>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 100 }}
        style={{
          fontSize: 'clamp(2.5rem, 10vw, 5rem)',
          margin: '0 0 1rem 0',
          textShadow: '0 0 15px rgba(102, 252, 241, 0.7)',
          letterSpacing: '3px',
        }}
      >
        Yash Tambi
      </motion.h1>
      
      <div className="intro-text-container">
        <AnimatedText
           el="p"
           text="Welcome, traveler. This is my digital realm. An interactive journey through my skills, projects, and experiences awaits."
        />
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 120 }}
        className="start-button"
        onClick={handleNavigate}
      >
        Initiate Journey
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
