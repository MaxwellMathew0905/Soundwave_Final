import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, from } = location.state || { items: [], from: "" };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[₹,]/g, ''));
      return total + price;
    }, 0);
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.address || !formData.city || !formData.state || 
        !formData.pincode || !formData.paymentMethod) {
      alert("Please fill all fields!");
      return;
    }

    // Create order
    const order = {
      id: Date.now(),
      items: items,
      totalAmount: getTotalPrice(),
      customerDetails: formData,
      orderDate: new Date().toISOString(),
      status: "Processing",
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    };

    // Save to orders
    const savedOrders = localStorage.getItem("orders");
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Remove items from cart if coming from cart
    if (from === "cart") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        const itemIds = items.map(item => item.id);
        const updatedCart = cart.filter(cartItem => !itemIds.includes(cartItem.id));
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }

    alert(`Payment Successful! Order ID: ${order.id}`);
    navigate("/orders");
  };

  if (items.length === 0) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <p className="empty-message">No items to checkout</p>
          <button className="back-btn" onClick={() => navigate("/instruments")}>
            Back to Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-gradient">Checkout</span>
          </h1>
        </div>

        <div className="payment-layout">
          <div className="payment-form-section">
            <form onSubmit={handlePayment} className="payment-form">
              <h2 className="section-heading">Shipping Details</h2>
              
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  rows="3"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit pincode"
                    required
                  />
                </div>
              </div>

              <h2 className="section-heading">Payment Method</h2>
              
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    onChange={handleChange}
                  />
                  <span>UPI</span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit Card"
                    onChange={handleChange}
                  />
                  <span>Credit Card</span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Debit Card"
                    onChange={handleChange}
                  />
                  <span>Debit Card</span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Net Banking"
                    onChange={handleChange}
                  />
                  <span>Net Banking</span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    onChange={handleChange}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              <button type="submit" className="pay-btn">
                Place Order - ₹{getTotalPrice().toLocaleString('en-IN')}
              </button>
            </form>
          </div>

          <div className="order-summary-section">
            <div className="summary-card">
              <h2 className="section-heading">Order Summary</h2>
              
              <div className="order-items">
                {items.map((item, index) => (
                  <div className="summary-item" key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-total">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
                </div>
                <div className="total-row">
                  <span>Shipping:</span>
                  <span className="free">Free</span>
                </div>
                <div className="total-row final">
                  <span>Total:</span>
                  <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;