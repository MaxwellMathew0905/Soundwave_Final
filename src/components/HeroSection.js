import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll('.shape');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .stat-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline id="heroVideo">
          <source src="music.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-video-overlay"></div>
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
      <div className="hero-content">
        <h1>AMPLIFY YOUR PASSION</h1>
        <p className="subtitle">Premium instruments for artists who dare to dream bigger</p>
        <div className="cta-group">
          <button className="cta-button cta-primary" onClick={() => alert('Coming soon!')}>
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;