import React from 'react';
import ProjectCard from '../shared/ProjectCard';
import ProjectContainer from '../shared/ProjectContainer';
import { useLanguage } from '../../utils/LanguageContext';
import projectsEs from '../../utils/projects.json';
import projectsEn from '../../utils/projects.en.json';
import { FaGithub, FaDownload, FaPhp, FaCss3Alt, FaJsSquare, FaDatabase, FaPython, FaReact } from 'react-icons/fa';
import { SiLaragon, SiFlutter, SiSqlite } from 'react-icons/si';

const iconMap = {
  'php': { icon: FaPhp, color: '#8993be' },
  'css': { icon: FaCss3Alt, color: '#264de4' },
  'javascript': { icon: FaJsSquare, color: '#f0db4f' },
  'postgresql': { icon: FaDatabase, color: '#336791' },
  'laragon': { icon: SiLaragon, color: '#1e90ff' },
  'flutter': { icon: SiFlutter, color: '#02569B' },
  'flet': { icon: SiFlutter, color: '#02569B' },
  'python': { icon: FaPython, color: '#3776AB' },
  'sqlite': { icon: SiSqlite, color: '#003B57' },
  'react': { icon: FaReact, color: '#61DAFB' },
};

const ProjectSection = () => {
  const { language } = useLanguage();
  const projects = language === 'es' ? projectsEs : projectsEn;

  // Map projects from JSON and add icons to links and technologies with colors
  const projectsWithIcons = projects.map(project => ({
    ...project,
    ribbonLabel: project.ribbonLabel, // ensure ribbonLabel is included
    links: project.links.map(link => {
      let icon = null;
      if (link.label.toLowerCase().includes('github')) {
        icon = <FaGithub />;
      } else if (
        link.label.toLowerCase().includes('descarga') ||
        link.label.toLowerCase().includes('informe') ||
        link.label.toLowerCase().includes('download') ||
        link.label.toLowerCase().includes('report')
      ) {
        icon = <FaDownload />;
      }
      return {
        label: icon ? <>{icon} {link.label}</> : link.label,
        url: link.url,
      };
    }),
    technologies: project.technologies.map(tech => {
      const techIcon = iconMap[tech.name.toLowerCase()] || null;
      return {
        ...tech,
        icon: techIcon ? techIcon.icon : null,
        color: techIcon ? techIcon.color : null,
      };
    }),
  }));

  return (
    <section id="project-section" >
    <ProjectContainer  title={language === 'es' ? "Mis Proyectos" : "My Projects"}>
      {projectsWithIcons.map((project, index) => (
        <ProjectCard
          key={index}
          images={project.images}
          name={project.name}
          description={project.description}
          links={project.links}
          technologies={project.technologies}
          ribbonLabel={project.ribbonLabel}
        />
      ))}
    </ProjectContainer>
    </section>
);
};

export default ProjectSection;
