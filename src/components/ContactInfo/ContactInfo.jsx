import './ContactInfo.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
const ContactInfo = ({socialIcon , contactInfo , moreDetailsInfo }) => {
    const { theme } = useContext(ThemeContext);
  return (
  
         <div className={`contact-info-box ${theme === 'light' ? 'contact-info-box-light' : 'contact-info-box-dark'}`}>
                    <div className='social-media-icon'><img src={socialIcon}/></div>
                    <div className='details-about-contact'>
                        <p className='text-contact'>{contactInfo}</p>
                        <p className='text-contact-more-detail'>{moreDetailsInfo}</p>
                    </div>
                </div>
   
  )
}

export default ContactInfo
