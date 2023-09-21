import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DesktopFooter from "../../Footer/DesktopFooter/DesktopFooter";
import FeatureThumbnail from "../../../FeatureThumbnail/FeatureThumbnail.js";
import { thumbnailArr } from "../../Data/FeatureThumbnailArray";
import logo from "../../../../Assets/LOGO.png";
import stockImage1 from "../Images/init-stock(1).jpg"
import stockImage2 from "../Images/init-stock(2).jpg";
import { emailInvalid } from "../../Data/Icons";
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
            Whether you are an entry-level engineer looking to jump start your career in tech, or a recruiter looking to fill entry-level positions at a company, inIT is here to connect you!
          </span>
        </span>

        <button className="desktopHome_header_button"
        onClick={() => navigate("/jobs")}>
          SEARCH JOBS NOW!</button>

      {/* <div className="desktopHome_header_accountLinks">
      <Link to="/login">
          <span>Log In</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div> */}
          
      </section>

      {/* <div className="desktopHome_header_accountLinks">
      <Link to="/login">
          <span>LOG IN</span>
        </Link>
        <Link to="/register">
          <span>REGISTER</span>
        </Link>
      </div> */}
      <span className="desktopHome_header_disclaimer">**{emailInvalid}inIT is was designed in MOBILE VIEW first. Some desktop components are currently in the process of being designed. Currently, for best viewing of inIT resize the window to under 850px or open in a MOBILE browser. </span>

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

      <section className="desktopHome_features grid-center">
        <h3>Start Your Tech Career With inIT</h3>

        <span>We remove the hassle in beginning your career in tech, connecting you directly with opportunities at your skill level.</span>

        <section className="desktopHome_features_thumbnails">
          {
            thumbnailArr.map(obj => <FeatureThumbnail 
              key= {uuidv4()} 
              thumbnailObj={obj}/>)
          }
        </section>


      </section>

     <DesktopFooter />
    </div>
  );
}

export default DesktopHomePage;
