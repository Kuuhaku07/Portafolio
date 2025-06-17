import React, { useRef } from 'react';

import ToastContainer from '../components/shared/ToastContainer';
import About from '../components/sections/About';
import BannerSection from '../components/sections/BannerSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectSection from '../components/sections/ProjectSection';

const Home = () => {
  const toastRef = useRef(null);

  return (
    <div>
      <BannerSection />
      <About />
      <SkillsSection />
      <ProjectSection />
      <ToastContainer ref={toastRef} />
    </div>
  );
};

export default Home;
