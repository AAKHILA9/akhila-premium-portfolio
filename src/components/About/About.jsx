import "./About.css";
import profile from "../../assets/profile.jpg";

function About() {
  return (
    <section className="about" id="about">

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Akhila" />
        </div>

        <div className="about-content">

          <p>
            I'm Akhila Anemoni, a passionate Junior Software Engineer and Data Science graduate who enjoys building meaningful digital solutions through technology. Currently working at Datalake Solutions Pvt. Ltd., I specialize in React.js, Python, MySQL, and modern web development technologies.
          </p>

          <p>
            My journey includes experience in software development, machine learning, AI-powered applications, and database-driven systems. Through internships and industry projects, I have worked on innovative solutions that solve real-world problems and create meaningful impact.
          </p>

          <p>
            I actively share coding insights, learning experiences, and technology-related content through my tech page <strong>@campusbuzz9</strong>. Beyond technology, I also share my thoughts, experiences, and personal moments on my public Instagram account <strong>@anemoniakhilaa</strong>.
          </p>

          <p>
            Apart from coding, I have a deep passion for dancing, singing, drawing, painting, arts, and design. I believe creativity and technology together help me approach challenges from unique perspectives and build solutions that are both functional and inspiring.
          </p>

          <a href="#contact" className="about-btn">
            Let's Talk
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;