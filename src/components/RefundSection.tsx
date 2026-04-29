
import React from 'react';
import { motion } from 'framer-motion';
import { IconRefund, IconShield } from './icons';

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

const LAST_UPDATED = '29-04-2026';
const CONTACT_EMAIL = 'tambiyash@gmail.com';

const policies = [
  {
    body: `Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the services have been communicated to the relevant parties and they have initiated the process of delivering them.`,
  },
  {
    body: `YASH TAMBI does not accept cancellation requests for services that have already been fully delivered. However, a refund or re-delivery of the service may be offered if the client establishes that the quality of service delivered was not satisfactory or not as described.`,
  },
  {
    body: `In case of receipt of a substandard or defective service deliverable, please report the same to our Customer Service team. The request will be entertained once the issue has been reviewed and determined accordingly. This should be reported on the same day of receipt of the deliverable. In case you feel that the service received is not as described on the site or as per your expectations, you must bring it to the notice of our customer service on the same day of receiving the deliverable. The Customer Service Team, after looking into your complaint, will take an appropriate decision.`,
  },
  {
    body: `In case of complaints regarding services that come with a service warranty, please refer the issue to our support team directly. In case of any refunds approved by YASH TAMBI, it will take 1–2 business days for the refund to be processed to the end customer.`,
  },
];

const RefundSection: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <h1>
          <IconRefund size={28} style={{ display: 'inline', marginRight: '0.75rem', verticalAlign: 'middle' }} />
          Cancellation & Refund Policy_
        </h1>
        <div className="terms-meta">
          <IconShield size={16} />
          <span>Last updated on {LAST_UPDATED}</span>
        </div>
        <p style={{ maxWidth: '70ch' }}>
          YASH TAMBI believes in helping its customers as far as possible, and has therefore a liberal
          cancellation policy. Under this policy:
        </p>
      </motion.div>

      <motion.div className="refund-policy-list" variants={containerVariants}>
        {policies.map((policy, idx) => (
          <motion.div key={idx} className="refund-policy-item" variants={itemVariants}>
            <div className="refund-policy-bullet" aria-hidden="true">•</div>
            <p>{policy.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="terms-footer-note" variants={itemVariants}>
        For cancellation or refund requests, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </motion.div>
    </motion.div>
  );
};

export default RefundSection;
