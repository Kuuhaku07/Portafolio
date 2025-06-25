import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import './ProjectContainer.css';

const ProjectContainer = ({ title, children }) => {
  const [showArrow, setShowArrow] = useState(false);
  const scrollbarRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Show arrow after 3 seconds if no scroll and scrollable
    timerRef.current = setTimeout(() => {
      if (
        scrollbarRef.current &&
        scrollbarRef.current.scrollLeft === 0 &&
        scrollbarRef.current.scrollWidth > scrollbarRef.current.clientWidth
      ) {
        setShowArrow(true);
      }
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, []);

  const handleScroll = () => {
    if (scrollbarRef.current) {
      if (scrollbarRef.current.scrollLeft > 10) {
        setShowArrow(false);
        clearTimeout(timerRef.current);
      }
    }
  };

  return (
    <section className="project-container">
      <h2 className="project-container-title">{title}</h2>
      <Scrollbar
        style={{ width: '100%', height: 800 }}
        noScrollX={false}
        noScrollY
        thumbSize={24}
        onScroll={handleScroll}
        ref={scrollbarRef}
      >
        <div className="project-container-scroll-content">
          {children}
        </div>
      </Scrollbar>
      {showArrow && (
        <div className="scroll-arrow right-arrow" aria-hidden="true">
          &#9654;
        </div>
      )}
    </section>
  );
};

ProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProjectContainer;
