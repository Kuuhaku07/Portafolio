import React from 'react';
import PropTypes from 'prop-types';
import './ProjectContainer.css';

const ProjectContainer = ({ title, children }) => {
  return (
    <section className="project-container">
      <h2 className="project-container-title">{title}</h2>
      <div className="project-container-scroll">
        {children}
      </div>
    </section>
  );
};

ProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProjectContainer;
