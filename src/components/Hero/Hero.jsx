import React, { useContext } from 'react'
import './Hero.css'
import { ThemeContext } from '../../context/ThemeContext';
const Hero = ({profileImg , firstMedia , secMedia , thirdMedia,homeRef }) => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className='container'>
      <div className={`hero ${theme === 'light' ? 'hero-light' : 'hero-dark'}`} id="hero" ref={homeRef} >
      <div className="description">
        <div className="intro"> 
          <p>Welcome</p>
          <h1><span>HEY!</span>  I`m Batoul, Frontend Developer</h1>
        </div>
  
        <p className='overview'>Frontend Developer crafting seamless, intuitive, and high-performance web experiences through clean code and modern technologies.</p>
        
        <a href="/public/assets/files/cv.pdf" download="cv.pdf" target='_blank'>
               <button className='cv-download primary-btn' >Download CV</button>
        </a>
      </div>
     <div className='full-profile'>
      <div className="square"><img src={profileImg}/></div>
     
     </div>
     <div className="follow-sec">
     <p className='follow'>Follow me on:</p>
     <div className='blue-line'></div>
     <div className='facebook'> <a href="https://www.facebook.com/profile.php?id=100016395727192" target='_blank'> <img src={firstMedia}/></a></div>
     <div className='insta'>   <a href="https://www.instagram.com/batoul_abdulhadi?igsh=MTFmdW5rb3JlcXRnNg==" target='_blank'><img src={secMedia}/></a>  </div>
     <div className='linkedin'> <a href="https://www.linkedin.com/in/batoul-abdulhadi-4595592ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={thirdMedia}/></a></div>

     </div>
      </div>
     </div>
    
  )
}

export default Hero
