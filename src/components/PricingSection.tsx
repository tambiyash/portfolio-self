
import React from 'react';
import { motion } from 'framer-motion';
import { IconPricing, IconCode, IconLayers, IconCheck, IconZap, IconMail } from './icons';

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

const pricingTiers = [
  {
    icon: <IconCode size={32} />,
    title: 'Code Review',
    tagline: 'Ship better code with confidence',
    startingFrom: '$50',
    unit: 'per review',
    description:
      'In-depth analysis of your codebase — architecture, security, performance, and maintainability. Get actionable feedback from a senior engineer.',
    features: [
      'Architecture & design pattern audit',
      'Security vulnerability checks',
      'Performance bottleneck identification',
      'Readability & maintainability review',
      'Written report with recommendations',
      'One follow-up Q&A session',
    ],
    highlight: false,
    cta: 'Request a Review',
  },
  {
    icon: <IconLayers size={32} />,
    title: 'Development',
    tagline: 'Turn ideas into production-ready products',
    startingFrom: '$100',
    unit: 'per milestone',
    description:
      'Full-stack development tailored to your product vision. From MVPs to feature expansions — clean code, scalable systems, on-time delivery.',
    features: [
      'Requirement discovery & planning',
      'Full-stack implementation (React, Node, etc.)',
      'REST / GraphQL API design & development',
      'Database design & optimisation',
      'CI/CD pipeline setup',
      'Post-delivery support (14 days)',
    ],
    highlight: true,
    cta: 'Start a Project',
  },
];

const paymentNote =
  'Secure payments accepted via Cashfree, Razorpay, and international transfers. Invoices provided for all engagements.';

const PricingSection: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <h1>
          <IconPricing size={28} style={{ display: 'inline', marginRight: '0.75rem', verticalAlign: 'middle' }} />
          Services & Pricing_
        </h1>
        <p style={{ maxWidth: '65ch' }}>
          Transparent, value-driven pricing for engineering services. Every engagement is scoped to your goals —
          no hidden fees, no bloated retainers.
        </p>
      </motion.div>

      <motion.div className="pricing-grid" variants={containerVariants}>
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.title}
            className={`pricing-card ${tier.highlight ? 'pricing-card--featured' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            {tier.highlight && (
              <div className="pricing-badge">
                <IconZap size={14} /> Most Popular
              </div>
            )}
            <div className="pricing-card-icon">{tier.icon}</div>
            <h3>{tier.title}</h3>
            <p className="pricing-tagline">{tier.tagline}</p>
            <div className="pricing-amount">
              <span className="pricing-from">Starting from</span>
              <span className="pricing-price">{tier.startingFrom}</span>
              <span className="pricing-unit">{tier.unit}</span>
            </div>
            <p className="pricing-description">{tier.description}</p>
            <ul className="pricing-features">
              {tier.features.map((f) => (
                <li key={f}>
                  <IconCheck size={16} className="pricing-check" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:tambiyash@gmail.com"
              className="pricing-cta"
            >
              <IconMail size={16} />
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="pricing-payment-note" variants={itemVariants}>
        <span className="pricing-payment-icon">💳</span>
        {paymentNote}
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>How It Works</h2>
        <div className="pricing-steps">
          {[
            { step: '01', title: 'Reach Out', body: 'Drop me an email with a brief description of what you need. I respond within 24 hours.' },
            { step: '02', title: 'Scope & Quote', body: 'We align on requirements, timeline, and deliverables. You receive a clear, fixed quote.' },
            { step: '03', title: 'Pay & Start', body: 'Secure payment via Cashfree or Razorpay. Work begins immediately after confirmation.' },
            { step: '04', title: 'Deliver & Review', body: 'Deliverables shipped with documentation. Revisions and follow-ups are included.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="pricing-step">
              <div className="pricing-step-number">{step}</div>
              <div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingSection;
