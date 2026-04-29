
import React from 'react';
import { motion } from 'framer-motion';
import { IconTerms, IconShield } from './icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const EFFECTIVE_DATE = 'April 29, 2026';
const CONTACT_EMAIL = 'tambiyash@gmail.com';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By engaging my services — whether through direct communication, payment, or project initiation — you agree to be bound by these Terms and Conditions. If you do not agree, please do not proceed with any engagement.`,
  },
  {
    title: '2. Services Offered',
    body: `I provide freelance software engineering services including, but not limited to: code review, full-stack development, technical consultation, and architecture design. The specific scope, deliverables, and timelines are agreed upon in writing before work commences.`,
  },
  {
    title: '3. Payments',
    body: `All prices are quoted in USD unless otherwise stated. Payment is accepted via Cashfree, Razorpay, and international bank transfer. A minimum deposit (typically 50% of the agreed amount) is required before work begins. The remaining balance is due upon delivery of the final deliverables. Invoices are issued for every transaction.`,
  },
  {
    title: '4. Refund Policy',
    body: `The initial deposit is non-refundable once work has commenced. If you cancel a project before work begins, the deposit will be refunded in full within 7 business days. If you cancel mid-project, you will be invoiced for work completed up to that point; any excess deposit will be refunded. No refunds are issued for completed deliverables that have been accepted.`,
  },
  {
    title: '5. Revisions',
    body: `Revisions that fall within the originally agreed scope are included. Out-of-scope changes will be quoted separately and require written approval before implementation. The number of revision rounds is specified per engagement.`,
  },
  {
    title: '6. Intellectual Property',
    body: `Upon receipt of full payment, all custom code and deliverables created solely for your project are transferred to you. I retain the right to use the work in a general portfolio capacity (without disclosing confidential business logic) unless a separate NDA is in place. Open-source components included in deliverables remain governed by their respective licences.`,
  },
  {
    title: '7. Confidentiality',
    body: `I treat all project information shared with me as confidential. I will not disclose business logic, proprietary data, or credentials to third parties. If required, a separate Non-Disclosure Agreement (NDA) can be signed prior to engagement.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `My liability is limited to the total amount paid for the specific engagement in question. I am not liable for indirect, incidental, or consequential damages arising from the use or inability to use delivered work. It is your responsibility to test deliverables in a staging environment before deploying to production.`,
  },
  {
    title: '9. Warranties',
    body: `I warrant that all work is performed with professional care and skill. I do not warrant that the deliverables will be free from all defects but will address bugs within the agreed support window at no extra charge. No warranty is provided beyond the stated support period.`,
  },
  {
    title: '10. Governing Law',
    body: `These Terms are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of India.`,
  },
  {
    title: '11. Changes to These Terms',
    body: `I reserve the right to update these Terms at any time. The latest version will always be available on this site. Continued engagement after an update constitutes acceptance of the revised Terms.`,
  },
  {
    title: '12. Contact',
    body: `For questions about these Terms, please reach out at ${CONTACT_EMAIL}.`,
  },
];

const TermsSection: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <h1>
          <IconTerms size={28} style={{ display: 'inline', marginRight: '0.75rem', verticalAlign: 'middle' }} />
          Terms & Conditions_
        </h1>
        <div className="terms-meta">
          <IconShield size={16} />
          <span>Effective date: {EFFECTIVE_DATE}</span>
        </div>
        <p style={{ maxWidth: '70ch' }}>
          Please read these Terms and Conditions carefully before engaging my services. These terms govern all
          freelance engagements, including code reviews and development projects.
        </p>
      </motion.div>

      <motion.div className="terms-body" variants={containerVariants}>
        {sections.map((sec) => (
          <motion.div key={sec.title} className="terms-section" variants={itemVariants}>
            <h3>{sec.title}</h3>
            <p>{sec.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="terms-footer-note" variants={itemVariants}>
        Questions? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </motion.div>
    </motion.div>
  );
};

export default TermsSection;
