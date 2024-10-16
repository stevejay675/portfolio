import React from 'react';
import checkmark from '../assets/checkmark2.png';
import { FaCode, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section className='experience section-headings' id='experience'>
      <header className="title">
        <span>Explore My</span>
        <h1 className='bold'>Experience</h1>
      </header>

<div className="experience-section">
      <div className="experience-container">
        <i><FaCode className='icon'/></i>
        <h2 className='bold'>Frontend Development</h2>
        <div className='exp-container-div'>
        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>HTML</h3>
                <span>Experienced</span>
            </section>
        </div>

        <div className="exp-sub-container">
            
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>CSS</h3>
                <span>Experienced</span>
            </section>
        </div>


        <div className="exp-sub-container">
        <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>Javascript</h3>
                <span>Experienced</span>
            </section>
        </div>

        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>React</h3>
                <span>Experienced</span>
            </section>
        </div>

        <div className="exp-sub-container">
        <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>NextJS</h3>
                <span>Intermediate</span>
            </section>
        </div>


        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>Figma</h3>
                <span>Experienced</span>
            </section>
        </div>
        </div>
      </div>


      <div className="experience-container">
       <i><FaCode className='icon'/></i>
        <h2 className='bold'>Backend Development</h2>
        <div className='exp-container-div'>

        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>NodeJs</h3>
                <span>Intermediate</span>
            </section>
        </div>

        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>PHP</h3>
                <span>Intermediate</span>
            </section>
        </div>

        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>MSQL</h3>
                <span>Intermediate</span>
            </section>
        </div>

        <div className="exp-sub-container">
            <i><FaCheckCircle className='bold'/></i>
            <section className="name">
                <h3 className='bold'>HTML</h3>
                <span>Experienced</span>
            </section>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
