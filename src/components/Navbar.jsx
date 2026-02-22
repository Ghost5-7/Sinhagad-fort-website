import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-basalt-dark text-parchment py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo/Site Title */}
        <Link to="/" className="text-2xl font-heading text-bhagwa tracking-wide hover:text-parchment transition-colors">
          Sinhagad Heritage
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 font-sans font-medium uppercase text-sm tracking-wider">
          <Link to="/" className="hover:text-bhagwa transition-colors duration-300">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-bhagwa transition-colors duration-300">
            Gallery
          </Link>
          <Link to="/vaidya" className="hover:text-bhagwa text-regal transition-colors duration-300">
            Virtual Vaidya
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;