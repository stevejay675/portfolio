import React, { useState, useEffect } from 'react';
import { FaCode, FaMoon, FaSun, FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import cv from '../assets/cv.pdf';

const Navbar = () => {
  const [position, setPosition] = useState('absolute');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.toggle('light-mode', savedTheme === 'light');
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light-mode', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  // Sticky Navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`navbar ${position}`}>
      <a href='#' className="logo">
        <h2 className='bold'>Steve</h2>
        <span><FaCode className='code-icon'/></span>
      </a>
      <ul>
        <a href="#about"><li className='bold'>About</li></a>
        <a href="#experience"><li className='bold'>Experience</li></a>
        <a href="#project"><li className='bold'>Project</li></a>
        <a href="#contact"><li className='bold'>Contact</li></a>
      </ul>

      <div className='right-container-visible'>
        {theme === 'light' ? (
          <FaSun className="light-icon" onClick={toggleTheme} />
        ) : (
          <FaMoon className="dark-icon" onClick={toggleTheme} />
        )}
        <a href={cv} download className='download-cv'>Download CV</a>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
          <FaBars className='icon'/>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Navbar;
