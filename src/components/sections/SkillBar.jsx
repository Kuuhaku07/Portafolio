import React from 'react';
import PropTypes from 'prop-types';
import './SkillBar.css';

const SkillBar = ({ skill, level }) => {
  const percentage = Math.min(Math.max(level, 0), 10) * 10; // Convert 1-10 scale to 0-100%

  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-level-bar">
        <div className="skill-level-fill" style={{ width: `${percentage}%` }} />
      </div>
      <div className="skill-level-number">{level}/10</div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillBar;
