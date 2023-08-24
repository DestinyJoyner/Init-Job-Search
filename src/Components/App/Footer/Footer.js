import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin, GrMail } from "react-icons/gr";
import initWhite from "../../../Assets/init-no-text.png";
import blueTree from "../../App/HomePage/Images/init-tree-blue.png";
import pursuit from "../../../Assets/pursuit-init-blue.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nav-footer">
      <span>
        inIT <img src={initWhite} alt="init-logo" className="footer-init" /> May
        2023
      </span>
      <span>destinyjoyner@pursuit.org</span>
      <section className="footer-links">
        <a href="https://github.com/DestinyJoyner" target="blank">
          <FaGithubSquare className="footer-git" />
        </a>
        <a
          href="https://www.linkedin.com/in/destiny-joyner-934846243/"
          target="blank">
          <GrLinkedin className="footer-linked" />
        </a>
        <a href="mailto:destinyjoyner@pursuit.org" target="_blank">
          <GrMail className="footer-mail" />
        </a>
        <a href="https://www.pursuit.org/mission-vision" target="_blank">
          <img className="pursuit-nav" src={pursuit} alt="pursuit-logo" />
        </a>
      </section>
      <img src={blueTree} alt="init-tree-blue" className="footer-tree" />
    </footer>
  );
}
