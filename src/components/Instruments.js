import React from "react";
import { useNavigate } from "react-router-dom";
import instruments from "../data/InstrumentsData";
import "./Instruments.css";

function Instruments() {
  const navigate = useNavigate();

  return (
    <div className="instrument-page">
      <div className="instrument-container">
        <div className="instrument-header">
          <h1 className="instrument-title">
            <span className="instrument-title-gradient">Our Instruments</span>
          </h1>
          <p className="instrument-subtitle">
            Discover the perfect sound for your musical journey
          </p>
        </div>

        <div className="instrument-grid">
          {instruments.map((item, index) => (
            <div
              className="instrument-card"
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="instrument-card-gradient-border">
                <div className="instrument-card-content">
                  <div className="instrument-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="instrument-image"
                    />
                    <div className="instrument-image-overlay"></div>
                  </div>

                  <div className="instrument-card-info">
                    <h2 className="instrument-name">{item.name}</h2>
                    <button
                      className="instrument-explore-btn"
                      onClick={() => navigate(`/instrument/${item.id}`)}
                    >
                      <span>Explore</span>
                      <svg
                        className="btn-arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none" 
                      >
                        <path
                          d="M8 3L13 8L8 13M13 8H3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
