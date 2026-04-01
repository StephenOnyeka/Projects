import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06 + 0.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Connect = () => {
  const words = ["Let's", "connect"];

  const contacts = [
    { label: "+234 9162342603", href: "#" },
    { label: "ejeanobionyeka@gmail.com", href: "#" },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stephen-onyeka/" },
    { label: "GitHub", href: "https://github.com/StephenOnyeka/" },
    { label: "X (Twitter)", href: "https://twitter.com/DonMizzy10" },
    { label: "WhatsApp", href: "https://wa.me/09162342603" },
    { label: "Email", href: "mailto:ejeanobionyeka@gmail.com" },
  ];

  return (
    <div className="w-full flex justify-center mt-20 md:mt-32">
      <div className="w-full">
        {/* Animated heading — word by word */}
        <motion.h1
          className="text-[6rem] sm:text-[8rem] md:text-[12rem] leading-[0.80] font-semibold text-white tracking-tighter mb-20 md:mb-32 -ml-2"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.2em]"
              variants={wordVariants}
            >
              {i === 0 ? (
                <>
                  {word}
                  <br />
                </>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-8 text-[10px] md:text-[12px] tracking-[0.2em] font-medium uppercase text-white">
          {/* Contact info */}
          <div className="flex flex-wrap gap-8 lowercase">
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  href={c.href}
                  className="hover:opacity-60 transition-opacity block"
                  whileHover={{ y: -2 }}
                >
                  {c.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {socials.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3, opacity: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity block"
                >
                  {s.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
