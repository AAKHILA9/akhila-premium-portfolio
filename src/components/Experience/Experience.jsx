
import "./Experience.css";

import datalake from "../../assets/experience/datalake.png";
import edunet from "../../assets/experience/edunet.png";
import saiket from "../../assets/experience/saiket.png";
import infosys from "../../assets/experience/infosys.png";
import hmits from "../../assets/experience/hmits.png";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h5>My Professional Journey</h5>
      <h2>Experience</h2>

      <div className="timeline">

        {/* Junior Software Engineer */}

        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Junior Software Engineer</h3>
            <h4>Datalake Solutions Pvt. Ltd.</h4>

            <p>
              Working on frontend development using React.js,
              building scalable web applications, responsive UI
              components and enterprise software solutions.
            </p>

            <a
              href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_newbeginnings-internship-datalakesolutions-activity-7426850830474956803-OEKq?utm_source=share&utm_medium=member_android&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Offer Letter
            </a>
          </div>

          <div className="timeline-icon">
            <img src={datalake} alt="Datalake" />
          </div>

          <div className="timeline-date">
            Present
          </div>
        </div>

        {/* Software Engineer Intern */}

        <div className="timeline-item right">
          <div className="timeline-date">
            2025
          </div>

          <div className="timeline-icon">
            <img src={datalake} alt="Datalake" />
          </div>

          <div className="timeline-content">
            <h3>Software Engineer Intern</h3>
            <h4>Datalake Solutions Pvt. Ltd.</h4>

            <p>
              Developed responsive web applications,
              implemented React.js components,
              debugging and collaborating with development teams.
            </p>

            <a
              href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_newbeginnings-internship-datalakesolutions-activity-7426850830474956803-OEKq?utm_source=share&utm_medium=member_android&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Offer Letter
            </a>
          </div>
        </div>

        {/* Edunet */}

        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>AI & ML Intern</h3>
            <h4>Edunet Foundation</h4>

            <p>
              Worked on Artificial Intelligence and Machine Learning
              projects including model development, data processing
              and analytics.
            </p>

            <a
              href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_ai-techsaksham-microsoft-activity-7310913946742345729-jezw?utm_source=share&utm_medium=member_android&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="timeline-icon">
            <img src={edunet} alt="Edunet" />
          </div>

          <div className="timeline-date">
            2025
          </div>
        </div>

        {/* Saiket */}

        <div className="timeline-item right">
          <div className="timeline-date">
            2024
          </div>

          <div className="timeline-icon">
            <img src={saiket} alt="Saiket" />
          </div>

          <div className="timeline-content">
            <h3>Machine Learning Intern</h3>
            <h4>Saiket Systems</h4>

            <p>
              Worked on Machine Learning algorithms,
              model training, data preprocessing,
              evaluation and prediction systems.
            </p>

            <a
              href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_dataanalytics-internship-achievement-activity-7310915611079966722-nEKd?utm_source=share&utm_medium=member_android&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* Infosys */}

        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Infosys Springboard Trainee</h3>
            <h4>Infosys Springboard</h4>

            <p>
              Completed industry-oriented learning programs
              in Artificial Intelligence, NLP, RPA and
              Intelligent Document Processing.
            </p>

            <a
              href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_selectedwithpride-infosysspringboard-pragatiinternship-activity-7355883036002930688-_482?utm_source=share&utm_medium=member_android&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Certificate
            </a>
          </div>

          <div className="timeline-icon">
            <img src={infosys} alt="Infosys" />
          </div>

          <div className="timeline-date">
            2024
          </div>
        </div>

        {/* DCR */}

        <div className="timeline-item right">
          <div className="timeline-date">
            2023 - 2026
          </div>

          <div className="timeline-icon">
            <img src={hmits} alt="HMITS" />
          </div>

          <div className="timeline-content">
            <h3>Department Class Representative</h3>
            <h4>Holy Mary Institute of Technology and Science</h4>

            <p>
              Represented student concerns, coordinated academic
              activities, organized events and maintained
              communication between students and faculty.
            </p>

            <a
              href="https://www.linkedin.com/in/anemoni-akhila-b11054298"
              target="_blank"
              rel="noreferrer"
              className="exp-btn"
            >
              View Details
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;

