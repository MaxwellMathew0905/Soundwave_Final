import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import instruments from "../data/InstrumentsData";
import "./InstrumentsDetails.css";

function InstrumentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const instrument = instruments.find((item) => item.id.toString() === id);

  if (!instrument) {
    return (
      <div className="details-page">
        <div className="details-container">
          <h2 className="not-found">Instrument not found</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-gradient">{instrument.name}</span>
          </h1>
          <p className="page-subtitle">{instrument.description}</p>
        </div>

        <div className="models-grid">
          {instrument.models.map((model, index) => (
            <div
              className="model-card"
              key={model.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-gradient-border">
                <div className="card-content">
                  <div className="image-container">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="model-image"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  <div className="card-info">
                    <h2 className="model-name">{model.name}</h2>
                    <p className="model-price">{model.price}</p>
                    <div className="btn-group">
                      <button className="action-btn add-btn">Add to Cart</button>
                      <a
                        href={model.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn demo-btn"
                      >
                        Watch Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Instruments
        </button>
      </div>
    </div>
  );
}

export default InstrumentDetails;