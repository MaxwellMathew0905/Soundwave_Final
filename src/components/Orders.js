
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders).reverse()); // Show newest first
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Processing": return "#f093fb";
      case "Shipped": return "#667eea";
      case "Delivered": return "#4ade80";
      default: return "#fff";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="orders-page">
      <div className="orders-container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-gradient">My Orders</span>
          </h1>
          <p className="page-subtitle">
            {orders.length} {orders.length === 1 ? 'order' : 'orders'} placed
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <p>No orders yet</p>
            <button className="back-btn" onClick={() => navigate("/instruments")}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order.id}</h3>
                    <p className="order-date">Placed on {formatDate(order.orderDate)}</p>
                  </div>
                  <div className="order-status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                    {order.status}
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div className="order-item" key={index}>
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <p className="item-name">{item.name}</p>
                        <p className="item-brand">{item.brand}</p>
                        {item.selectedColor && (
                          <p className="item-color">Color: {item.selectedColor}</p>
                        )}
                      </div>
                      <p className="item-price">{item.price}</p>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="delivery-info">
                    <p className="delivery-label">Estimated Delivery:</p>
                    <p className="delivery-date">{order.estimatedDelivery}</p>
                  </div>
                  <div className="order-total">
                    <span>Total Amount:</span>
                    <span className="total-amount">₹{order.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="shipping-details">
                  <h4>Shipping Address:</h4>
                  <p>{order.customerDetails.fullName}</p>
                  <p>{order.customerDetails.address}</p>
                  <p>{order.customerDetails.city}, {order.customerDetails.state} - {order.customerDetails.pincode}</p>
                  <p>Phone: {order.customerDetails.phone}</p>
                  <p className="payment-method">Payment: {order.customerDetails.paymentMethod}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
