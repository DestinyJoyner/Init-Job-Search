import { useEffect, useState } from "react";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import SkillsComponent from "../../Job/SkillsComponent.js";
import SliderButtons from "../../SliderButton/SliderButtons.js"
import LoginHeader from "../../Login/LoginHeader/LoginHeader.js"
import ContactLinks from "../../ContactLinks/ContactLinks.js";
import { team } from "./AboutData";
import "./AboutPage.css";

function AboutPage() {
  const { setAppHeader } = useNavProvider()
  const [profileCard, setProfileCard] = useState(team["2"]);
  const [toggleView, setToggleView] = useState("init")

  useEffect(() => setAppHeader("About"), [])

  useEffect(() => {
    if(toggleView === "init"){
      setProfileCard(team["2"])
    }
    else {
      setProfileCard(team["1"])
    }
  }, [toggleView])

  return (
    <div className="about grid-center">

      <LoginHeader />
    
        <SliderButtons 
        button1={"Init"}
        button2={"Developer"}
        setFunction={setToggleView}/>

     
      {profileCard.id ===  2 ? (
        <div className="emptyState grid-center">

          <img src={profileCard.img} className="emptyState_img"></img>
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
          <ContactLinks pursuit={false} />
        </div>
      )}
    </div>
  );
}

export default AboutPage;
