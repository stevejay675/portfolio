import {React, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Updated import path for modules
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,  // Smooth animation duration
      easing: 'ease-in-out', // Smooth easing for animations
    });
  }, []);


  return (
    <section className="projects section-headings" id="project">
      <header data-aos="fade-up">
        <span>Browse my Recent</span>
        <h1 className="bold">Projects</h1>
      </header>

      <Swiper
        modules={[Navigation, Pagination]}  // Ensure correct use of modules
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p1} alt="project1" />
            <h3>Ecommence Store</h3>
            <i>HTML, CSS, JS</i>
            <div className="buttons">
              <a href="https://github.com/stevejay675/accessory_store.git" target="_blank">GitHub</a>
              <a href="https://accessory-store-six.vercel.app/" target="_blank">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p2} alt="project2" />
            <h3>Food Delivery</h3>
            <i>NextJs</i>
            <div className="buttons">
              <a href="https://github.com/stevejay675/lead_web_frontend/" target="_blank">GitHub</a>
              <a href="https://lead-web-frontend.vercel.app/" target="_blank">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p3} alt="project3" />
            <h3>Lost Image Matching App</h3>
            <i>React Native, Expo</i>
            <div className="buttons">
              <a href="https://github.com/stevejay675/lostImageMatchingApp">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p1} alt="project4" />
            <h3>Restaurant Website</h3>
            <i>NextJs</i>
            <div className="buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
