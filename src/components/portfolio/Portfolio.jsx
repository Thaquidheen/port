import React from 'react'
import './portfolio.css'
import Netflix from '../../assets/netflix.jpg'
import Portfolios from '../../assets/portfolio.jpg'
import Team from '../../assets/team.jpg'
import Booking from '../../assets/booking.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5  >My Recent Exploits</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio_container">
      <article className='portfolio_item' >
        <div className="portfolio_item_img">
          <img src={Netflix} alt="" />
        </div>
         <h3>Netflix Clone</h3>
         <a href="https://github.com/Thaquidheen/Netflix-clone" target='_blank'className='btn' >Github</a>
      </article>

      <article className='portfolio_item' >
        <div className="portfolio_item_img">
          <img src={Booking} alt="" />
        </div>
         <h3>Booking App</h3>
         <a href="https://github.com/Thaquidheen/Resevation-app-client" target='_blank'className='btn' >Github</a>
      </article>

      <article className='portfolio_item' >
        <div className="portfolio_item_img">
          <img src={Portfolios} alt="" target='_blank'/>
        </div>
         <h3>My first Portfolio</h3>
         <a href="https://github.com/Thaquidheen/Thaquidheen.github.io"  target='_blank'className='btn' >Github</a>
      </article>

      <article className='portfolio_item' >
        <div className="portfolio_item_img">
          <img src={Team} alt="" />
        </div>
         <h3>Team Allocation App</h3>
         <a href="https://github.com/Thaquidheen/Netflix-clone" target='_blank' className='btn' >Github</a>
      </article>
     </div>
    </section>
  )
}

export default Portfolio