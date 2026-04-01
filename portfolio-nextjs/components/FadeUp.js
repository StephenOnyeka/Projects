import React from 'react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, direction = "up", amount = 0.2, className = "" }) => {
  const directionMap = {
    up:    { y: 40,  x: 0   },
    down:  { y: -40, x: 0   },
    left:  { y: 0,  x: 40  },
    right: { y: 0,  x: -40 },
  };
  const offset = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
