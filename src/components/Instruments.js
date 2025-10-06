import React from "react";
import { useNavigate } from "react-router-dom";
import instruments from "../data/InstrumentsData";
import "./Instruments.css";

function Instruments() {
  const navigate = useNavigate();

  return (
    <div className="instruments-page">
      <div className="instruments-container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-gradient">Our Instruments</span>
          </h1>
          <p className="page-subtitle">Discover the perfect sound for your musical journey</p>
        </div>
        
        <div className="instruments-grid">
          {instruments.map((item, index) => (
            <div 
              className="instrument-card" 
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-gradient-border">
                <div className="card-content">
                  <div className="image-container">
                    <img src={item.image} alt={item.name} className="instrument-image" />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="card-info">
                    <h2 className="instrument-name">{item.name}</h2>
                    <button
                      className="explore-btn"
                      onClick={() => navigate(`/instrument/${item.id}`)}
                    >
                      <span>Explore</span>
                      <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instruments;
