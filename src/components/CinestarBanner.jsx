import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../types/CinestarBanner.scss';


import video1 from '../assets/videomovie.mp4';
import video2 from '../assets/videomovie2.mp4';
import video3 from '../assets/videomovie3.mp4';

const CinestarBanner = () => {
  const videos = [video1, video2, video3]; // List video
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="cinestar-banner">
      {/* Carousel Controls */}
      <button className="carousel-control left" onClick={handlePrev}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-control right" onClick={handleNext}>
        <ChevronRight size={32} />
      </button>

      {/* Banner Content */}
      <div className="banner-content">
        <video
          key={videos[currentIndex]} // Force reload when video changes
          src={videos[currentIndex]}
          autoPlay
          loop
          muted
          playsInline
          className="banner-video"
        />
      </div>
    </div>
  );
};

export default CinestarBanner;
