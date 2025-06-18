import React, { useRef } from 'react';
import { LanguageProvider } from '../utils/LanguageContext';

import ToastContainer from '../components/shared/ToastContainer';
import About from '../components/sections/About';
import BannerSection from '../components/sections/BannerSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectSection from '../components/sections/ProjectSection';
import LanguageSwitcher from '../components/shared/LanguageSwitcher';
import WhatIDoSection from '../components/sections/WhatIDoSection';


const Home = () => {
  const toastRef = useRef(null);

  return (
    <LanguageProvider>
      <div>
        <LanguageSwitcher />
        <BannerSection />
        <About />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectSection />
        <ToastContainer ref={toastRef} />
      </div>
    </LanguageProvider>
  );
};

export default Home;
