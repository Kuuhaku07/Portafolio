import React, { useState } from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const sections = [
    { id: 'about', label: language === 'es' ? 'Acerca de' : 'About' },
    { id: 'skills-section', label: language === 'es' ? 'Habilidades' : 'Skills' },
    { id: 'project-section', label: language === 'es' ? 'Proyectos' : 'Projects' },
  ];

  const handleSectionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="language-switcher-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity: isHovered ? 1 : 0.5, transition: 'opacity 0.3s ease' }}
    >
      <div className="language-switcher-bar">
        <button
          className={language === 'es' ? 'active' : ''}
          onClick={() => toggleLanguage()}
          aria-label="Toggle language"
        >
          {language === 'es' ? 'ES' : 'EN'}
        </button>
      </div>
      {isHovered && (
        <div className="language-switcher-menu">
          <div className="section-links">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="section-link-button"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
