import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

const ScrollReveal = ({ text }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // offset: ['start 0.9', 'start 0.25']
    offset: ['start 0.8', 'start 0.1']
  });

  const words = text.split(' ');

  return (
    <p 
      ref={element} 
      // className="flex flex-wrap text-[2rem] md:text-[4rem] leading-[1] font-medium md:font-semibold text-white"
      className="flex flex-wrap text-[2rem] md:text-[4rem] leading-[1] font-medium md:font-semibold text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  // const opacity = useTransform(progress, range, [0.2, 1]);
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollReveal;
