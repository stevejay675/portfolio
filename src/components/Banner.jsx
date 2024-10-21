import React from 'react';
import me from '../assets/Me1.jpg';
import { FaGithub, FaLinkedin, FaLinkedinIn  } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import cv from '../assets/cv.pdf';

const Banner = () => {
  return (
    <div className='banner'>
      
      <img src={me} alt="profile"  className='me'/>

      <div className='profession'>
        <span>Hello, i'm</span>
        <h1 className='bold'>Ngoba Steve Jones</h1>
        <h3 className='bold'>Frontend Developer</h3>
        <div className='download'>
            <a href='#service' className='cv-btn'>services</a>
            <a href={cv} download className='contact-info-btn'>Download CV</a>
        </div>

        <div className='links'>
            <a href='github.com/stevejay675' ><FaGithub className='link'/></a>
            <a href='#' ><TiSocialLinkedinCircular className='link'/></a>
        </div>
      </div>
    </div>
  )
}

export default Banner
