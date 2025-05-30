import './TryMeSec.css'
import { FaArrowRight } from "react-icons/fa";
const TryMeSec = () => {
  return (
    <div className='try-me-container'>
      <div className='blue-box'>
          <div className='purple-box'>
             <div className='text-purple-box'> 
                 <h1>Try me out, risk free!</h1>
                 <p>If you’re not happy with the design after the first draft,
                 I’ll refund your deposit, <span>no questions asked</span></p>
             </div>
             <button className='primary-btn btn-and-icon'><a href='#contact'>Contact</a> <FaArrowRight className='contact-btn-arow'/></button>
           </div>
       </div>
      
    </div>
  )
}

export default TryMeSec
