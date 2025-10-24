import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[₹,]/g, ''));
      return total + price;
    }, 0);
  };

  const handleBuyAll = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/payment", { state: { items: cartItems, from: "cart" } });
  };
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-gradient">Shopping Cart</span>
          </h1>
          <p className="page-subtitle">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="back-btn" onClick={() => navigate("/instruments")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-main-layout">
            <div className="cart-items-grid">
              {cartItems.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <div className="card-gradient-border">
                    <div className="card-content">
                      <div className="image-container">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                      </div>

                      <div className="card-info">
                        <h2 className="item-name">{item.name}</h2>
                        <p className="item-brand">{item.brand}</p>
                        <p className="item-price">{item.price}</p>
                        {item.selectedColor && (
                          <p className="item-color">Color: {item.selectedColor}</p>
                        )}

                        <div className="btn-group">
                          <button
                            className="action-btn remove-btn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Total Items:</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Amount:</span>
                  <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
                </div>
                <button className="buy-all-btn" onClick={handleBuyAll}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;