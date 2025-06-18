
import React, { useState } from 'react';
import Modal from '../shared/Modal';
import SkillBar from './SkillBar';
import FlipCard from './FlipCard';
import { SiPhp, SiPython, SiReact, SiJavascript, SiPostgresql, SiCplusplus, SiHtml5, SiCss3, SiAdobe} from 'react-icons/si';
import { GiOrange} from 'react-icons/gi';
import { FaUniversity } from 'react-icons/fa';
import './SkillsSection.css';
import './FlipCard.css';
import { useLanguage } from '../../utils/LanguageContext';
import en from '../../utils/lang/en';
import es from '../../utils/lang/es';


const SkillsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const lang = language === 'es' ? es : en;

  const studiesCourses = lang.skills.studiesCourses;
  const languages = lang.skills.languagesList;

  const programming = [
    { skill: 'PHP', level: 9, logo: <SiPhp size={48} color="#777bb3" /> },
    { skill: 'Python', level: 10, logo: <SiPython size={48} color="#306998" /> },
    { skill: 'React', level: 8, logo: <SiReact size={48} color="#61dafb" /> },
    { skill: 'Javascript', level: 7, logo: <SiJavascript size={48} color="#f0db4f" /> },
    { skill: 'PostgreSQL', level: 6, logo: <SiPostgresql size={48} color="#336791" /> },
    { skill: 'C++', level: 3, logo: <SiCplusplus size={48} color="#00599c" /> },
    { skill: 'HTML', level: 8, logo: <SiHtml5 size={48} color="#e34c26" /> },
    { skill: 'CSS', level: 7, logo: <SiCss3 size={48} color="#264de4" /> },
  ];

  const design = [
    { skill: 'Paint Tool Sai', level: 7, logo: <GiOrange size={48} color="#2a5829" /> },
    { skill: 'Autocad', level: 6, logo: <SiAdobe size={48} color="#ff0000" /> },
  ];

  const tools = lang.skills.toolsList;
  const knowledge = lang.skills.knowledgeList;

  return (
<section id="skills-section" className="skills-section">
  <h1 className="skills-title">{lang.skills.title}</h1>

      <div className="skills-container">
        <div className="left-column">
          <div className="studies-section">
            <h2><FaUniversity className="university-icon" />{lang.skills.studies}</h2>
            <h3>{lang.skills.universityCareer}</h3>
            <div className="university-container">
              <p>{lang.skills.universityName}</p>
            </div>

            <button className="modal-open-button" onClick={() => setIsModalOpen(true)}>
              {lang.skills.viewCourses}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={lang.skills.coursesTitle}>
              <ul className="courses-list">
                {studiesCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Modal>
          </div>

          <div className="skills-category">
            <h3>{lang.skills.languages}</h3>
            {languages.map(({ skill, level }) => (
              <SkillBar key={skill} skill={skill} level={level} />
            ))}
          </div>
        </div>

        <div className="right-column">
          <div className="right-top-row">
            <div className="skills-category flipcard-container">
              <h3>{lang.skills.programming}</h3>
              <div className="flipcard-grid">
                {programming.map(({ skill, logo }) => (
                  <FlipCard
                    key={skill}
                    frontContent={<div className="flipcard-logo">{logo}</div>}
                    backContent={<div className="flipcard-skill-name">{skill}</div>}
                  />
                ))}
              </div>
            </div>

            <div className="skills-category flipcard-container">
              <h3>{lang.skills.design}</h3>
              <div className="flipcard-grid">
                {design.map(({ skill, logo }) => (
                  <FlipCard
                    key={skill}
                    frontContent={<div className="flipcard-logo">{logo}</div>}
                    backContent={<div className="flipcard-skill-name">{skill}</div>}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="right-bottom-row">
            <div className="skills-category">
              <h3>{lang.skills.tools}</h3>
              <ul>
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className="skills-category">
              <h3>{lang.skills.knowledge}</h3>
              <ul>
                {knowledge.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
