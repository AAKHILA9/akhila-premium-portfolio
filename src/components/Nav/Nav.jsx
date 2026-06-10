import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav className="bottom-nav">

      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>

      <a
        href="#qualification"
        onClick={() => setActiveNav("#qualification")}
        className={activeNav === "#qualification" ? "active" : ""}
      >
        <FaGraduationCap />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>

    </nav>
  );
}

export default Nav;