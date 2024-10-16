import React from 'react';
import { FaCode, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';


const Navbar = () => {

  const [position, setPosition] = useState('absolute');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


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
        <a href="" download className='download-cv'>Download CV</a>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
                <FaBars className='icon'/>
        </div>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  )
}

export default Navbar
