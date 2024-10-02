import React from 'react';
import { motion } from 'framer-motion'; // For floating and rotating effects

const BallCanvas = ({ icon }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-28 h-28 mx-auto"
      whileHover={{ y: -10 }} // Floating effect on hover
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Circular Shape with Glowing Effect */}
      <motion.div
        className="relative flex items-center justify-center w-full h-full bg-[#915eff]rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
        whileHover={{ rotate: 360 }} // Rotation effect on hover
      >
        {/* Icon inside the circular shape */}
        <img src={icon} alt="tech-icon" className="w-16 h-16 object-contain" />
      </motion.div>
      {/* Glowing effect around the circular shape */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 ease-in-out filter blur-lg hover:opacity-50"
      ></motion.div>
    </motion.div>
  );
};

export default BallCanvas;
