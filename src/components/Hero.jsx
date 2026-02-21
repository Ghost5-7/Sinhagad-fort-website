import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-basalt">
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Hero Background Image */}
      {/* Tip: Replace this URL with a high-res image of the fort in your public folder later */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sinhagad_Fort_Pune.jpg/1200px-Sinhagad_Fort_Pune.jpg" 
        alt="Sinhagad Fort Aerial View" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-heading text-parchment mb-4 tracking-wide drop-shadow-xl">
          Sinhagad
        </h1>
        <p className="text-xl md:text-2xl font-sans text-parchment/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          The Lion's Fortress. Discover the epic history, towering architecture, and untamed beauty of the Sahyadris.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-3 bg-bhagwa text-basalt-dark font-sans font-bold rounded-sm shadow-lg hover:bg-bhagwa-light transition-colors duration-300 uppercase tracking-wider">
            Explore the History
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-regal text-regal font-sans font-bold rounded-sm hover:bg-regal hover:text-basalt-dark transition-colors duration-300 uppercase tracking-wider shadow-lg">
            Plan Your Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
