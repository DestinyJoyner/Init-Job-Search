import SkillsComponent from "../../../Job/SkillsComponent";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import { team } from "../../AboutPage/AboutData";
import developerImage from "../../../../Assets/DJphoto.png";
import "./DesktopFooter.scss";

function DesktopFooter() {
  const developerBio = team["1"].bio2;
  const initBio = team["2"].bio2;
  const initTech = team["2"].build;
  const initSkills = team["2"].links;

  return (
    <div className="desktopFooter">

      <section 
      className="desktopFooter_about">
        <h2>About inIT</h2>
        <span 
        className="desktopFooter_about_bio">
          {initBio}
        </span>
        <h2>Technologies Used</h2>
        <span 
        className="desktopFooter_about_tech">
          {initTech}
          <SkillsComponent 
          justList={true} 
          skillsArr={initSkills} 
          />
        </span>
      </section>

      <section className="desktopFooter_developer">
        <h2>About The Developer</h2>
        <span 
        className="desktopFooter_developer_bio">
          {developerBio}
          <img 
          src={developerImage} 
          alt="developer-image" />
        </span>
        <h2 className="desktopFooter_developer_contact">
          Contact Me
        </h2>
        <ContactLinks />
      </section>

    </div>
  );
}

export default DesktopFooter;
