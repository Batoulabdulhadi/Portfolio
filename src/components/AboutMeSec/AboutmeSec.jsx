
import ProgressBars from '../ProgressBars/ProgressBars'
import './AboutmeSec.css'
import { ThemeContext } from '../../context/ThemeContext';
import toolsLight from "../../../public/assets/images/all-technology.png";  
import toolsDark from "../../../public/assets/images/all-technology-dark.png"
import { useContext } from 'react';

const AboutmeSec = ({ aboutMeText ,aboutRef }) => {
     const { theme} = useContext(ThemeContext);
  return (
        <div className='about-sec' ref={aboutRef}>
        <img className='tools-image'  src={theme === 'light' ? toolsLight : toolsDark}/>
        <div className='about-me'>
        <h1>About Me</h1>
        <p>{aboutMeText}</p>
        <ProgressBars/>
        </div>
         </div>
 
  )
}

export default AboutmeSec
