
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from './icons';
import claudioImg from '../assets/claudio.jpeg';
import richardImg from '../assets/richard.jpeg';
import nourImg from '../assets/nour.jpeg';
import abhishekImg from '../assets/thorat.jpeg';
import LazyImage from './LazyImage';

const testimonials = [
  {
    quote: "Yash truly stepped up to the challenge at Leap - Operating with a very high degree of uncertainty he delivered results and took ownership of projects end to end. Both as an engineer and product thinker, I'm sure he'll thrive no matter what he does next.",
    author: "Claudio Fuentes",
    title: "Founder - Leap AI",
    image: claudioImg
  },
  {
    quote: "Yash is a very talented and highly productive product developer and team leader. He is passionate about technology and understands the inner workings of organizations... He grew from a junior product developer to an overall product Manager, managing a team and delivering great outcomes. He is dependable and very reliable.",
    author: "Richard Smullen",
    title: "CEO - Pypestream",
    image: richardImg
  },
  {
    quote: "He seamlessly balanced leadership and hands-on development, ensuring smooth sprints, clear priorities, and strong collaboration. His technical expertise and problem-solving skills made a significant impact on our team’s success. Any team would be lucky to have him!",
    author: "Nour Sammour",
    title: "Full-Stack Developer - Pypestream",
    image: nourImg
  },
  {
    quote: "I had the privilege of working with Yash across multiple companies and roles... His versatility truly stood out as he successfully transitioned from engineering to product ownership.",
    author: "Abhishek Thorat",
    title: "Staff Engineer Frontend",
    image: abhishekImg
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const AccoladesSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex = (page % testimonials.length + testimonials.length) % testimonials.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h1>Accolades_</h1>
      <p>Testimonials from colleagues and leaders I've had the pleasure to work with.</p>

      <div className="accolades-carousel-container">
        <div className="accolade-card-area">
            <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
                }}
                className="accolade-card"
            >
                <p className="accolade-quote">"{testimonials[testimonialIndex].quote}"</p>
                <div className="accolade-author">
                    <div className="author-details">
                        <h4>{testimonials[testimonialIndex].author}</h4>
                        <span>{testimonials[testimonialIndex].title}</span>
                    </div>
                    <div className="author-image-placeholder">
                        <LazyImage
                            src={testimonials[testimonialIndex].image}
                            alt={testimonials[testimonialIndex].author}
                            placeholderSrc={`https://placehold.co/80x80/0b0c10/66fcf1?text=${testimonials[testimonialIndex].author.replace(/\s/g, "+")}`}
                        />
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>
        
        <div className="accolade-nav">
            <button className="prev" onClick={() => paginate(-1)}>
                <IconChevronLeft size={24} />
            </button>
            <div className="accolade-dots">
                {testimonials.map((_, i) => (
                    <div key={i} className={`dot ${i === testimonialIndex ? 'active' : ''}`} />
                ))}
            </div>
            <button className="next" onClick={() => paginate(1)}>
                <IconChevronRight size={24} />
            </button>
        </div>

      </div>
    </motion.div>
  );
};

export default AccoladesSection;
