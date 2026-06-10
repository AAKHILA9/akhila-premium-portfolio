import "./Projects.css";

import portfolio from "../../assets/projects/portfolio.png";
import municipality from "../../assets/projects/municipality.png";
import attendance from "../../assets/projects/attendance.png";
import scarecrow from "../../assets/projects/scarecrow.png";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img src={portfolio} alt="Portfolio Website" />

          <div className="project-content">
            <h3>Personal Portfolio Website</h3>

            <p>
              A modern responsive portfolio website showcasing
              my education, technical skills, certifications,
              achievements, experience and projects in a
              professional and interactive manner.
            </p>

            <div className="tech-stack">
              React.js • JavaScript • HTML • CSS • Vite
            </div>

            <a
              href="/projects/portfolio.png"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={municipality} alt="Municipality Project" />

          <div className="project-content">
            <h3>Smart Municipality Workforce Response System</h3>

            <p>
              Selected for Smart India Hackathon 2025.
              A smart civic platform for workforce allocation,
              complaint management, task assignment and
              real-time response tracking.
            </p>

            <div className="tech-stack">
              React.js • Node.js • MySQL • JavaScript
            </div>

            <a
              href="/projects/municipality.mp4"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={attendance} alt="Attendance System" />

          <div className="project-content">
            <h3>Attendance Management System</h3>

            <p>
              Face recognition based attendance management
              system that automatically identifies students
              and records attendance accurately in real time.
            </p>

            <div className="tech-stack">
              Python • OpenCV • Face Recognition • MySQL
            </div>

            <a
              href="/projects/attendance.png"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={scarecrow} alt="AI Scarecrow" />

          <div className="project-content">
            <h3>AI Based Scarecrow Using YOLOv3</h3>

            <p>
              AI-powered agriculture solution that detects
              birds and animals entering farmland and
              automatically activates protection mechanisms.
            </p>

            <div className="tech-stack">
              Python • YOLOv3 • OpenCV • Machine Learning
            </div>

            <a
              href="/projects/scarecrow.png"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;