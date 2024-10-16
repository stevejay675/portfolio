import React, { useEffect } from 'react';
import { FaMedal, FaUsers } from 'react-icons/fa';
import Me2 from '../assets/Me3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,  // Slightly increased duration for a smoother effect
      easing: 'ease-in-out', // Smooth easing
    });
  }, []);

  return (
    <section className='about section-headings' id='about'>
      <header data-aos="fade-up">
        <span className='text'>Get to know more</span>
        <h1 className='title bold'>About Me</h1>
      </header>

      <div className='about-me'>
        <img 
          src={Me2} 
          alt="aboutme" 
          className='me' 
          data-aos="fade-right" 
        />
        
        <div 
          className='qualification-section' 
          data-aos="fade-left" 
          data-aos-delay="200"
        >
          <div className='qualification-div'>
            <div className="qualification" data-aos="zoom-in" data-aos-delay="500">
              <FaMedal className='badge' />
              <h3 className='bold'>Experience</h3>
              <span>1+ year</span>
              <span>Frontend Development</span>
            </div>

            <div className="qualification" data-aos="zoom-in" data-aos-delay="700">
              <FaUsers className='badge' />
              <h3 className='bold'>Education</h3>
              <span>B.Eng Bachelor's Degree</span>
              <span>Software Engineering</span>
            </div>
          </div>

          <p data-aos="fade-up" data-aos-delay="800">
            I am a junior <span>software engineer</span> with a passion for developing dynamic and engaging web applications. 
            My skills focus on front-end technologies like HTML, CSS, JavaScript, React, and Next.js, allowing me to create intuitive, 
            responsive, and user-friendly interfaces. I’m committed to learning and growing, with plans to dive into backend development 
            and mobile app creation using React Native. Problem-solving and continuous learning are at the core of my growth. 
            I enjoy collaborating on projects that challenge both my creativity and technical skills, and I’m excited to expand my expertise in these areas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
