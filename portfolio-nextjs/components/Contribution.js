import React, { useState, useEffect } from 'react';

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

  if (loading) return <div className="text-white/40 text-sm tracking-widest animate-pulse">LOADING CONTRIBUTIONS...</div>;
  if (error) return <div className="text-red-400 text-sm uppercase tracking-widest">ERROR: {error}</div>;
  if (!stats || !stats.contributions) return null;

  // Convert contributions object to an array of days
  const contributionDays = Object.entries(stats.contributions).map(([date, day]) => ({
    date,
    ...day,
  })).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Take the last 365 days or however many are returned
  const recentContributions = contributionDays.slice(-365);

  return (
    <div className="w-full">
      <div className="grid grid-flow-col grid-rows-7 gap-1 md:gap-1.5 overflow-x-auto pb-4 no-scrollbar">
        {recentContributions.map((day) => (
          <div
            key={day.date}
            title={`${day.date}: ${day.contributions} contributions`}
            className="w-2 h-2 md:w-3 md:h-3 rounded-sm transition-all duration-300 hover:scale-125"
            style={{
              backgroundColor: day.contributions > 0 ? '#60a5fa' : '#1e293b', // blue-400 or slate-800
              opacity: day.contributions > 0 ? Math.max(0.2, (day.gitHubLegendLevel + 1) / 5) : 1,
            }}
          />
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap gap-8">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-medium text-white mb-1">TOTAL</span>
          <span className="text-xl md:text-2xl text-blue-400 font-medium">{stats.totalContributions}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-medium text-white mb-1">BEST STREAK</span>
          <span className="text-xl md:text-2xl text-blue-400 font-medium">{stats.bestStreak} DAYS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-medium text-white mb-1">CURRENT STREAK</span>
          <span className="text-xl md:text-2xl text-blue-400 font-medium">{stats.currentStreak} DAYS</span>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
