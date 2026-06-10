import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_to0ko4j",
        "template_1sh0u6u",
        form.current,
        "D5ZYK7ZSgkcil1Nc_"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="contact">

      <h5>Get In Touch</h5>

      <p className="contact-text">
        I do receive your messages and will respond ASAP
        if a valid email is provided :)
      </p>

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-options">

          <article className="contact-option">
            <MdEmail className="contact-icon" />

            <h4>Email</h4>

            <h5>
              anemoniakhila.12345@gmail.com
            </h5>

            <a
              href="mailto:anemoniakhila.12345@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact-option">
            <FaLinkedin className="contact-icon" />

            <h4>LinkedIn</h4>

            <h5>Connect With Me</h5>

            <a
              href="https://www.linkedin.com/in/anemoni-akhila-b11054298"
              target="_blank"
              rel="noreferrer"
            >
              Open Profile
            </a>
          </article>

          <article className="contact-option">
            <FaGithub className="contact-icon" />

            <h4>GitHub</h4>

            <h5>AAKHILA9</h5>

            <a
              href="https://github.com/AAKHILA9"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="btn-send"
          >
            Send Message
          </button>

          {success && (
            <p className="success-message">
              Message Sent Successfully!
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;