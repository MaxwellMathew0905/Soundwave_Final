import React from 'react';

const stats = [
  { number: '10K+', label: 'Happy Musicians' },
  { number: '500+', label: 'Instruments' },
  { number: '50+', label: 'Top Brands' },
  { number: '24/7', label: 'Support' },
];

const StatsSection = () => (
  <section className="stats">
    {stats.map((stat, idx) => (
      <div className="stat-item" key={idx}>
        <div className="stat-number">{stat.number}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
  </section>
);

export default StatsSection;