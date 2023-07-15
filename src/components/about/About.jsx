import React from 'react'
import './about.css';
import ME from '../../assets/about.png';
import {BsAwardFill} from 'react-icons/bs';
import {BiMovie} from 'react-icons/bi'
import {SiSololearn} from 'react-icons/si'
import {AiFillProject} from 'react-icons/ai';
const About = () => {
  return (
    <section  id='about' className='pri'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="about"/>
          </div>
        </div>
      
 
 <div className="about_content">
  <div className="about_cards">
  

    <article className="about_card">
      <BsAwardFill className='about_icon' />
      <h5>Expertise</h5>
      <small>Web developement</small>
    </article>


    <article className="about_card">
      <BiMovie className='about_icon' />
      <h5>Passion</h5>
      <small>Film,Online videos</small>
    </article>

    <article className="about_card">
      <SiSololearn className='about_icon' />
      <h5>Autodidacticism</h5>
      <small>Acquire new competencies</small>
    </article>

    <article className="about_card">
      <AiFillProject className='about_icon' />
      <h5>Projects</h5>
      <small>4+ Completed</small>
    </article>

  </div>
  <p>"Hello, I'm Thaquidheen M A, a recent B.Tech graduate specializing in web development. Over the past two years, I have gained experience in the MERN stack and completed projects that demonstrate my skills in building dynamic web applications. I also have a background in Python and have successfully undertaken machine learning projects. As a fresher, I am driven by a passion for learning and committed to staying updated with the latest technologies. I am eager to contribute my expertise to create impactful and user-centric solutions. Let's collaborate and make a difference!"</p>
  
     <a href="" className='btn'> React Out</a>
 </div>

      </div>
    </section>
  )
}

export default About