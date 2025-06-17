import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import './ProjectContainer.css';

const ProjectContainer = ({ title, children }) => {
  return (
    <section className="project-container">
      <h2 className="project-container-title">{title}</h2>
      <Scrollbar style={{ width: '100%', height: 760 }} noScrollX={false} noScrollY thumbSize={24}>
        <div className="project-container-scroll-content">
          {children}
        </div>
      </Scrollbar>
    </section>
  );
};

ProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProjectContainer;
