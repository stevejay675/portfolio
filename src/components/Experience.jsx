import React, { useEffect } from 'react';
import { FaCode, FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Smooth animation duration
      easing: 'ease-in-out', // Smooth easing for animations
    });
  }, []);

  return (
    <section className='experience section-headings' id='experience'>
      <header className="title" data-aos="fade-up">
        <span>Explore My</span>
        <h1 className='bold'>Experience</h1>
      </header>

      <div className="experience-section">
        <div className="experience-container" data-aos="fade-up">
          <i><FaCode className='icon'/></i>
          <h2 className='bold'>Frontend Development</h2>
          <div className='exp-container-div'>
            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="300">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>HTML</h3>
                <span>Experienced</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="400">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>CSS</h3>
                <span>Experienced</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="500">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>Javascript</h3>
                <span>Experienced</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="600">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>React</h3>
                <span>Experienced</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="700">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>NextJS</h3>
                <span>Intermediate</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="800">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>Figma</h3>
                <span>Experienced</span>
              </section>
            </div>
          </div>
        </div>

        <div className="experience-container" data-aos="fade-up">
          <i><FaCode className='icon'/></i>
          <h2 className='bold'>Backend Development</h2>
          <div className='exp-container-div'>
            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="300">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>NodeJs</h3>
                <span>Intermediate</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="400">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>PHP</h3>
                <span>Intermediate</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="500">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>MSQL</h3>
                <span>Intermediate</span>
              </section>
            </div>

            <div className="exp-sub-container" data-aos="zoom-in" data-aos-delay="600">
              <i><FaCheckCircle className='bold'/></i>
              <section className="name">
                <h3 className='bold'>Fire Base</h3>
                <span>Experienced</span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
