import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/About.module.css';
import { useLanguage } from '../../utils/LanguageContext';
import en from '../../utils/lang/en';
import es from '../../utils/lang/es';

const About = () => {
  const { language } = useLanguage();
  const lang = language === 'es' ? es : en;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src="/images/profile.jpg"
            alt={lang.about.name}
            className={styles.profileImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.ibb.co/Y7HjxqMN/placeholder-image.jpg';
            }}
          />
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>{lang.about.name}</h2>
          <h3 className={styles.subtitle}>{lang.about.subtitle}</h3>
          <p className={styles.description}>
            {lang.about.description}
          </p>

          <div className={styles.actions}>
            <a 
              href="https://drive.google.com/file/d/1yKcJX-ggq3i4d2pewHvSH48770t0auob/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.cvButton}
            >
              <FaDownload /> {lang.about.downloadCV}
            </a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Kuuhaku07" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ulises-lugo-3708a334b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://mangobyte.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.mangobyteIcon}>
                <img src="/mangobyte.svg" alt="Mangobyte" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
