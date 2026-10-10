import React from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  yOffset?: number;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  yOffset = 36,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.65,
        delay: delay > 0 ? delay / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`w-full ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
};
