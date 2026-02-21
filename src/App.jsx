import React from 'react';
import Hero from './components/Hero';
import History from './components/History';
import Architecture from './components/Architecture';
import FloraFauna from './components/FloraFauna';

function App() {
  return (
    <main className="min-h-screen bg-parchment text-basalt font-sans">
      <Hero />
      <History />
      <Architecture />
      <FloraFauna />
      
      {/* A simple footer to close out the page */}
      <footer className="bg-basalt-dark text-parchment py-8 text-center font-sans">
        <p className="opacity-70">© {new Date().getFullYear()} Sinhagad Fort Heritage. Built with React & Tailwind.</p>
      </footer>
    </main>
  );
}

export default App;