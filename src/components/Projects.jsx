import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Updated import path for modules

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";

const Projects = () => {
  return (
    <section className="projects section-headings" id="project">
      <header>
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
            <h3>Project One</h3>
            <div className="buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p2} alt="project2" />
            <h3>Project Two</h3>
            <div className="buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p3} alt="project3" />
            <h3>Project Three</h3>
            <div className="buttons">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-detail-container">
            <img src={p1} alt="project4" />
            <h3>Project Four</h3>
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
