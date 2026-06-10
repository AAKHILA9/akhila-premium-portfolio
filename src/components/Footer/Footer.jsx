import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      <h1 className="footer-logo">
        Akhila Anemoni
      </h1>

      <p className="footer-quote">
        Dream. Learn. Build. Inspire.
      </p>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#qualification">Education</a></li>
        <li><a href="#certifications">Courses</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">

        <a
          href="https://www.linkedin.com/in/anemoni-akhila-b11054298"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/AAKHILA9"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/anemoniakhilaa"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      <div className="footer-copyright">
        <small>
          © Akhila Anemoni 2026. All rights reserved.
        </small>
      </div>

    </footer>
  );
}

export default Footer;