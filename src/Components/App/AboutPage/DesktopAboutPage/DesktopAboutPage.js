import React from "react";
import SkillsComponent from "../../../Job/SkillsComponent";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import { team, desktopAboutInitTech } from "../AboutData";
import logo from "../../../../Assets/LOGO.png";
import "./DesktopAboutPage.scss";

function DesktopAboutPage(props) {
  return (
    <div className="desktopAboutPage init-card">
      <section className="desktopAboutPage_init">
        <section className="desktopAboutPage_init_header">
          <img src={logo} alt="init-logo" />
          <div className="desktopAboutPage_init_header_text">
            <h2>Your first tech opportunity awaits....</h2> 
            <span>"Bridging the gap between entry-level talent and employers hungry for fresh perspectives. inIT is not just a job search engine, it's a matchmaker, pairing bright-eyed graduates with companies eager to nurture and grow their talent."</span>
            </div>
        </section>

        <div className="desktopAboutPage_init_left">
          <h2>About inIT</h2>
          <p>{team[2]["bio"]}</p>
        </div>

        <hr />

        <div className="desktopAboutPage_init_right">
          <div className="desktopAboutPage_init_right_content">
            <h3>{desktopAboutInitTech["fe"].header}</h3>
            <p>{desktopAboutInitTech["fe"].subheader}</p>
            <SkillsComponent
              justList={true}
              skillsArr={desktopAboutInitTech["fe"].icons}
            />
          </div>

          <div className="desktopAboutPage_init_right_content">
            <h3>{desktopAboutInitTech["be"].header}</h3>
            <p>{desktopAboutInitTech["be"].subheader}</p>
            <SkillsComponent
              justList={true}
              skillsArr={desktopAboutInitTech["be"].icons}
            />
          </div>

          <div className="desktopAboutPage_init_right_content">
            <h3>{desktopAboutInitTech["ff"].header}</h3>
            <p>{desktopAboutInitTech["ff"].subheader}</p>
          </div>
        </div>
      </section>

      <section className="desktopAboutPage_developer">
        <div className="desktopAboutPage_developer_left">
          <h2>Meet the Developer</h2>
          <p>{team[1]["bio2"]}</p>
          <ContactLinks pursuit={true} />
        </div>

        <hr />

        <div className="desktopAboutPage_developer_right">
          <h2>Destiny Joyner</h2>
          <img src={team[1]["img"]} alt="init-developer" />
        </div>
      </section>
    </div>
  );
}

export default DesktopAboutPage;
