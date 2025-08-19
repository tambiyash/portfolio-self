
import React from 'react';
import { motion } from 'framer-motion';
import { IconUser, IconCode, IconLayers, IconMail, IconStar } from './icons';
import AnimatedText from './AnimatedText';
import { useSound } from '../hooks/useSound';
import clickSound from '../assets/click.mp3';

interface HubPageProps {
  onNavigate: (page: string) => void;
}

const navNodes = [
  { id: 'about', title: 'Identity Matrix', description: 'Personal data & background', icon: <IconUser /> },
  { id: 'skills', title: 'Skillset Core', description: 'Abilities & technologies', icon: <IconCode /> },
  { id: 'projects', title: 'Project Archives', description: 'Showcase of my work', icon: <IconLayers /> },
  { id: 'accolades', title: 'Accolades', description: 'Testimonials & praise', icon: <IconStar /> },
  { id: 'contact', title: 'Connection Port', description: 'Get in touch with me', icon: <IconMail /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
        duration: 0.5,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  },
};

const HubPage: React.FC<HubPageProps> = ({ onNavigate }) => {
  const { play: playClick } = useSound(clickSound, { volume: 0.5 });

  const handleNavigate = (page: string) => {
    playClick();
    onNavigate(page);
  };

  return (
    <motion.div
      className="hub-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <h1 style={{ fontSize: '3.5rem' }}>Mainframe</h1>
        <AnimatedText text="Select a destination to explore." className="flex-center" />
      </motion.div>

      <motion.div className="hub-grid" variants={containerVariants}>
        {navNodes.map(node => (
          <motion.div
            key={node.id}
            className="nav-node"
            onClick={() => handleNavigate(node.id)}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="nav-node-icon">{node.icon}</div>
            <h3>{node.title}</h3>
            <p>{node.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HubPage;
