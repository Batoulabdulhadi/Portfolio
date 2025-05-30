import EduAndExpDetailes from '../EduAndExpDetailes/EduAndExpDetailes'
import'./EducationAndExperinceSec.css'
import { FaArrowUp } from "react-icons/fa";
const EducationAndExperinceSec = ({educationRef}) => {
  return (
    <div className='container'>
      <div className='all-edu-sec' ref={educationRef}>
        <img src="../../../public/assets/images/top-rigt-bg-side.svg" className='top-right-img'/>
        <div className="edu-holder">
        <div className="title-sec">
            <p>Education and Experience</p>
            <h1>Education & Experience</h1>
        </div>
        <div className='box-information'>
        <EduAndExpDetailes className="right-side-experiance" titleParagraph1="Experince Designer" firstParagraph="User Experience (UX) Design: Understanding user behavior and analyzing data to create effective user flows.User Interface (UI) Design: Applying design principles to build modern and intuitive interfaces." titleParagraph2="Frontend Developer"  secParagraph="I am passionate about building technology-driven solutions that enhance user interaction and solve real-world challenges in innovative ways." />
        <EduAndExpDetailes titleParagraph1="Experince Designer" firstParagraph="Front-End Development: Developing dynamic web applications using HTML, CSS, JavaScript, and React.js.Cross-functional Collaboration: Working closely with designers and developers to enhance the overall user experience." titleParagraph2="Frontend Developer"  secParagraph="Former intern at Darrebni Software Company and current intern at Vica Software Company as front end developer , I am studying Informatics Engineering with a specialization in Software Engineering and Information Systems in my fourth year at Al-Baath University in Homs.
" />
        </div>
 
          
    
        </div>
        <div className='bottom-img-box'>
        <img src="../../../public/assets/images/left-bg-side.svg" className='bottom-left-img' />
        <div className='up-arrow-container'> 
          <a href='#'><FaArrowUp className='up-arrow' /></a>
           
           </div>
        </div>
        </div>
      
    </div>
  )
}

export default EducationAndExperinceSec
