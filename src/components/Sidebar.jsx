import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTimes} from 'react-icons/fa';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close button */}
        <div className="sidebar-close" onClick={toggleSidebar}>
          <FaTimes />
        </div>

        <div className="sidebar-content">
          <a href='/' onClick={toggleSidebar} className='sidebar-links'>Home</a>
          <a href="#about" onClick={toggleSidebar} className='sidebar-links'>About</a>
          <a href="#service" onClick={toggleSidebar} className='sidebar-links'>Services</a>
          <a href="#contact" onClick={toggleSidebar} className='sidebar-links'>Contact</a>
          <a href="#project" onClick={toggleSidebar} className='sidebar-links'>Projects</a>

          <div>
            <h2 className='connect'>connect with me: </h2>
          <div className="sidebar-socials">
            <FaGithub className='ss'/>
            <FaLinkedin className='ss'/>
            <FaFacebook className='ss'/>
            <FaInstagram className='ss'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
