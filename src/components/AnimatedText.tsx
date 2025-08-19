
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  stagger = 0.03,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: '5px' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
