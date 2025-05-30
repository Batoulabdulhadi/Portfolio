import './Contact.css'
import HeadTitleSec from '../HeadTitleSec/HeadTitleSec'
import ContactInfo from '../ContactInfo/ContactInfo'

const Contact = ({contactRef}) => {
  return (
    <div className='contact' id="contact" ref={contactRef}>
       <HeadTitleSec titleSec="Contact"  titleDetails="Let’s Discuss Your " spanWord="Projects"/>
        <div className='form-container'>
            <div className='box-user-info'> 
             <ContactInfo socialIcon="/public/assets/images/telephone.svg" contactInfo="Call me" moreDetailsInfo="+963988136449"/>
             <ContactInfo socialIcon="/public/assets/images/msg.svg" contactInfo="Email me" moreDetailsInfo="batoulabdulhadi1@gmail.com"/>
             <ContactInfo socialIcon="/public/assets/images/new-location.png" contactInfo="Address" moreDetailsInfo="Homs,Syria"/>     
            </div>
            <div className='inputs-box'>
                <div className='name-and-email-inputs'>
                    <input placeholder='Full name' type='text'/>
                    <input placeholder='Your email' type="email"/>
                </div>
                <div className='phone-input'><input placeholder='Phone number' type='text'/></div>
                <div className='message-area'><textarea placeholder='Message'/></div>
                
                <button className='primary-btn'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
