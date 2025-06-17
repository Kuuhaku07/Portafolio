import React from 'react';
import ProjectCard from '../shared/ProjectCard';
import ProjectContainer from '../shared/ProjectContainer';
import projects from '../../utils/projects.json';
import { FaGithub, FaDownload } from 'react-icons/fa';

const ProjectSection = () => {
  // Map projects from JSON and add icons to links
  const projectsWithIcons = projects.map(project => ({
    ...project,
    ribbonLabel: project.ribbonLabel, // ensure ribbonLabel is included
    links: project.links.map(link => {
      let icon = null;
      if (link.label.toLowerCase().includes('github')) {
        icon = <FaGithub />;
      } else if (link.label.toLowerCase().includes('descarga')) {
        icon = <FaDownload />;
      }
      return {
        label: icon ? <>{icon} {link.label}</> : link.label,
        url: link.url,
      };
    }),
  }));

  return (
    <ProjectContainer title="Mis Proyectos">
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
  );
};

export default ProjectSection;
