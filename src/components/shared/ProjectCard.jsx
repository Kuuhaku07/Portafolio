import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './ImageGallery';
import './ProjectCard.css';

const ProjectCard = ({ images, name, description, links, technologies }) => {
  return (
    <div className="project-card">
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
          <h4>Desarrollado en</h4>
          <div className="technology-list">
            {technologies.map(({ icon: Icon, name: techName }, index) => (
              <div key={index} className="technology-item" title={techName}>
                {Icon && <Icon className="technology-icon" />}
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
