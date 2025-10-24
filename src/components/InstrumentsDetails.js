import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instruments from "../data/InstrumentsData";
import "./InstrumentsDetails.css";

function InstrumentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    if (!notification) return;
    const t = setTimeout(() => setNotification(null), 4000);
    return () => clearTimeout(t);
  }, [notification]);

  const instrument = instruments.find(item => item.id.toString() === id);

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

  const getYouTubeVideoId = (url) => {
    // ... (getYouTubeVideoId function - unchanged)
    if (!url || url.includes("xxxx")) {
      const defaultVideos = { Sitar: "AP85ueNGATw", Harmonium: "5bGTyoG8dGE", Tabla: "Pz4_kpnj3Qw", Shenai: "wF75kBOhKFw", Santoor: "HM-KWJ6P2Do", Flute: "SXhVmi-3BF0" };
      return defaultVideos[instrument.name] || "dQw4w9WgXcQ";
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleAddToCart = (model) => {
    // ... (handleAddToCart function using localStorage - unchanged)
    const cartItem = { id: `${instrument.id}-${model.id}`, name: model.name, price: model.price, image: model.image, brand: model.brand || instrument.name };
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = currentCart.some(item => item.id === cartItem.id);
    if (itemExists) {
      setNotification(`${model.name} is already in the cart!`);
    } else {
      const updatedCart = [...currentCart, cartItem];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setNotification(`${model.name} added to cart!`);
    }
  };

  const handleViewDetails = (model) => {
    setSelectedModel(model);
  };

  const closeModal = () => {
    setSelectedModel(null);
  };

  const videoId = instrument.models && instrument.models.length > 0 && instrument.models[0].demo
    ? getYouTubeVideoId(instrument.models[0].demo)
    : getYouTubeVideoId(null);

  return (
    <div className="details-page">
      <div className="details-wrapper">
        {notification && (
          // ... (Notification JSX - unchanged)
          <div className="details-notification" role="status" aria-live="polite" style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, background: "linear-gradient(135deg,#667eea,#764ba2)", color: "#fff", padding: "12px 18px", borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.6)", fontWeight: 600 }}>
            {notification}
          </div>
        )}

        {selectedModel && (
          // ... (Modal JSX - unchanged)
          <div className="details-modal-overlay" onClick={closeModal} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000, padding: "20px", backdropFilter: "blur(5px)" }}>
            <div className="details-modal-content" onClick={(e) => e.stopPropagation()} style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: "20px", padding: "40px", maxWidth: "800px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <button onClick={closeModal} style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "35px", height: "35px", cursor: "pointer", color: "#fff", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", fontWeight: "300" }} onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}>×</button>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "start" }}>
                {/* Left Column */}
                <div>
                  <img src={selectedModel.image} alt={selectedModel.name} style={{ width: "100%", height: "auto", borderRadius: "15px", marginBottom: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }} />
                  <div style={{ fontSize: "36px", fontWeight: "bold", color: "#667eea", marginBottom: "15px", textAlign: "center" }}>{selectedModel.price}</div>
                  {selectedModel.demo && (<a href={selectedModel.demo} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", padding: "12px 24px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "#fff", textDecoration: "none", borderRadius: "10px", fontWeight: "600", textAlign: "center", transition: "transform 0.2s ease" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}><svg style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5V19L19 12L8 5Z"/></svg> Watch Demo Video</a>)}
                </div>
                {/* Right Column */}
                <div>
                  <h2 style={{ color: "#fff", fontSize: "32px", marginBottom: "10px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{selectedModel.name}</h2>
                  <div style={{ background: "rgba(102, 126, 234, 0.1)", padding: "8px 16px", borderRadius: "8px", display: "inline-block", marginBottom: "20px", fontSize: "14px", color: "#667eea", fontWeight: "600" }}>Model: {selectedModel.modelNumber || 'N/A'}</div>
                  <div style={{ marginTop: "25px" }}>
                    <div style={{ display: "grid", gap: "15px" }}>
                      <DetailRow label="Type" value={selectedModel.type} />
                      <DetailRow label="Material" value={selectedModel.material} />
                      {selectedModel.strings && <DetailRow label="Strings" value={selectedModel.strings} />}
                      {selectedModel.keys && <DetailRow label="Keys" value={selectedModel.keys} />}
                      {selectedModel.reeds && <DetailRow label="Reeds" value={selectedModel.reeds} />}
                      {selectedModel.drumhead && <DetailRow label="Drumhead" value={selectedModel.drumhead} />}
                      {selectedModel.holes && <DetailRow label="Holes" value={selectedModel.holes} />}
                      {selectedModel.key && <DetailRow label="Key" value={selectedModel.key} />}
                      {selectedModel.weight && <DetailRow label="Weight" value={selectedModel.weight} />}
                      {selectedModel.length && <DetailRow label="Length" value={selectedModel.length} />}
                      {selectedModel.dimensions && <DetailRow label="Dimensions" value={selectedModel.dimensions} />}
                      {selectedModel.finish && <DetailRow label="Finish" value={selectedModel.finish} />}
                      {selectedModel.tuning && <DetailRow label="Tuning" value={selectedModel.tuning} />}
                    </div>
                    {selectedModel.includes && (<div style={{ marginTop: "25px" }}><h3 style={{ color: "#fff", fontSize: "18px", marginBottom: "12px", fontWeight: "600" }}>What's Included:</h3><p style={{ color: "#a0a0a0", fontSize: "14px", lineHeight: "1.8", background: "rgba(255,255,255,0.05)", padding: "15px", borderRadius: "10px", borderLeft: "3px solid #667eea" }}>{selectedModel.includes}</p></div>)}
                  </div>
                </div>
              </div>
            </div>
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
          {videoId && (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="details-tutorial-link"
            >
              <svg className="details-play-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5V19L19 12L8 5Z"/>
              </svg>
              Watch {instrument.name} Tutorial
            </a>
          )}
        </div>

        {/* Models Section */}
        <div className="details-models-section">
          <h2 className="details-section-title">Available Models</h2>
          <div className="details-models-grid">
            {instrument.models && instrument.models.map((model, index) => (
              <div className="details-model-card" key={model.id}>
                <div className="details-model-inner">
                  <div className="details-model-image-wrapper">
                    <img src={model.image} alt={model.name} className="details-model-img" />
                    <span className="details-model-badge">
                      {index === 0 ? "Popular" : index === 1 ? "Best Value" : "Premium"}
                    </span>
                  </div>
                  <div className="details-model-info">
                    <h3 className="details-model-name">{model.name}</h3>
                    <p className="details-model-desc">
                      {model.description} 
                    </p>
                    <div className="details-model-price">{model.price}</div>
                    <div className="btn-group">
                      <button className="details-add-cart-btn" onClick={() => handleAddToCart(model)}>
                        <svg className="details-cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 2L7.17 4H3C2.45 4 2 4.45 2 5C2 5.55 2.45 6 3 6H4L7.6 13.59L6.25 16.04C5.52 17.37 6.48 19 8 19H19C19.55 19 20 18.55 20 18C20 17.45 19.55 17 19 17H8L9.1 15H16.55C17.3 15 17.96 14.59 18.3 13.97L21.88 7.48C22.25 6.82 21.77 6 21.01 6H8.31L7.17 4H9C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2ZM8 20C6.9 20 6 20.9 6 22C6 23.1 6.9 24 8 24C9.1 24 10 23.1 10 22C10 20.9 9.1 20 8 20ZM18 20C16.9 20 16 20.9 16 22C16 23.1 16.9 24 18 24C19.1 24 20 23.1 20 22C20 20.9 19.1 20 18 20Z" fill="currentColor"/>
                        </svg>
                        Add to Cart
                      </button>
                      <button className="details-add-cart-btn demo-btn" onClick={() => handleViewDetails(model)}>
                        View Details
                      </button>
                    </div>
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

// Helper component for detail rows
function DetailRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", alignItems: "center" }}>
      <span style={{ color: "#a0a0a0", fontWeight: "400", fontSize: "16px" }}>{label}</span>
      <span style={{ color: "#fff", fontWeight: "500", fontSize: "16px", textAlign: "right" }}>{value}</span>
    </div>
  );
}

export default InstrumentDetails;