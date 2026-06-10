import "./Testimonials.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import ramana from "../../assets/testimonials/ramana.jpg";
import aravind from "../../assets/testimonials/aravind.jpg";

const data = [
  {
    avatar: ramana,
    name: "Dr. B.V. Ramana",
    role: "Associate Professor @ HITS",
    review:
      "Akhila consistently demonstrates exceptional dedication, leadership and a strong passion for learning. Her ability to balance academics, technical growth and extracurricular activities reflects her commitment to excellence. She is a proactive learner with great potential to succeed in the technology industry.",
  },

  {
    avatar: aravind,
    name: "Suruvu Aravind Goud",
    role: "Content Creator @ BuildYourLogics",
    review:
      "Akhila possesses remarkable enthusiasm for technology and continuous learning. Her consistency, creativity and willingness to explore new ideas make her stand out. She has the determination and mindset required to build impactful solutions and inspire others through her journey.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>What People Say</h5>
      <h2>Testimonials</h2>

      <Swiper
  className="container testimonials-container"
  modules={[Pagination]}
  spaceBetween={40}
  slidesPerView={1}
  pagination={{ clickable: true }}
>
    
        {data.map(({ avatar, name, role, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client-avatar">
              <img src={avatar} alt={name} />
            </div>

            <h3 className="client-name">{name}</h3>

            <small className="client-role">
              {role}
            </small>

            <p className="client-review">
              {review}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;