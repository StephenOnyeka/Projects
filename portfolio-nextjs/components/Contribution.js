import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cellVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: Math.min(i * 0.002, 0.6), // cap so it doesn't take forever
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contribution = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/contribution');
        if (!response.ok) throw new Error('Failed to fetch stats');
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading)
    return (
      <motion.div
        className="text-white/40 text-sm tracking-widest"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        LOADING CONTRIBUTIONS...
      </motion.div>
    );
  if (error)
    return <div className="text-red-400 text-sm uppercase tracking-widest">ERROR: {error}</div>;
  if (!stats || !stats.contributions) return null;

  const contributionDays = Object.entries(stats.contributions)
    .map(([date, day]) => ({ date, ...day }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const recentContributions = contributionDays.slice(-365);

  return (
    <div className="w-full">
      <motion.div
        className="grid grid-flow-col grid-rows-7 gap-1 md:gap-1.5 overflow-x-auto pb-4 no-scrollbar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {recentContributions.map((day, i) => (
          <motion.div
            key={day.date}
            custom={i}
            variants={cellVariants}
            title={`${day.date}: ${day.contributions} contributions`}
            className="w-2 h-2 md:w-3 md:h-3 rounded-sm"
            whileHover={{ scale: 1.8, transition: { duration: 0.15 } }}
            style={{
              backgroundColor: day.contributions > 0 ? '#60a5fa' : '#1e293b',
              opacity:
                day.contributions > 0
                  ? Math.max(0.2, (day.gitHubLegendLevel + 1) / 5)
                  : 1,
            }}
          />
        ))}
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-8">
        {[
          { label: 'TOTAL', value: stats.totalContributions },
          { label: 'BEST STREAK', value: `${stats.bestStreak} DAYS` },
          { label: 'CURRENT STREAK', value: `${stats.currentStreak} DAYS` },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col"
            custom={i}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-medium text-white mb-1">
              {stat.label}
            </span>
            <span className="text-xl md:text-2xl text-blue-400 font-medium">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contribution;
