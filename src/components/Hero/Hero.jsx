import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="social-bar">
        <a
          href="https://www.linkedin.com/in/anemoni-akhila-b11054298"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/AAKHILA9"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/campusbuzz9"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="hero-content">

        <h4>Hello I'm</h4>

        <h1>Akhila Anemoni</h1>

        <h3>
          I'm a{" "}
          <span>
            <Typewriter
              words={[
                "Junior Software Engineer",
                "AI & ML Enthusiast",
                "Aspiring Full-Stack Developer",
                "Content Creator @Campusbuzz9"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
            />
          </span>
        </h3>

        <div className="hero-buttons">

          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button>My Resume</button>
          </a>

          <a href="#contact">
            <button>Let's Talk!!</button>
          </a>

        </div>

      </div>

      <div className="scroll-down">
        Scroll Down
      </div>

    </section>
  );
}

export default Hero;