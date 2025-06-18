import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import en from '../../utils/lang/en';
import es from '../../utils/lang/es';
import { FaCode, FaPaintBrush, FaCogs, FaDatabase } from 'react-icons/fa';
import './WhatIDoSection.css';

const WhatIDoSection = () => {
  const { language } = useLanguage();
  const lang = language === 'es' ? es : en;

  const specialties = [
    {
      icon: <FaCode />,
      title: lang.whatIDo.frontendTitle,
      description: lang.whatIDo.frontendDesc,
    },
    {
      icon: <FaPaintBrush />,
      title: lang.whatIDo.designTitle,
      description: lang.whatIDo.designDesc,
    },
    {
      icon: <FaCogs />,
      title: lang.whatIDo.scriptingTitle,
      description: lang.whatIDo.scriptingDesc,
    },
    {
      icon: <FaDatabase />,
      title: lang.whatIDo.infoSystemsTitle,
      description: lang.whatIDo.infoSystemsDesc,
    },
  ];

  return (
    <section className="whatido-section" id="whatido-section">
      <h2 className="section-title">{lang.whatIDo.title}</h2>
      <p className="section-intro">{lang.whatIDo.intro}</p>
      <div className="specialties-container">
        {specialties.map(({ icon, title, description }, index) => (
          <div key={index} className="specialty-card">
            <div className="specialty-icon">{icon}</div>
            <h3 className="specialty-title">{title}</h3>
            <p className="specialty-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDoSection;
