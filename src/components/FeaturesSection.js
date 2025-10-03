import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Premium Quality',
    desc: 'Handpicked instruments from world-renowned manufacturers. Every piece inspected for perfection.'
  },
  {
    icon: '🚀',
    title: 'Lightning Fast',
    desc: "Express shipping worldwide with secure packaging. Your music can't wait, neither should you."
  },
  {
    icon: '💎',
    title: 'Expert Guidance',
    desc: 'Professional musicians ready to help you find your perfect sound. Free consultations available.'
  },
  {
    icon: '🛡️',
    title: 'Lifetime Warranty',
    desc: 'Comprehensive protection and maintenance services. Your investment, secured forever.'
  }
];

const FeaturesSection = () => (
  <section className="features">
    <h2 className="section-title">WHY CHOOSE US</h2>
    <div className="feature-grid">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <span className="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;