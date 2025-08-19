
import React from 'react';
import { motion } from 'framer-motion';
import { IconLink } from './icons';

import putupImg from '../assets/putup.png';
import toonifyImg from '../assets/toonify.png';
import pypeAnalyticsImg from '../assets/pype-analytics.png';
import pypeImg from '../assets/pype.png';
import imageVividImg from '../assets/image-vivid.png';
import voiceChatImg from '../assets/voice-chat.png';
import LazyImage from './LazyImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const projectsData = [
  {
    title: "Put-up",
    url: "https://put-up.digital",
    img: putupImg,
    description: "A solo-built SaaS product for generating marketing ad creatives in minutes. Create a brand profile, upload product images, and use prompts to generate ads.",
    tags: ["React", "Redux", "Node.js", "Postgres", "Drizzle ORM", "CI-CD", "S3", "OpenAI", "GCP", "Ads-Marketing"],
    imageText: "Put-up",
  },
  {
    title: "Toonify AI",
    img: toonifyImg,
    description: "An iOS app to cartoonify photos into various styles like Ghibli or Pixar. Developed and published to the App Store in 3 weeks.",
    tags: ["React Native", "Zustand", "Node.js", "CI-CD", "Expo/EAS", "Apple Store", "OpenAI"],
    imageText: "Toonify AI",
    status: "Currently unavailable on the App Store",
  },
  {
    title: "Pypestream Analytics",
    url: "https://pypestream.com",
    img: pypeAnalyticsImg,
    description: "Laid the foundation for the analytics platform, from reusable components to dashboards with complex data visualizations.",
    tags: ["React", "Redux", "GraphQL", "Typescript", "Tailwind", "D3.js", "Chart.js", "Posthog"],
    imageText: "Pypestream",
  },
  {
    title: "Pype Conversational UI",
    url: "https://www.pypestream.com/#platform",
    img: pypeImg,
    description: "Led the refactor and reskin for an updated conversational UI, delivering real-time engagement while maintaining journey context.",
    tags: ["React", "Redux", "styled-components", "Websockets", "Storybook", "WCAG"],
    imageText: "Pype UI",
  },
  {
    title: "ImageVivid",
    url: "https://image-vivid.vercel.app",
    img: imageVividImg,
    description: "A web application to generate vivid images from AI prompts, built to experiment with the latest AI image models.",
    tags: ["Next.js", "Vercel", "AI", "Image Generation"],
    imageText: "ImageVivid",
  },
  {
    title: "AI Voice Chat",
    url: "https://energent-voice-chat.vercel.app",
    img: voiceChatImg,
    description: "A proof-of-concept for real-time voice conversations with AI models like OpenAI and Gemini.",
    tags: ["Next.js", "Vercel", "AI", "OpenAI", "Gemini", "Voice"],
    imageText: "Voice Chat",
  },
  {
    title: "GreenOrbit Intranet",
    description: "Contributed to developing and integrating micro-apps (e.g., Calendar, Polls, CMS) into a customizable intranet dashboard.",
    tags: ["JavaScript", "HTML/CSS", "Microapps", "CMS"],
    imageText: "GreenOrbit",
    status: "Currently unavailable on the Web",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Project Archives_</motion.h1>
      <motion.p variants={itemVariants}>
        A selection of projects that demonstrate my skills in frontend architecture, full-stack development, and product leadership.
      </motion.p>
      
      <motion.div className="projects-grid" variants={containerVariants}>
        {projectsData.map((project, index) => (
          <motion.div key={index} className="project-card" variants={itemVariants}>
            <div className="project-image-placeholder">
              <LazyImage
                src={project.img || `https://placehold.co/400x180/0b0c10/45a29e?text=${project.imageText.replace(/\s/g, "+")}`}
                alt={`${project.title} placeholder`}
                placeholderSrc={`https://placehold.co/40x18/0b0c10/45a29e?text=${project.imageText.replace(/\s/g, "+")}`}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div className="project-title-container">
                <h3>{project.title}</h3>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label={`Link to ${project.title}`}>
                    <IconLink size={18} />
                  </a>
                )}
              </div>
              {project.status && <p className="project-status">{project.status}</p>}
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <div key={tag} className="project-tag">{tag}</div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
