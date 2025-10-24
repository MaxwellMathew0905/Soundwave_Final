import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Instruments from './components/Instruments';
import InstrumentsDetails from './components/InstrumentsDetails';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <StatsSection />
              <FeaturesSection />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/instruments"
          element={<Instruments onSelectCategory={() => {}} />}
        />
        <Route
          path="/instrument/:id"
          element={<InstrumentsDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;