import React from 'react';
import { FaCode, FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#' className="logo">
      <h2 className='bold'>Steve </h2>
      <span><FaCode /></span>
      </a>
      <ul> 
        <a href="#about"><li className='bold'>About</li></a>
        <a href="#experience"><li className='bold'>Experience</li></a>
        <a href="#project"><li className='bold'>Project</li></a>
        <a href="#contact"><li className='bold'>Contact</li></a>
      </ul>

      <div className='right-container-visible'>
        <i><FaSun className='icon'/></i>
        <a href="" download>Download CV</a>
      </div>
    </div>
  )
}

export default Navbar
