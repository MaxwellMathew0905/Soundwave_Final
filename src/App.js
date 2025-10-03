import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Instruments from './components/Instruments';
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
        <Route
          path="/instruments"
          element={<Instruments onSelectCategory={() => {}} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;