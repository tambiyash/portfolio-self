
import React from 'react';
import { motion } from 'framer-motion';
import type { ForwardRefComponent, HTMLMotionProps } from 'framer-motion';
import { IconExperience, IconEducation, IconCertification } from './icons';
import LazyImage from './LazyImage';
import yashImg from '../assets/yash.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const experienceData = [
    {
        date: "June 2025 - Present",
        title: "Frontend Architect",
        company: "Persistent Systems",
        points: [
            "Led migration of an Ember.js application to React for a Cyber Security client.",
            "Architected scalable frontend solutions and set technical standards.",
            "Collaborated with cross-functional teams to define technical roadmaps."
        ]
    },
    {
        date: "April 2025 - June 2025",
        title: "Founding Engineer",
        company: "Leap AI",
        points: [
            "Spearheaded development of 'Toonify AI' iOS app from concept to deployment.",
            "Built frontend with React Native, Tamagui; backend with Node.js, PostgreSQL.",
            "Established CI/CD pipelines for automated deployments to Apple App Store."
        ]
    },
    {
        date: "Jan 2023 - Feb 2025",
        title: "Product Owner",
        company: "Pypestream",
        points: [
            "Drove product vision, resulting in a 35% increase in CSAT scores.",
            "Enhanced user engagement by 22% through analysis of user feedback.",
            "Managed feature lifecycle for initiatives like Voice-Assist and Dynamic Translation."
        ]
    },
    {
        date: "Sep 2019 - Dec 2022",
        title: "Lead Frontend Developer",
        company: "Pypestream",
        points: [
            "Architected a universal UI component library using React and TypeScript.",
            "Mentored 5+ junior developers and led a team of 3 on the chatbot product.",
            "Enhanced CI/CD workflows, integrating build, lint, and testing processes."
        ]
    },
    {
        date: "Oct 2017 - Aug 2019",
        title: "Frontend Developer",
        company: "Effective Digital",
        points: [
            "Contributed to new integrations in the intranet dashboard product suite (GreenOrbit).",
            "Developed and integrated new microapps like Calendar, Polls, and CMS."
        ]
    }
];

const AboutSection: React.FC = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants}>Identity Matrix_</motion.h1>

            <motion.div variants={itemVariants} className="profile-grid">
                <div style={{ flex: 1 }}>
                    <p style={{marginTop: 0, fontSize: '1.2rem', color: '#fff'}}>
                        Highly accomplished and innovative <span style={{color: '#66fcf1'}}>Engineering + Product Leader</span> with 10 years of extensive experience in software development and product leadership, specializing in frontend architecture, UI/UX engineering, and full-stack development.
                    </p>
                    <p>
                        Proven expertise in React, TypeScript, Node.js, and CI/CD, with a strong track record of driving technical innovation, mentoring high-performing teams, and delivering high-impact solutions in SaaS and AI applications. Adept at migrating legacy systems, optimizing user experiences, and leading end-to-end product development from conception to launch and iteration.
                    </p>
                </div>
                <motion.div 
                    className="profile-image-placeholder"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <LazyImage
                        src={yashImg}
                        alt="Yash Tambi"
                        placeholderSrc="https://placehold.co/250x250/0b0c10/66fcf1?text=YT"
                        className="profile-image"
                    />
                </motion.div>
            </motion.div>

            <motion.h2 variants={itemVariants}><IconExperience/> Experience Log</motion.h2>
            <motion.div variants={itemVariants} className="timeline">
                {experienceData.map((job, index) => (
                    <motion.div key={index} className="timeline-item" variants={itemVariants}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">{job.date}</div>
                            <h3 className="timeline-title">{job.title} <span>@ {job.company}</span></h3>
                            <div className="timeline-body">
                                <ul>{job.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.h2 variants={itemVariants}><IconEducation/> Education</motion.h2>
             <motion.div variants={itemVariants} className="info-card">
                <h4>B.Tech - Mechanical Engineering</h4>
                <p style={{margin: '0.25rem 0 0 0'}}>Rajasthan Technical University | June 2010 - May 2014</p>
            </motion.div>

            <motion.h2 variants={itemVariants}><IconCertification/> Certifications</motion.h2>
            <motion.div variants={itemVariants} className="info-card">
                <h4>Product Management Foundations</h4>
                <p style={{margin: '0.25rem 0 0 0'}}>Reforge</p>
            </motion.div>

        </motion.div>
    );
};

export default AboutSection;
