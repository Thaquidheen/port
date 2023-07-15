import React from 'react'
import './footer.css';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSquareInstagram} from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Thaquidheen</a>
      {/* <ul className='permanent_link' >
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#contact">Contact</a></li>
      </ul> */}
 <div className="footer_scoial">
  <a href="https://github.com/Thaquidheen"><AiFillGithub/></a>
  <a href="https://www.linkedin.com/in/thaquidheen-m-a-466712165"><AiFillLinkedin/></a>
  <a href="https://www.instagram.com/"><FaSquareInstagram/></a>
 </div>
    </footer>
  )
}

export default Footer