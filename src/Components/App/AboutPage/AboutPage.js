import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import SkillsComponent from "../../Job/SkillsComponent.js";
import { team } from "./AboutData";
import logo from "../../../Assets/LOGO.png"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./AboutPage.css";

function AboutPage() {
  const { setAppHeader } = useNavProvider()
  const [profileCard, setProfileCard] = useState(team["2"]);

  const iconArr = [
    <BsGithub />,
    <BsLinkedin />,
    <GrMail className="about-mail" />,
  ];

  function aboutCard(e) {
    if (profileCard.id === +e.target.id) {
      setProfileCard(team["2"]);
    } else {
      setProfileCard(team[e.target.id]);
    }
  }

  useEffect(() => setAppHeader("About inIT"), [])

  return (
    <div className="about grid-center">
      <div className="dev-icons grid-center">
        <img
          id="1"
          className="devicon"
          src={team["1"].img}
          onClick={(event) => aboutCard(event)}
        ></img>
        <span className="devLogo">
        <img
          id="2"
          className=""
          src={logo}
          onClick={(event) => aboutCard(event)}
        />
        </span>
        
      </div>
      {profileCard.id === 2 ? (
        <div className="emptyState grid-center">
          <h2>{profileCard.name}</h2>
          <img src={profileCard.img}></img>
          <p>{profileCard.bio}</p>
          <hr />
          <SkillsComponent justList={true} skillsArr={profileCard.links} />
          <hr />
        </div>
      ) : (
        <div className="indiv-card grid-center">
          <h2>{profileCard.name}</h2>
          <h4 className="devPronoun">{profileCard.pronoun}</h4>
          <img className="devicon2" src={profileCard.img}></img>
          <h3>{profileCard.role}</h3>
          <p>{profileCard.bio}</p>
          <hr />
          <div className="dev-socials">
            {profileCard.links.length > 0 &&
              profileCard.links.map((el, i) => (
                <a key={uuidv4()} href={el} target="_blank">
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
