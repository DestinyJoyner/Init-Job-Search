import SkillsComponent from "../../../Job/SkillsComponent";
import { team } from "../../AboutPage/AboutData";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import developerImage from "../../../../Assets/DJphoto.png";
import pursuit from "../../../../Assets/pursuit-blue-logo.jpg"
import "./DesktopFooter.scss";

function DesktopFooter() {
  const developerBio = team["1"].bio2;
  const initBio = team["2"].bio2;
  const initTech = team["2"].build;
  const initSkills = team["2"].links;

  return (
    <div className="desktopFooter">

      <section className="desktopFooter_about">
        <h2>About inIT</h2>
        <span className="desktopFooter_about_bio">{initBio}</span>
        <h2>Technologies Used</h2>
        <span className="desktopFooter_about_tech">
          {initTech}
          <SkillsComponent justList={true} skillsArr={initSkills} />
        </span>
      </section>

      <section className="desktopFooter_developer">
        <h2>About The Developer</h2>
        <span className="desktopFooter_developer_bio">
          {developerBio}
          <img src={developerImage} alt="developer-image" />
        </span>
        <h2 className="desktopFooter_developer_contact">Contact Me</h2>

        <section className="desktopFooter_developer_links">
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
          <img className="desktopFooter_developer_links_pursuit" src={pursuit} alt="pursuit-logo" />
        </a>
        </section>

      </section>

    </div>
  );
}

export default DesktopFooter;
