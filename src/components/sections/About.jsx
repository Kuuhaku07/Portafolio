import React from 'react';
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src="/images/profile.jpg"
            alt="Foto de Ulises Lugo"
            className={styles.profileImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.ibb.co/Y7HjxqMN/placeholder-image.jpg';
            }}
          />
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>Ulises Lugo</h2>
          <h3 className={styles.subtitle}>Desarrollador Full Stack</h3>
          <p className={styles.description}>
            Soy un apasionado por crear soluciones digitales funcionales y atractivas. 
            Con un amplio conocimiento en <strong>Python, React, PHP, PostgreSQL y CSS</strong>, 
            y experiencia en desarrollo de aplicaciones web, scripts y sistemas de informacion. 
            Me gusta trabajar en proyectos grandes y pequeños, siempre buscando 
            mejorar mis habilidades y conocimientos.
          </p>

          <div className={styles.actions}>
            <a 
              href="https://drive.google.com/file/d/1yKcJX-ggq3i4d2pewHvSH48770t0auob/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.cvButton}
            >
              <FaDownload /> Descargar CV
            </a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Kuuhaku07" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ulises-lugo-3708a334b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/odiseoreo/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;