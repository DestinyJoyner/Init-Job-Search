import { useState, useEffect, useRef } from "react";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { Link } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";
import { TiArrowForward } from "react-icons/ti";
import { BsCaretDownFill } from "react-icons/bs";
import logo from "../../../Assets/LOGO.png";
import initTree from "./Images/init-tree-gold.png";
import finalTree from "./Images/init-tree-mint.png";
import teamStock from "./Images/team-stock.jpg";
import stock2 from "./Images/init-stock(2).jpg";
import stock3 from "./Images/init-stock(3).jpg";
import navScreen from "./Images/nav-screen-3.png";
import screen2 from "./Images/profile-screen-copy.png";
import screen3 from "./Images/applied-screen.png";
import screen4 from "./Images/job-screen-full.png";
import screen5 from "./Images/filter-screen.png";
import "./HomePage.css";

function HomePage() {
  const {setLoading} = useContextProvider()
  const {setAppHeader} = useNavProvider()
  const refElement = useRef();
  const [textSwitch, setTextSwitch] = useState(false);
  // const timeout = setInterval(() => {
  //   setTextSwitch(true);
  // }, 4000);

  // useEffect(() => {}, [textSwitch]);
  useEffect(() => {
    setAppHeader("Welcome to inIT")

    const timeout = setInterval(() => {
      setTextSwitch(true);
      setLoading(false)
    }, 4000);
  }, [])

  return (
    <div ref={refElement} className="home">
      <section>
        <div 
        onClick={() => {
          setLoading(false)
          setTextSwitch(true)
        }}
        className={textSwitch ? "hidden" : "show home-landing"}>
          <h2 className="home-italic">Welcome To</h2>
          <hr />
          <img src={logo} alt="logo" className="home-logo" />
          <hr />
          <span className=" home-italic">
            "Your First Tech Opportunity Awaits!"
          </span>
        </div>
        {/* AFTER FADE SLIDE*/}
        <div className={!textSwitch ? "hidden" : "show home-mission"}>
          <div className="misc1">
            <img className="mission-img" src={stock2} alt="home-img" />
          </div>
          <p className="home-italic">
            "Directly connecting employers specifically looking to fill entry
            level positions, with job seekers on the hunt for their first role
            in the field"
          </p>
          <div className="misc2">
            <img className="mission-img" src={stock3} alt="home-img" />
          </div>

          <img className="blue-tree" src={initTree} alt="blue-tree" />

          <Link className="home-sign" to="/login">
            LOG IN
          </Link>
          <Link className="home-register" to="/register">
            REGISTER NOW
          </Link>
          <span className="text-scroll">
            LEARN MORE
            <BsCaretDownFill />{" "}
          </span>

          <ScrollArrow element={refElement} />
        </div>
      </section>
      {/* SECOND SLIDE */}
      <section className="home-app-guide">
        <div className="nav-screen">
          <span>
            Easy to use Navigation!
            <TiArrowForward size={"30px"} />
          </span>
        </div>
        <img className="navbar-screen" src={navScreen} alt="navbar" />

        <img
          className="profile-screenshot"
          src={screen2}
          alt="profile-screen"
        />
        <div className="profile-screen">
          <span>
            Easy to Read Profile <i>IS</i> Your Resume!
            <TiArrowForward className="icon-vertical-flip" size={"30px"} />
          </span>
        </div>

        <div className="home-links-div">
          <Link className="home-register" to="/register">
            REGISTER NOW
          </Link>
          <Link className="home-sign" to="/login">
            LOG IN
          </Link>
        </div>
      </section>
      {/* THIRD SLIDE */}
      <section className="home-guide-2">
        <div className="applied-screen">
          <span>
            Keep Track of Your Job Applications!
            <TiArrowForward size={"30px"} />
          </span>
        </div>
        <img className="applied-screenshot" src={screen3} alt="applied" />

        <img className="job-screenshot" src={screen4} alt="job-screen" />
        <div className="job-screen">
          <span>
            One-Click Apply to Jobs At
            <br /> Your Skill Level!
          </span>
          <TiArrowForward className="icon-vertical-flip" size={"30px"} />
        </div>

        <div className="search-screen">
          <span>
            Job Search By City, Skills, and Remote Work
            <TiArrowForward className="icon-flip-down" size={"30px"} />
          </span>
        </div>
        <img className="search-screenshot" src={screen5} alt="searchbar" />

        <div className="home-links-div">
          <Link className="home-register" to="/register">
            REGISTER NOW
          </Link>
          <Link className="home-sign" to="/login">
            LOG IN
          </Link>
        </div>
      </section>
      {/* LAST SLIDE */}
      <section className="home-final">
        <img src={finalTree} alt="init-tree" className="init-tree-final" />

        <div className="misc4">
          <img src={teamStock} alt="misc" />
        </div>

        <Link className="home-sign" to="/login">
          <span>LOG IN</span>
        </Link>
        <Link className="home-register" to="/register">
          <span>REGISTER</span>
        </Link>
        <Link className="home-about" to="/about">
          <span>inIT TEAM</span>
        </Link>

        <span className="home-italic final-quote">
          Begin Your Tech Journey Today!
        </span>
      </section>
    </div>
  );
}

export default HomePage;
