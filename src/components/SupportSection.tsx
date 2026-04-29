
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSupport, IconMail, IconGitHub, IconTwitter, IconChevronRight } from './icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const channels = [
  {
    icon: <IconMail size={28} />,
    title: 'Email',
    description: 'Best for project enquiries, billing questions, and detailed technical requests.',
    action: 'tambiyash@gmail.com',
    href: 'mailto:tambiyash@gmail.com',
    responseTime: 'Response within 24 hours',
  },
  {
    icon: <IconGitHub size={28} />,
    title: 'GitHub Issues',
    description: 'For bugs or questions related to any open-source work I maintain.',
    action: 'github.com/tambiyash',
    href: 'https://github.com/tambiyash',
    responseTime: 'Response within 48 hours',
  },
  {
    icon: <IconTwitter size={28} />,
    title: 'X (Twitter)',
    description: 'Quick questions, general discussions, and public conversation.',
    action: '@TambiYash78',
    href: 'https://x.com/TambiYash78',
    responseTime: 'Response within 48 hours',
  },
];

const faqs = [
  {
    q: 'How do I get started with a project?',
    a: 'Simply send me an email at tambiyash@gmail.com with a brief description of your project. I\'ll respond within 24 hours to set up a discovery call or async scoping session.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'I accept payments via Cashfree and Razorpay (for INR and USD), as well as international bank transfers. All transactions are invoiced and documented.',
  },
  {
    q: 'How long does a code review take?',
    a: 'A standard code review is typically delivered within 3–5 business days, depending on codebase size. Expedited reviews can be arranged for an additional fee.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, I am open to signing a Non-Disclosure Agreement before any engagement. Please include this request in your initial email.',
  },
  {
    q: 'What happens if I need changes after delivery?',
    a: 'All engagements include a defined revision window and a 14-day post-delivery support period for bugs. Out-of-scope additions are quoted separately.',
  },
  {
    q: 'Can you work with my existing team?',
    a: 'Absolutely. I am comfortable collaborating via GitHub, Jira, Linear, Slack, or any workflow your team uses.',
  },
  {
    q: 'Do you provide refunds?',
    a: 'Please refer to the Refund Policy in the Terms & Conditions page for full details. In short: deposits are non-refundable once work begins, but unused portions are returned for cancelled projects.',
  },
];

const SupportSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <h1>
          <IconSupport size={28} style={{ display: 'inline', marginRight: '0.75rem', verticalAlign: 'middle' }} />
          Support_
        </h1>
        <p style={{ maxWidth: '65ch' }}>
          Have a question, issue, or just want to talk through an idea? Here are the best ways to reach me,
          along with answers to the most common questions.
        </p>
      </motion.div>

      <motion.h2 variants={itemVariants}>Contact Channels</motion.h2>
      <motion.div className="support-channels" variants={containerVariants}>
        {channels.map((ch) => (
          <motion.a
            key={ch.title}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="support-channel-card"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="support-channel-icon">{ch.icon}</div>
            <div className="support-channel-body">
              <strong>{ch.title}</strong>
              <p>{ch.description}</p>
              <span className="support-channel-action">{ch.action}</span>
            </div>
            <div className="support-response-badge">{ch.responseTime}</div>
          </motion.a>
        ))}
      </motion.div>

      <motion.h2 variants={itemVariants}>Frequently Asked Questions</motion.h2>
      <motion.div className="faq-list" variants={containerVariants}>
        {faqs.map((faq, idx) => (
          <motion.div key={idx} className="faq-item" variants={itemVariants}>
            <button
              className={`faq-question ${openFaq === idx ? 'faq-question--open' : ''}`}
              onClick={() => toggle(idx)}
              aria-expanded={openFaq === idx}
            >
              <span>{faq.q}</span>
              <motion.span
                animate={{ rotate: openFaq === idx ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexShrink: 0 }}
              >
                <IconChevronRight size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openFaq === idx && (
                <motion.div
                  className="faq-answer"
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SupportSection;
