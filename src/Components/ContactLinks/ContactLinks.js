import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import pursuit from "../../Assets/pursuit-blue-logo.jpg"
import "./ContactLinks.scss"

function ContactLinks() {
    return (
        <section className="contactLinks">
          <a href="https://github.com/DestinyJoyner" target="blank">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/destiny-joyner-934846243/"
            target="blank"
          >
            <BsLinkedin />
          </a>
          <a href="mailto:destinyjoyner@pursuit.org" target="_blank">
            <SiGmail />
          </a>
          <a href="https://www.pursuit.org/mission-vision" target="_blank">
          <img className="contactLinks_pursuit" src={pursuit} alt="pursuit-logo" />
        </a>
        </section>
    );
}

export default ContactLinks;