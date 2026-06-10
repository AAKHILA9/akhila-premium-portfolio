import "./Achievements.css";

import sih from "../../assets/achievements/sih.png";
import ijert from "../../assets/achievements/ijert.png";
import orientation from "../../assets/achievements/orientation.png";
import kyros from "../../assets/achievements/kyros.png";
import intermediate from "../../assets/achievements/intermediate.png";
import academic from "../../assets/achievements/academic.png";

function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <h5>My Milestones</h5>
      <h2>Achievements</h2>

      <div className="achievements-container">

        <div className="achievement-card">
          <img src={sih} alt="SIH" />

          <h3>Smart India Hackathon 2025</h3>

          <p>
            Selected to National Level in SIH-2025 for
            Smart Municipality Workforce Response System
          </p>

          <a
            href="https://www.linkedin.com/posts/anemoni-akhila-b11054298_sih2025-smartindiahackathon-innovation-activity-7376451287355351040-D7Xj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfo9j0BjzxbzU6qSBhMzYMnI9WRRg6WDC8"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

        <div className="achievement-card">
          <img src={ijert} alt="IJERT" />

          <h3>Research Publication</h3>

          <p>
            Published a paper in IJERT
            (Paper ID: IJERTV151S020435)
          </p>

          <a
            href="/achievements/ijert.jpeg"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

        <div className="achievement-card">
          <img src={orientation} alt="Orientation" />

          <h3>Event Organizer</h3>

          <p>
            Successfully Organized
            Orientation Day Program
          </p>

          <a
            href="/achievements/orientation.jpg"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

        <div className="achievement-card">
          <img src={kyros} alt="KYROS" />

          <h3>Runner-Up</h3>

          <p>
            Poster Presentation on
            Cutting Edge Technologies in IoT
          </p>

          <a
            href="/achievements/kyros.jpeg"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

        <div className="achievement-card">
          <img src={intermediate} alt="Intermediate Topper" />

          <h3>Intermediate Topper</h3>

          <p>
            Achieved College First in MPC
            with 98%
          </p>

          <a
            href="/achievements/intermediate.jpeg"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

        <div className="achievement-card">
          <img src={academic} alt="Academic Excellence" />

          <h3>Academic Excellence</h3>

          <p>
            College First in 2nd & 6th Semester
            B.Tech (CGPA 9.50 & 9.55)
          </p>

          <a
            href="/achievements/academic.jpeg"
            target="_blank"
            rel="noreferrer"
            className="achievement-btn"
          >
            Certificate
          </a>
        </div>

      </div>

    </section>
  );
}

export default Achievements;