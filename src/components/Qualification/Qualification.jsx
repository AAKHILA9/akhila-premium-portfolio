import "./Qualification.css";

import hits from "../../assets/education/hits.jpg";
import prathibha from "../../assets/education/prathibha.jpg";
import zphs from "../../assets/education/zphs.jpg";

function Qualification() {
  return (
    <section className="qualification" id="qualification">

      <h5>My Academic Journey</h5>
      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <img src={hits} alt="Holy Mary Institute" />

          <div className="education-content">
            <h3>
              Holy Mary Institute of Technology and Science
              (2022 - 2026)
            </h3>

            <p>
              Computer Science and Engineering - Data Science (CSD)
            </p>

            <span>CGPA : 9.4</span>

            <a
              href="https://www.hits.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="edu-btn"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="education-card">
          <img src={prathibha} alt="Prathibha Girls Junior College" />

          <div className="education-content">
            <h3>
              Prathibha Girls Junior College, Shadnagar
              (2020 - 2022)
            </h3>

            <p>
              Class : XII
              <br />
              Major : Science (Physics, Chemistry, Mathematics)
            </p>

            <span>Grade : 98%</span>

            <a
              href="https://www.facebook.com/p/Prathibha-Girls-Junior-College-100083402437850/"
              target="_blank"
              rel="noreferrer"
              className="edu-btn"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="education-card">
          <img src={zphs} alt="ZPHS Keshampet" />

          <div className="education-content">
            <h3>
              Zilla Parishad High School,
              Keshampet, Rangareddy
              (2020)
            </h3>

            <p>Class : X</p>

            <span>CGPA : 10</span>

            <a
              href="https://youtube.com/@zphs_keshampet_?si=QirqnxEmYXrkehdk"
              target="_blank"
              rel="noreferrer"
              className="edu-btn"
            >
              Visit Website
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Qualification;