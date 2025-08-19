
import React from 'react';
import { motion } from 'framer-motion';
import { IconCode, IconLayers, IconTerminal, IconUser } from './icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const skillsData = {
  frontend: {
    title: "Frontend Technologies",
    icon: <IconCode className="icon" size={28} />,
    skills: ["React", "React Native", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Tamagui", "SCSS", "shadcn", "TanStack Query"]
  },
  backend: {
    title: "Backend Technologies",
    icon: <IconLayers className="icon" size={28} />,
    skills: ["Node.js", "Express.js", "PostgreSQL", "Drizzle ORM"]
  },
  devops: {
    title: "DevOps & Tools",
    icon: <IconTerminal className="icon" size={28} />,
    skills: ["CI/CD", "Git", "JIRA", "Confluence", "WebSockets", "Render.com", "Apple App Store Connect", "Cursor", "Github Copilot", "OpenAI", "Claude"]
  },
  product: {
    title: "Product & Leadership",
    icon: <IconUser className="icon" size={28} />,
    skills: ["Technical Leadership", "Team Mentoring", "Cross-Functional Collaboration", "Roadmap Planning", "Agile/Scrum", "UX Optimization", "Analytics", "User Interview", "Market Research", "Prioritization Frameworks"]
  }
};

const SkillsSection: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Skillset Core_</motion.h1>
      <motion.p variants={itemVariants}>
        A curated list of technologies and methodologies I specialize in, categorized by domain.
      </motion.p>
      
      <motion.div className="skills-grid" variants={containerVariants}>
        {Object.values(skillsData).map(category => (
          <motion.div key={category.title} className="skill-category" variants={itemVariants}>
            <h2 className="skill-category-title">{category.icon} {category.title}</h2>
            <motion.div 
               className="skill-tags"
               variants={containerVariants}
            >
              {category.skills.map(skill => (
                <motion.div 
                  key={skill} 
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ y: -3, color: '#66fcf1', borderColor: '#66fcf1' }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
