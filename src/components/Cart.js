import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(null);

  const formatPrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, "")).toFixed(2);

  // ✅ FIXED: Only show empty cart if no success message
  if (cartItems.length === 0 && !orderSuccess) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <svg className="cart-empty-icon" width="120" height="120" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 2L7.17 4H3C2.45 4 2 4.45 2 5C2 5.55 2.45 6 3 6H4L7.6 13.59L6.25 16.04C5.52 17.37 6.48 19 8 19H19C19.55 19 20 18.55 20 18C20 17.45 19.55 17 19 17H8L9.1 15H16.55C17.3 15 17.96 14.59 18.3 13.97L21.88 7.48C22.25 6.82 21.77 6 21.01 6H8.31L7.17 4H9C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="cart-empty-title">Your Cart is Empty</h1>
          <p className="cart-empty-text">Add some instruments to get started!</p>
          <button onClick={() => navigate("/instruments")} className="cart-empty-btn">
            Browse Instruments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        {/* Header */}
        <div className="cart-header">
          <button onClick={() => navigate("/instruments")} className="cart-back-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3L3 8L8 13M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Continue Shopping
          </button>
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-subtitle">{cartItems.length} item(s) in your cart</p>
        </div>

        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items-section">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-content">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <div>
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-category">{item.instrumentName}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item-remove"
                        title="Remove from cart"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="cart-item-footer">
                      <div className="cart-item-quantity">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="cart-qty-btn"
                        >
                          -
                        </button>
                        <span className="cart-qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="cart-qty-btn"
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-item-price-section">
                        <div className="cart-item-total-price">
                          ₹{(formatPrice(item.price) * item.quantity).toFixed(2)}
                        </div>
                        <div className="cart-item-unit-price">
                          ₹{formatPrice(item.price)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={clearCart} className="cart-clear-btn">
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="cart-summary-section">
            <div className="cart-summary-card">
              <h2 className="cart-summary-title">Order Summary</h2>

              <div className="cart-summary-details">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Shipping</span>
                  <span className="cart-free-text">Free</span>
                </div>
                <div className="cart-summary-row">
                  <span>Tax (18%)</span>
                  <span>₹{(getCartTotal() * 0.18).toFixed(2)}</span>
                </div>
                <div className="cart-summary-divider"></div>
                <div className="cart-summary-total">
                  <span>Total</span>
                  <span className="cart-total-amount">₹{(getCartTotal() * 1.18).toFixed(2)}</span>
                </div>
              </div>

              <button onClick={() => setShowPaymentModal(true)} className="cart-checkout-btn">
                Pay Now
              </button>

              <button onClick={() => navigate("/instruments")} className="cart-continue-btn">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h2>Select Payment Method</h2>

            <div className="payment-options">
              {["UPI", "Credit Card", "Cash on Delivery"].map(
                (method) => (
                  <label key={method} className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={selectedPayment === method}
                      onChange={() => setSelectedPayment(method)}
                    />
                    {method}
                  </label>
                )
              )}
            </div>

            <div className="payment-modal-actions">
              <button
                onClick={() => {
                  if (!selectedPayment) {
                    alert("Please select a payment method!");
                    return;
                  }

                  setShowPaymentModal(false);
                  setOrderSuccess({
                    method: selectedPayment,
                    total: (getCartTotal() * 1.18).toFixed(2),
                  });

                  clearCart();
                }}
                className="payment-confirm-btn"
              >
                Confirm & Pay
              </button>

              <button onClick={() => setShowPaymentModal(false)} className="payment-cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Overlay */}
      {orderSuccess && (
        <div className="order-success-overlay">
          <div className="order-success-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="order-success-icon">
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path
                d="M8 12l2.5 2.5L16 9"
                stroke="#ffffffff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>Payment Successful!</h2>
            <p>
              Your order of <strong>₹{orderSuccess.total}</strong> was placed using{" "}
              <strong>{orderSuccess.method}</strong>.
            </p>
            <button
              className="order-success-btn"
              onClick={() => {
                setOrderSuccess(null);
                navigate("/instruments");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
