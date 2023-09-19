import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import pursuitLogo from "../../Assets/pursuit-blue-logo.jpg"
import "./ContactLinks.scss"

function ContactLinks({pursuit, init}) {
    return (
        <section className="contactLinks">
          <a href={!init ? "https://github.com/DestinyJoyner" : "https://github.com/DestinyJoyner/Init-Job-Search"} target="blank">
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
          {
            pursuit && 
            <a 
            href="https://www.pursuit.org/mission-vision" 
            target="_blank">
              <img 
              className="contactLinks_pursuit" 
              src={pursuitLogo} 
              alt="pursuit-logo" />
            </a>
          }
          
        </section>
    );
}

export default ContactLinks;