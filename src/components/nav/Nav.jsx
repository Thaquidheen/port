import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {BiCodeCurly} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about'     onClick={()=>setActiveNav('#about')}    className={activeNav === '#about' ? 'active' : ''}><MdOutlinePersonOutline/></a>
      <a href='#experience'  onClick={()=>setActiveNav('#experience')}   className={activeNav === '#experience' ? 'active' : ''}><BiCodeCurly/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')}   className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')}   className={activeNav === '#contact' ? 'active' : ''}><MdContacts/></a>
    </nav>
  )
}

export default Nav