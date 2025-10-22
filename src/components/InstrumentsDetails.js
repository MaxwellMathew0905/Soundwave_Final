import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";  
import instruments from "../data/InstrumentsData";
import "./InstrumentsDetails.css";

function InstrumentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!notification) return;
    const t = setTimeout(() => setNotification(null), 4000); // auto-dismiss
    return () => clearTimeout(t);
  }, [notification]);
   
  // Find the instrument based on ID
  const instrument = instruments.find(item => item.id === parseInt(id));

  // Handle case where instrument doesn't exist
  if (!instrument) {
    return (
      <div className="details-page">
        <div className="details-wrapper">
          <button className="details-back-btn" onClick={() => navigate("/instruments")}>
            <svg className="details-back-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3L3 8L8 13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Instruments
          </button>
          <div className="details-header-section">
            <h1 className="details-main-title">
              <span className="details-title-gradient">Instrument Not Found</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // Extract YouTube video ID from demo URL
  const getYouTubeVideoId = (url) => {
    if (!url || url.includes("xxxx")) {
      const defaultVideos = {
        "Sitar": "AP85ueNGATw",
        "Harmonium": "5bGTyoG8dGE",
        "Tabla": "Pz4_kpnj3Qw",
        "Shenai": "wF75kBOhKFw",
        "Santoor": "HM-KWJ6P2Do",
        "Flute": "SXhVmi-3BF0"
      };
      return defaultVideos[instrument.name] || "dQw4w9WgXcQ";
    }
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // UPDATED: Modified handleAddToCart function
  const handleAddToCart = (model) => {
    const cartItem = {
      id: `${instrument.id}-${model.id}`,
      instrumentId: instrument.id,
      modelId: model.id,
      name: model.name,
      instrumentName: instrument.name,
      price: model.price,
      image: model.image,
      quantity: 1, 
    };
    
    addToCart(cartItem);
    // show an inline notification instead of an alert
    setNotification(`${model.name} added to cart!`);
  };
 
  const videoId = instrument.models && instrument.models.length > 0 
    ? getYouTubeVideoId(instrument.models[0].demo)
    : getYouTubeVideoId(null);

  return (
    <div className="details-page">
      <div className="details-wrapper">
        {notification && (
          <div
            className="details-notification"
            role="status"
            aria-live="polite"
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 9999,
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: 12,
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
              fontWeight: 600,
            }}
          >
            {notification}
          </div>
        )}
        {/* Back Button */}
        <button className="details-back-btn" onClick={() => navigate("/instruments")}>
          <svg className="details-back-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3L3 8L8 13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Instruments
        </button>

        {/* Header Section */}
        <div className="details-header-section">
          <h1 className="details-main-title">
            <span className="details-title-gradient">{instrument.name} Collection</span>
          </h1>
          <p className="details-intro-text">
            {instrument.description}
          </p>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="details-tutorial-link"
          >
            <svg className="details-play-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
            Watch {instrument.name} Tutorial
          </a>
        </div>

        {/* Models Section */}
        <div className="details-models-section">
          <h2 className="details-section-title">Available Models</h2>
          <div className="details-models-grid">
            {instrument.models && instrument.models.map((model, index) => (
              <div className="details-model-card" key={model.id}>
                <div className="details-model-inner">
                  <div className="details-model-image-wrapper">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="details-model-img"
                    />
                    <span className="details-model-badge">
                      {index === 0 ? "Popular" : index === 1 ? "Best Value" : "Premium"}
                    </span>
                  </div>
                  <div className="details-model-info">
                    <h3 className="details-model-name">{model.name}</h3>
                    <p className="details-model-desc">
                      {instrument.description}
                    </p>
                    <div className="details-model-price">{model.price}</div>
                    {/* UPDATED: Changed onClick to pass the model object */}
                    <button 
                      className="details-add-cart-btn"
                      onClick={() => handleAddToCart(model)}
                    >
                      <svg className="details-cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 2L7.17 4H3C2.45 4 2 4.45 2 5C2 5.55 2.45 6 3 6H4L7.6 13.59L6.25 16.04C5.52 17.37 6.48 19 8 19H19C19.55 19 20 18.55 20 18C20 17.45 19.55 17 19 17H8L9.1 15H16.55C17.3 15 17.96 14.59 18.3 13.97L21.88 7.48C22.25 6.82 21.77 6 21.01 6H8.31L7.17 4H9C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2ZM8 20C6.9 20 6 20.9 6 22C6 23.1 6.9 24 8 24C9.1 24 10 23.1 10 22C10 20.9 9.1 20 8 20ZM18 20C16.9 20 16 20.9 16 22C16 23.1 16.9 24 18 24C19.1 24 20 23.1 20 22C20 20.9 19.1 20 18 20Z" fill="currentColor"/>
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstrumentDetails;