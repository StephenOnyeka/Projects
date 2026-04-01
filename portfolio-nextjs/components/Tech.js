import React from 'react';
import { icons } from '@/constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

function Tech() {
  return (
    <motion.div
      id="Tech"
      className="px-6 md:px-12 h-full pt-12 md:max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-12 items-center justify-items-center flex-1">
        {icons.map((icon, index) => (
          <motion.div
            className="text-4xl sm:text-5xl text-white"
            key={index}
            variants={iconVariants}
            whileHover={{
              scale: 1.3,
              rotate: [0, -8, 8, 0],
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Tech;