
import React from 'react'
import { motion } from 'framer-motion'
import { IconGitHub, IconLinkedIn, IconMail, IconResume, IconTwitter } from './icons'

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

const contactLinks = [
    {
        icon: <IconLinkedIn className="icon" />,
        title: "LinkedIn",
        label: "linkedin.com/in/yash-tambi-817667a6/",
        url: "https://www.linkedin.com/in/yash-tambi-817667a6/",
    },
    {
        icon: <IconGitHub className="icon" />,
        title: "GitHub",
        label: "github.com/tambiyash",
        url: "https://github.com/tambiyash",
    },
    {
        icon: <IconMail className="icon" />,
        title: "Email",
        label: "tambiyash@gmail.com",
        url: "mailto:tambiyash@gmail.com",
    },
    {
        icon: <IconTwitter className="icon" />,
        title: "X",
        label: "@TambiYash78",
        url: "https://x.com/TambiYash78",
    },
    {
        icon: <IconResume className="icon" />,
        title: "Resume",
        label: "View or Download my Resume",
        url: "https://drive.google.com/file/d/1LMGu90nOIpWu8VuttNcfWlEmx1Yc4Cat/view?usp=drive_link",
    },
]

const ContactSection: React.FC = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants}>Connection Port_</motion.h1>
            <motion.p variants={itemVariants}>
                Let's connect. Feel free to reach out through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </motion.p>
            
            <motion.div variants={containerVariants} className="contact-grid">
                {contactLinks.map(link => (
                    <motion.a 
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        variants={itemVariants}
                    >
                        {link.icon}
                        <div>
                           <strong>{link.title}</strong>
                           <br />
                           <span>{link.label}</span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ContactSection;
