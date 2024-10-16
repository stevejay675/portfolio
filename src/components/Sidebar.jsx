import React from 'react';
import {FaTimes} from 'react-icons/fa'

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
          <a href='/' onClick={toggleSidebar}>Home</a>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#service" onClick={toggleSidebar}>Services</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
          <a href="#project" onClick={toggleSidebar}>Projects</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
