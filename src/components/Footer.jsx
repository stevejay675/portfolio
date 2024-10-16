import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaMailBulk, FaEnvelope, FaPhone, FaMap, FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot, FaMapLocation } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <ul>
            <li><a href="https://www.linkedin.com"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="https://github.com"><FaGithub /> GitHub</a></li>
            <li><a href="https://twitter.com"><FaTwitter /> Twitter</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><FaEnvelope /> <a href="mailto:stevejay675@email.com">stevejay675@email.com</a></p>
          <p><FaPhone /> <a>+237653282022</a></p>
          <p><FaLocationDot/> <a >Buea, Cameroon</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Emma Taylor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
