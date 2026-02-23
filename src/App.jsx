import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all your components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Architecture from './components/Architecture';
import FloraFauna from './components/FloraFauna';
import Gallery from './components/Gallery';
import VirtualVaidya from './components/VirtualVaidya';
import AboutProject from './components/AboutProject';
import PageTransition from './components/PageTransition';

// The Homepage sections combined
const Home = () => (
  <>
    <Hero />
    <History />
    <Architecture />
    <FloraFauna />
  </>
);

// We need a sub-component to use the "useLocation" hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/vaidya" element={<PageTransition><VirtualVaidya /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutProject /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-parchment text-basalt font-sans overflow-x-hidden flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        
        <footer className="bg-basalt-dark text-parchment py-8 text-center font-sans border-t border-basalt-light mt-auto">
          <p className="opacity-70">© {new Date().getFullYear()} Sinhagad Fort Heritage. Built with React & Tailwind.</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;