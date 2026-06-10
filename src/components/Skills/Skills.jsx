import "./Skills.css";
import { FaCheckCircle } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h5>Technical Expertise</h5>
      <h2> My Tech Stack</h2>

      <div className="skills-container">

        <div className="skills-box">
          <h3>Frontend Development</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>HTML</h4></article>
            <article><FaCheckCircle /><h4>CSS</h4></article>
            <article><FaCheckCircle /><h4>JavaScript</h4></article>
            <article><FaCheckCircle /><h4>React JS</h4></article>
          </div>
        </div>

        <div className="skills-box">
          <h3>Backend Development</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>Python</h4></article>
            <article><FaCheckCircle /><h4>MySQL</h4></article>
            <article><FaCheckCircle /><h4>Database Design</h4></article>
            <article><FaCheckCircle /><h4>SDLC</h4></article>
          </div>
        </div>

        <div className="skills-box">
          <h3>AI / Machine Learning</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>Machine Learning (supervised, unsupervised and reinforcement learning)</h4></article>
            <article><FaCheckCircle /><h4>ML Algorithms (S,candidate elimination,decision trees,KNN,Regression,Classification Algorithms)</h4></article>
            <article><FaCheckCircle /><h4>OpenCV</h4></article>
            <article><FaCheckCircle /><h4>YOLOv3</h4></article>
            <article><FaCheckCircle /><h4>Model Training</h4></article>
          </div>
        </div>

        <div className="skills-box">
          <h3>Data Analytics</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>Data Analysis</h4></article>
            <article><FaCheckCircle /><h4>Data Cleaning</h4></article>
            <article><FaCheckCircle /><h4>EDA</h4></article>
            <article><FaCheckCircle /><h4>Visualization</h4></article>
          </div>
        </div>

        <div className="skills-box">
          <h3>Leadership & Communication</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>Leadership</h4></article>
            <article><FaCheckCircle /><h4>Team Management</h4></article>
            <article><FaCheckCircle /><h4>Communication</h4></article>
            <article><FaCheckCircle /><h4>Critical Thinking</h4></article>
            <article><FaCheckCircle /><h4>Team Management</h4></article>
            <article><FaCheckCircle /><h4>Time Management</h4></article>
          </div>
        </div>

        <div className="skills-box">
          <h3>Core Concepts</h3>

          <div className="skills-content">
            <article><FaCheckCircle /><h4>Data Structures</h4></article>
            <article><FaCheckCircle /><h4>Algorithms</h4></article>
            <article><FaCheckCircle /><h4>Problem Solving</h4></article>
            <article><FaCheckCircle /><h4>OOP Concepts</h4></article>
            <article><FaCheckCircle /><h4>Web Development</h4></article>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;