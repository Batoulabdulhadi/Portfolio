import React, { useRef } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero';
import BreakBar from '../../components/BreakBar/BreakBar';
import AboutmeSec from '../../components/AboutMeSec/AboutmeSec';
import EducationAndExperinceSec from '../../components/EducationAndExperinceSec/EducationAndExperinceSec';
import TryMeSec from '../../components/TryMeSec/TryMeSec';
import LatestProject from '../../components/LatestProject/LatestProject';
import Contact from '../../components/Contact/Contact';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    project: projectRef,
    contact: contactRef,
  };

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`main-${theme}`}>
      <NavBar name="Batoul" refs={sectionRefs} />
      <Hero 
        profileImg="/assets/images/undraw_learning-sketchingsh.svg" 
        firstMedia="/assets/images/facebook.svg" 
        secMedia="/assets/images/insta.svg" 
        thirdMedia="/assets/images/linkedin.svg"
        homeRef={sectionRefs.home} 
      />
      <BreakBar />
      <AboutmeSec 
        taboutMeText="
          Hi! I'm Batoul abdulHadi, a Front-End Developer skilled in React.js and passionate about building modern, responsive web applications. 
          Currently, I'm pursuing a Software Engineering degree, enhancing my problem-solving and development skills.
          Tech Stack: React.js, JavaScript (ES6+), HTML, CSS, Tailwind, Redux
          Passionate About: UI/UX, Web Performance, Accessibility
          Let’s connect and create something great!"
          aboutRef={sectionRefs.about} 
      />
      <EducationAndExperinceSec educationRef={sectionRefs.education}  />
      <TryMeSec  />
      <LatestProject educationRef={sectionRefs.project}/>
      <Contact contactRef={sectionRefs.contact}/>
    </div>
  );
};

export default Main;
