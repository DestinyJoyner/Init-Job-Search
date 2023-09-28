import LoginPage from "../LoginPage/LoginPage.js";
import loginStock from "../../../Assets/desktop-login-stock.jpg"
import "./DesktopLoginPage.scss";

function DesktopLoginPage() {
  return (
    <div className="desktopLoginPage">
      <section className="desktopLoginPage_content">
        <section className="desktopLoginPage_content_left grid-center">

            <div className="desktopLoginPage_content_left_container">
            <img src={loginStock} alt="login-stock" className="desktopLoginPage_content_left_container_image"/>
            </div>
         

            <div className="desktopLoginPage_content_left_header">
              <span className="desktopLoginPage_content_left_header_top">Welcome Back To inIT</span>
              <span className="desktopLoginPage_content_left_header_bottom">Streamline Your Path into Tech
                </span>
            </div>

            <div className="desktopLoginPage_content_left_subHeader">
                <span className="desktopLoginPage_content_left_subHeader_top">
                Your Entry to Entry-Level Jobs
                </span>
                <span className="desktopLoginPage_content_left_subHeader_bottom">
                inIT aims to connect employers looking to fill entry level positions, with job seekers on the hunt for their first role in the tech industry  
                </span>
            </div>

            <span className="desktopLoginPage_content_left_featureHeader">
                Features:
            </span>

            <ul className="desktopLoginPage_content_left_featureList">
                <li>No prior work experience</li>
                <li>Only Entry-Level positions</li>
                <li>Showcase Your Personal Projects</li>
                <li>Track Your Applications</li>
                <li>Search Jobs by skill, location, and remote options</li>
                <li>Manageable, concise profiles</li>

            </ul>
        </section>
        <LoginPage />
      </section>
    </div>
  );
}

export default DesktopLoginPage;
