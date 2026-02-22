import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      // Starts slightly off-screen to the right and transparent
      initial={{ opacity: 0, x: 20 }} 
      // Animates into its normal position
      animate={{ opacity: 1, x: 0 }} 
      // Slides off to the left when the user leaves the page
      exit={{ opacity: 0, x: -20 }} 
      // A quick, buttery-smooth easing curve perfect for mobile
      transition={{ duration: 0.3, ease: "easeInOut" }} 
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;