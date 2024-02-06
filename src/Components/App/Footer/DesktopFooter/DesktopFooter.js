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
      className="desktopFooter_init">
        <span 
        className="desktopFooter_init_about">
           <h2>About inIT</h2>
          {initBio}
        </span>
        
        <span 
        className="desktopFooter_init_tech">
          <h2>Technologies Used</h2>
          {/* {initTech} */}
          <SkillsComponent 
          justList={true} 
          skillsArr={initSkills} 
          />
        </span>
      </section>

      {/* <hr /> */}

      <section className="desktopFooter_developer">
        <span 
        className="desktopFooter_developer_bio">
          <h2>About The Developer</h2>
          {developerBio}
         
        </span>
        <img 
          src={developerImage} 
          alt="developer-image"
          className="desktopFooter_developer_photo" />
          <div className="desktopFooter_developer_contact">
          <h2>
          Contact Me
        </h2>
        <ContactLinks pursuit={true} />
          </div>
       
      </section>

    </div>
  );
}

export default DesktopFooter;
