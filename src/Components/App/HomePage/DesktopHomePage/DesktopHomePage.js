import { Link, useNavigate } from "react-router-dom";
import DesktopFooter from "../../Footer/DesktopFooter/DesktopFooter";
import logo from "../../../../Assets/LOGO.png";
import stockImage1 from "../Images/init-stock(1).jpg"
import stockImage2 from "../Images/init-stock(2).jpg";
import "./DesktopHomePage.scss";

function DesktopHomePage() {
  const navigate = useNavigate()
  return (
    <div className="desktopHome">
      <section className="desktopHome_header">
        <img className="desktopHome_header_logo" src={logo} alt="init-logo" />
        <span className="desktopHome_header_text">
          <h2 className="desktopHome_header_text_title">
            Land your first tech opportunity with inIT!
          </h2>
          <span className="desktopHome_header_text_mission">
            "Directly connecting employers looking to fill entry level positions, with sotware engineers on the hunt for their first role in the tech industry"
          </span>
        </span>

        <button className="desktopHome_header_button"
        onClick={() => navigate("/jobs")}>
          SEARCH JOBS NOW!</button>
      </section>

      <section className="desktopHome_content_init">

        <section className="desktopHome_content_init_one">
          <div className="desktopHome_content_init_one_text">
            <span className="desktopHome_content_init_question">
              Why Choose inIT?
            </span>
            <p className="desktopHome_content_init_answer">
                Statistics show that 40% of software developers struggle to find work within a year
                of boot camp or college completion. Often at times job postings advertised as "entry-level", require years of prior work experience. Furthermore, 
                other job search engines, harbor a "social media" esque environment
                that can prove tedious and overwhelming. 
            </p>
          </div>

          <img
            className="desktopHome_content_init_stock2"
            src={stockImage1}
            alt="stock-image"
          />
        </section>

        <section className="desktopHome_content_init_two">
          <img
            className="desktopHome_content_init_stock2"
            src={stockImage2}
            alt="stock-image"
          />
          <div className="desktopHome_content_init_one_text">
            <span className="desktopHome_content_init_question">
              Our Mission?
            </span>
            <p className="desktopHome_content_init_answer">
             inIT aims to alleviate the stress of job hunting by streamlining a connection between recruiters and entry-level software engineers. inIT allows you to showcase your personal and/or professional skill set and only hosts opportunities catered to developers with little or no professional work experience without the added efforts of robust profiles and timeline posts. 
             So <Link to="/register">Register</Link> or <Link to="/login">Login</Link> today, and let
             inIT help you land that critical first opportunity in the tech industry!
            </p>
          </div>
        </section>
      </section>

     <DesktopFooter />
    </div>
  );
}

export default DesktopHomePage;
