import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import SkillsComponent from "../Job/SkillsComponent.js"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { team } from "./AboutData";
import DMphoto from "../../Assets/DMphoto.png";
import SMphoto from "../../Assets/SMphoto.jpg";
import DJphoto from "../../Assets/DJphoto.png"
import Header from "../Job/Header";
import "../App/AboutPage.css";

function AboutPage(props) {
  const [profileCard, setProfileCard] = useState(team["6"]);

  const iconArr = [<BsGithub />, <BsLinkedin />, <IoMdMail />];

  function aboutCard(e) {
    if (profileCard.id === +e.target.id) {
      setProfileCard(team["6"]);
    } else {
      setProfileCard(team[e.target.id]);
    }
  }

  return (
    <div className="about grid-center">
      <Header header={"Meet The Team"} />
      <div className="dev-icons grid-center">
        <img
          id="1"
          className="devicon"
          src={DJphoto}
          onClick={(event) => aboutCard(event)}
        ></img>
        <img
          id="2"
          className="devicon"
          src={DMphoto}
          onClick={(event) => aboutCard(event)}
        ></img>
        <img
          id="3"
          className="devicon"
          src={SMphoto}
          onClick={(event) => aboutCard(event)}
        ></img>
      </div>
      {
      profileCard.id === 6 ? 
      (
        <div className="emptyState grid-center">
          <h2>{profileCard.name}</h2>
          <img src={profileCard.img}></img>
          <p>{profileCard.bio}</p>
          <hr className="socials-line"></hr>
          <SkillsComponent justList={true}
          skillsArr={profileCard.links} />
          <hr className="socials-line"></hr>
        </div>
      ) : (
        <div className="indiv-card grid-center">
          <h2>{profileCard.name}</h2>
          <h4 className="devPronoun">{profileCard.pronoun}</h4>
          <img className="devicon2" src={profileCard.img}></img>
          <p>{profileCard.bio}</p>
          <hr className="socials-line"></hr>
          <div className="dev-socials">
            {profileCard.links.length > 0 &&
              profileCard.links.map((el, i) => (
                <a 
                key={uuidv4()}
                href={el} 
                target="_blank">
                  {iconArr[i]}
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
