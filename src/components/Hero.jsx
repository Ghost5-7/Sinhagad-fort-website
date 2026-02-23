import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-basalt">
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Hero Background Image */}
      <img 
        src="/model.jpeg" // Note: Ensure you have an image named this in your public folder!
        alt="Sinhagad Fort Aerial View" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        
        {/* Animated Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-heading text-parchment mb-4 tracking-wide drop-shadow-xl"
        >
          Sinhagad
        </motion.h1>

        {/* Animated Subtitle (delayed slightly) */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-sans text-parchment/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
        >
          The Lion's Fortress. Discover the epic history, towering architecture, and untamed beauty of the Sahyadris.
        </motion.p>
        
        {/* Animated Call to Action Buttons (delayed even more) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* Scroll Down Link */}
          <a 
            href="#history"
            className="px-8 py-3 bg-bhagwa text-basalt-dark font-sans font-bold rounded-sm shadow-lg hover:bg-bhagwa-light transition-colors duration-300 uppercase tracking-wider inline-block cursor-pointer"
          >
            Explore the History
          </a>
          
          {/* Change Page Link */}
          <Link 
            to="/gallery"
            className="px-8 py-3 bg-transparent border-2 border-regal text-regal font-sans font-bold rounded-sm hover:bg-regal hover:text-basalt-dark transition-colors duration-300 uppercase tracking-wider shadow-lg inline-block cursor-pointer"
          >
            Explore the Fort
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;