import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import bannerImages from '../../utils/bannerImages.json';
import './BannerSection.css';

const BannerSection = () => {
  const { language } = useLanguage();
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
          <h1>{language === 'es' ? 'Ulises Lugo' : 'Ulises Lugo'}</h1>
          <h2>{language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}</h2>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
