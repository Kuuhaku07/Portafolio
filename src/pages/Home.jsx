import React, { useRef } from 'react';
import CopyButton from '../components/shared/CopyButton';
import ToastContainer from '../components/shared/ToastContainer';
import ProjectCard from '../components/shared/ProjectCard';
import ProjectContainer from '../components/shared/ProjectContainer';
import { FaGithub, FaDownload } from 'react-icons/fa';
import projects from '../utils/projects.json';

const Home = () => {
  const toastRef = useRef(null);

  const handleCopy = (message) => {
    if (toastRef.current) {
      toastRef.current.addToast(message, 'success', 3000);
    }
  };

  // Map projects from JSON and add icons to links
  const projectsWithIcons = projects.map(project => ({
    ...project,
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
    <div>
      <h1>Portfolio Main Page Placeholder</h1>
      <p>This is the main page of the portfolio.</p>

      <CopyButton
        textToCopy="Texto de ejemplo para copiar"
        onCopy={handleCopy}
        buttonColor="#007bff"
        size="medium"
        ariaLabel="Copiar texto de ejemplo"
      />

      <ProjectContainer title="Mis Proyectos">
        {projectsWithIcons.map((project, index) => (
          <ProjectCard
            key={index}
            images={project.images}
            name={project.name}
            description={project.description}
            links={project.links}
            technologies={project.technologies}
          />
        ))}
      </ProjectContainer>

      <ToastContainer ref={toastRef} />
    </div>
  );
};

export default Home;
