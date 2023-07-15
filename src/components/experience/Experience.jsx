import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id='experience' >
    <h5>What competencies do I possess?</h5>
    <h2>Experiences </h2>
     <div className="container container_experience">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Html</h4>
               <small className='text-light'>Intermediate</small>
               </div>
          
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
                    <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
                    </div>
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
               </div>
            
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Intermediate</small>
               </div>
           
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>React.js</h4>
               <small className='text-light'>Experienced</small>
               </div>
         
          </article>
        </div>
      </div>
      <div className="experience_backend">
       <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Node.js</h4>
               <small className='text-light'>Intermediate</small>
               </div>
             
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Express.js</h4>
               <small className='text-light'>Intermediate</small>
               </div>
           
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Mongodb</h4>
               <small className='text-light'>Experienced</small>
               </div>
             
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Mysql</h4>
               <small className='text-light'>Basic</small>
               </div>
        
          </article>
          <article className='ecperience_detail' >
               <BsPatchCheckFill className='ecperience_detail-icon'/>
               <div>
               <h4>Python</h4>
               <small className='text-light'>Basic</small>
               </div>
    
          </article>
      </div>
     </div>
     </div>
   </section>
  )
}

export default Experience