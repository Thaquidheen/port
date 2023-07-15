import React from 'react'
import './contact.css';
import {BiLogoGmail} from 'react-icons/bi'
import {FaWhatsappSquare} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_eclu19j', 'template_rz7keao', form.current, 'Hb14q7mcu4aVWIy5s')
        e.target.reset()
    };


  return (
    <section id='contact' >
      <h5>Connect with Me</h5>
      <h2>Get In Touch</h2>
      <div className="container contact_container">
        <div className="contact_options">
           <article className="contact_option">
             <BiLogoGmail/>
             <h4>Email</h4>
             <h5>thaquidheen@gmail.com</h5>
             <a href='mailto:thaquidheen@gmail.com' target='_blank'>Send a message</a>
           </article>
           <article className="contact_option">
             <FaWhatsappSquare/>
             <h4>Whatsap</h4>
             <h5>+91 9656403561</h5>
             <a href='https://api.whatsap.com/send?phone+919656403561' target='_blank'>Drop Me a line</a>
           </article>
           <article className="contact_option">
             <BiLogoLinkedin/>
             <h3>Linkidin</h3>
             <a href='https://www.linkedin.com/in/thaquidheen-m-a-466712165/' target='_blank'>Send a message</a>
           </article>
        </div>

        <form onSubmit={sendEmail} ref={form}  >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          
        <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' value="Send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact