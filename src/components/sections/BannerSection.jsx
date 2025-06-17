import React, { useState, useEffect } from 'react';
import bannerImages from '../../utils/bannerImages.json';
import './BannerSection.css';

const BannerSection = () => {
  // Extract all images from all projects into a single array
  const images = bannerImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="banner-section">
      <div className="banner-image-container">
        <img
          src={images[currentIndex].preview}
          alt={images[currentIndex].titulo || `Banner Image ${currentIndex + 1}`}
          className="banner-image"
          loading="lazy"
        />
        <div className="banner-text">
          <h1>Ulises Lugo</h1>
          <h2>Desarrollador Full Stack</h2>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
