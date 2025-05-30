import EduAndExpDetailes from '../EduAndExpDetailes/EduAndExpDetailes'
import'./EducationAndExperinceSec.css'
import { FaArrowUp } from "react-icons/fa";
const EducationAndExperinceSec = ({educationRef}) => {
  return (
    <div className='container'>
      <div className='all-edu-sec' ref={educationRef}>
        <img src="/assets/images/top-rigt-bg-side.svg" className='top-right-img'/>
        <div className="edu-holder">
        <div className="title-sec">
            <p>Education and Experience</p>
            <h1>Education & Experience</h1>
        </div>
        <div className='box-information'>
        <EduAndExpDetailes className="right-side-experiance" titleParagraph1=" Internship Experience" firstParagraph="Front-End Developer Intern – Darabni Company (6 months)Built responsive web pages using HTML, CSS, and JavaScriptCollaborated with the UI/UX team to implement user-friendly designsParticipated in Agile sprints and improved teamwork and planning skillsFront-End Developer Intern – VICA Company (6 months)Developed interactive interfaces using React.js and JavaScriptImproved front-end code quality following clean code standardsUsed Git for version control and collaborative development
" />
        <EduAndExpDetailes titleParagraph1=" Current Role" firstParagraph=" UI/UX Designer Intern – VICA Company (Jan 2024 – Present)
Designing user interfaces and prototypes using Figma
Creating wireframes, mockups, and conducting usability testing
Collaborating with developers to ensure design accuracy and optimal user experience.
" />
        <EduAndExpDetailes titleParagraph1=" Academic Background" firstParagraph=" Informatics Engineering – Software Engineering
University of Homs – 4th Year Student (Expected Graduation: 2026)
Specialized in software engineering with a focus on front-end development and UI/UX design
Involved in academic projects using modern web technologies
" />
       <EduAndExpDetailes titleParagraph1="Academic Project" firstParagraph="Currently developing a platform to facilitate the exchange of design resources among architecture students
Implementing responsive front-end functionality with HTML, CSS, and JavaScript
Aiming to enhance resource accessibility and collaboration in academic environments
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
