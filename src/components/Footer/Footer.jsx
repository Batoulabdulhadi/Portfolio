import './Footer.css'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = ({yourName, facebookUrl , twitterUrl , linkedinUrl , instaUrl}) => {
  return (
    <footer>
      <p><FaRegCopyright /> 2025. All Rights Reserved</p>
      <p>Develpoment by {yourName}</p>
      <div className='social-contact'>
      <div className='facebook footer-social'> <a href={facebookUrl}><RiFacebookFill className='footer-icon' target='_blank'/></a></div>
      <div className='twitter footer-social' > <a href={twitterUrl}><FaTwitter className='footer-icon' target='_blank'/></a></div>
     <div className='linkedin footer-social'>   <a href={linkedinUrl}><FaLinkedinIn className='footer-icon' target='_blank'/></a>  </div>
     <div className='insta footer-social'> <a href={instaUrl}><FaInstagram className='footer-icon' target='_blank'/></a></div>
      </div>
    </footer>
  )
}

export default Footer

