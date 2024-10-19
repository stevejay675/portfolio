import React, { useEffect } from 'react';
import { MdContactSupport } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration for the animations
      easing: 'ease-in-out', // Easing function for a smooth transition
    });
  }, []);

  return (
    <section className='contact section-headings' id='contact'>
      <header data-aos="fade-up">
        <span>Get in touch</span>
        <h1 className='bold'>With Me</h1>
      </header>

      <div className="contact-section">
        <div className="text-message" data-aos="fade-up">
          <h1>We are happy to hear from you</h1>
        </div>

        <form action="" className="form" data-aos="zoom-in">
          <i><MdContactSupport className='icon'/></i>
          <input type="text" placeholder='Name' required />

          <input type="email" placeholder='Email' required />

          <textarea placeholder='Your message' required></textarea>
          <button type="submit" className="send">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
