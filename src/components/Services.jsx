import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush  } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const Services = () => {
  return (
    <section className='services section-headings' id='service'>
      <header>
        <span>Explore My</span>
        <h1 className='bold'>Services</h1>
      </header>

      <div className='service-details-container'>
        <div className='service-det'>
          <i><FaLaptopCode className='service-icon bold'/></i>
          <h2 className='bold'>Web Development</h2>
          <p>As a web developer, I specialize in creating dynamic and responsive websites tailored to meet your business needs. I use modern technologies and frameworks to ensure optimal performance and a seamless user experience. Whether you need a simple landing page or a complex web application, I bring your vision to life with clean, maintainable code and attention to detail.</p>
        </div>

        <div className='service-det'>
          <i><FaMobileAlt className='service-icon bold'/></i>
          <h2 className='bold'>App Development</h2>
          <p>In the rapidly evolving digital landscape, mobile applications are crucial for engaging customers. I offer app development services that focus on delivering intuitive and user-friendly mobile experiences. Using frameworks like React Native, I build cross-platform apps that run smoothly on both iOS and Android devices, helping you reach a broader audience and enhance customer interactions.</p>
        </div>

        <div className='service-det'>
          <i><IoIosColorPalette  className='service-icon bold'/></i>
          <h2 className='bold'>UX/Ui Design</h2>
          <p>Great design goes beyond aesthetics; it creates a memorable user experience. I provide UI/UX design services that focus on understanding user behavior and needs. By creating visually appealing and functional interfaces, I ensure that your users enjoy a smooth interaction with your digital products. My designs prioritize usability, ensuring that every element serves a purpose and enhances the overall experience.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
