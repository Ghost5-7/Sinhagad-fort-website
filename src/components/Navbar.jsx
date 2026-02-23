import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-basalt-dark text-parchment py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        <Link to="/" className="text-2xl font-heading text-bhagwa tracking-wide hover:text-parchment transition-colors text-center md:text-left">
          Sinhagad Heritage
        </Link>

        {/* Added the new link here */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-sans font-medium uppercase text-xs md:text-sm tracking-wider">
          <Link to="/" className="hover:text-bhagwa transition-colors duration-300">Home</Link>
          <Link to="/gallery" className="hover:text-bhagwa transition-colors duration-300">Gallery</Link>
          <Link to="/model" className="hover:text-bhagwa transition-colors duration-300">3D Model</Link>
          <Link to="/vaidya" className="hover:text-bhagwa text-regal transition-colors duration-300">Virtual Vaidya</Link>
          <Link to="/about" className="hover:text-bhagwa transition-colors duration-300">Specs</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;