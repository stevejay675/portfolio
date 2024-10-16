import React from 'react';
import { FaCode, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';



const Navbar = () => {

  const [position, setPosition] = useState('absolute');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar ${[position]}`}>
      <a href='#' className="logo">
      <h2 className='bold'>Steve </h2>
      <span><FaCode className='icon'/></span>
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
        <div className="navbar-hamburger" >
                <FaBars />
        </div>
      </div>
    </div>
  )
}

export default Navbar
