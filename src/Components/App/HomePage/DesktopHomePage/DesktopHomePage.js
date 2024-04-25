import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../../Providers/Provider";
import ContactLinks from "../../../ContactLinks/ContactLinks.js";
import { homePageDataObj } from "../../Data/HomePageDataObj.js";
import { FaCheck } from "react-icons/fa6";
import logo from "../../../../Assets/LOGO.png";
import "./DesktopHomePage.scss"

function DesktopHomePage() {
  const { setLoading } = useContextProvider();
  const navigate = useNavigate();

  const {headerLeft, headerRight} = homePageDataObj
  const {a,b,c,d,} = headerLeft

  function generateHomePageListItems (dataObj) {
    return (<li>
      <FaCheck />
      <h4>{dataObj.header}</h4>
      <p>{dataObj.subheader}</p>
    </li>
    )
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="desktopHome init-card">
     <section className="desktopHome_header">
        <div className="desktopHome_header_left">
          <span>Your entry to <br/><b>Entry-Level</b> positions</span>
    {generateHomePageListItems(a)}
    {generateHomePageListItems(b)}
    {generateHomePageListItems(c)}
    {generateHomePageListItems(d)}
        </div>

        <div className="desktopHome_header_right init-card">
          <section className="desktopHome_header_right_container flex-align">
            <img src={logo} alt="init-logo" />
            <div className="desktopHome_header_right_container_content">
              <h3>{headerRight.header}</h3>
              <p>{headerRight.subheader}</p>
              <section className="desktopHome_header_right_container_content_buttons">
                <Link to="/register">Get Started</Link>
                <Link to="/jobs">Search Jobs</Link>
              </section>
            </div>
          </section>
        </div>
     </section>

     <section className="desktopHome_features">
     <div className="desktopHome_features_why">
          <h2>Why Choose inIT?</h2>
          <p>Statistics show that 40% of software developers struggle to find work within a year of boot camp or college completion. Often at times job postings advertised as "entry-level", require years of prior work experience. Furthermore, other job search engines, harbor a "social media" esque environment that can prove tedious and overwhelming.</p>
        </div>
        <div className="desktopHome_features_mission">
          <h2>Our Mission</h2>
          <p>inIT aims to alleviate the stress of job hunting by streamlining a connection between recruiters and entry-level software engineers. inIT allows you to showcase your personal and/or professional skill set and only hosts opportunities catered to developers with little or no professional work experience without the added efforts of robust profiles and timeline posts.</p>
        </div>

        <ContactLinks />
     </section>
    </div>
  
  );
}

export default DesktopHomePage;
