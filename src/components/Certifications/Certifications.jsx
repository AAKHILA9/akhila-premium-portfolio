import "./Certifications.css";

import saiket from "../../assets/certifications/saiket.png";
import edunet from "../../assets/certifications/edunet.png";
import infosys from "../../assets/certifications/infosys springboard.png";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <h5>Courses / Certifications</h5>
      <h2>My Certifications</h2>

      <div className="certifications-container">

        <div className="certificate-card">
          <img src={saiket} alt="Saiket Systems" />

          <h3>
            Saiket Systems
          </h3>

          <p>
            Machine Learning Internship
          </p>

          <a
            href="/certificates/saiket.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

        <div className="certificate-card">
          <img src={edunet} alt="Edunet Foundation" />

          <h3>
            Edunet Foundation
          </h3>

          <p>
            AI & ML Internship
          </p>

          <a
            href="/certificates/edunet.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

        <div className="certificate-card">
          <img src={infosys} alt="Infosys" />

          <h3>
            Infosys Springboard
          </h3>

          <p>
            Artificial Intelligence
          </p>

          <a
            href="/certificates/infosys-ai.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

        <div className="certificate-card">
          <img src={infosys} alt="Infosys" />

          <h3>
            Infosys Springboard
          </h3>

          <p>
            Intelligent Document Processing
          </p>

          <a
            href="/certificates/infosys IDS.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

        <div className="certificate-card">
          <img src={infosys} alt="Infosys" />

          <h3>
            Infosys Springboard
          </h3>

          <p>
            Natural Language Processing
          </p>

          <a
            href="/certificates/infosys NLP.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

        <div className="certificate-card">
          <img src={infosys} alt="Infosys" />

          <h3>
            Infosys Springboard
          </h3>

          <p>
            Robotic Process Automation
          </p>

          <a
            href="/certificates/infosys rpa.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            Certificate
          </a>
        </div>

      </div>

    </section>
  );
}

export default Certifications;