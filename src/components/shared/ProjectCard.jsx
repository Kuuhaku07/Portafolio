import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './ImageGallery';
import { useLanguage } from '../../utils/LanguageContext';
import en from '../../utils/lang/en';
import es from '../../utils/lang/es';
import './ProjectCard.css';

const ProjectCard = ({ images, name, description, links, technologies, ribbonLabel }) => {
  const { language } = useLanguage();
  const lang = language === 'es' ? es : en;
  const ribbonClass = ribbonLabel ? ribbonLabel.toLowerCase().replace(/\s+/g, '-') : '';
  return (
    <div className="project-card">
      {ribbonLabel && <div className={`project-ribbon ${ribbonClass}`} ><span>{ribbonLabel}</span></div>}
      <div className="project-images">
        <ImageGallery images={images} mode="display" thumbnailSize={100} labels={{ bannerSelector: true }} />
      </div>
      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {links.map(({ label, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="project-technologies">
          <h4>{lang.projects.developedIn || 'Desarrollado en'}</h4>
        <div className="technology-list">
          {technologies.map(({ icon: Icon, name: techName, color }, index) => (
            <div key={index} className="technology-item" title={techName}>
              {Icon && <Icon className="technology-icon" style={{ color: color || 'inherit' }} />}
              <span className="technology-name">{techName}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};


ProjectCard.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.string,
      file: PropTypes.object,
      titulo: PropTypes.string,
      descripcion: PropTypes.string,
      es_portada: PropTypes.bool,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    })
  ),
};

ProjectCard.defaultProps = {
  links: [],
  technologies: [],
};

export default ProjectCard;
