import React, { useState } from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false); // close menu on selection
  };

  return (
    <div
      className="language-switcher-container"
      style={{ opacity: menuOpen ? 1 : 0.8, transition: 'opacity 0.3s ease' }}
    >
      <div className="language-switcher-bar">
        <button
          className={language === 'es' ? 'active' : ''}
          onClick={() => {
            toggleLanguage();
            setMenuOpen(false);
          }}
          aria-label="Toggle language"
        >
          {language === 'es' ? 'ES' : 'EN'}
        </button>
        <button
          className="menu-toggle-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
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
