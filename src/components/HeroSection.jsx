import React, { useState, useEffect } from 'react';
import '../css/HeroSection.css';

const images = [
  "/scrollimages/firstimage.webp",
  "/scrollimages/secondimage.webp",
  "/scrollimages/thirdimage.webp"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); 

    return () => clearInterval(interval); 
    }, [currentIndex]);

  return (
    <div className="hero-section">
      <button className="scroll-btn left-btn" onClick={handlePrev}>
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="hero-image"
        loading="eager"
      />
      <button className="scroll-btn right-btn" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
