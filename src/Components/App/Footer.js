import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import avatar from "../../Assets/init-footer.png";
import pursuit from "../../Assets/pursuit-init-blue.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nav-footer">
      <div>
        <span className="square1">
          <img src={avatar} alt="footer-avatar" />
        </span>
      </div>
      <div>
        <section className="square2">
          <span>Destiny Joyner</span>
          <span className="footer-email">destinyjoyner@pursuit.org</span>
          <span>May 2023</span>
        </section>
      </div>

      <div>
        <section className="footer-links grid-center">
          <span>
            <a href="https://github.com/DestinyJoyner" target="blank">
              <FaGithubSquare className="footer-git" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/destiny-joyner-934846243/"
              target="blank"
            >
              <GrLinkedin className="footer-linked" />
            </a>
          </span>
          <span className="pursuit-nav">
            <a href="https://www.pursuit.org/mission-vision" target="_blank">
              <img src={pursuit} alt="pursuit-logo" />
            </a>
          </span>
        </section>
      </div>
    </footer>
  );
}
