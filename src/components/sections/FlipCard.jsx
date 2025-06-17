import React from 'react';
import PropTypes from 'prop-types';
import './FlipCard.css';

const FlipCard = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card" tabIndex={0} aria-label="Skill card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  frontContent: PropTypes.node.isRequired,
  backContent: PropTypes.node.isRequired,
};

export default FlipCard;
