import logo from "../../../../Assets/LOGO.png";
import "./DesktopHomePage.scss";

function DesktopHomePage(props) {
  return (
    <div className="desktopHome">
      <section className="desktopHome_header">
        <img className="desktopHome_header_logo" src={logo} alt="init-logo" />
        <span className="desktopHome_header_text">
          <h2 className="desktopHome_header_text_title">
            Land your first tech opportunity with inIT!
          </h2>
          <span className="desktopHome_header_text_mission">
            "Directly connecting employers specifically looking to fill entry
            level positions, with job seekers on the hunt for their first role
            in the field"
          </span>
        </span>

        <button className="desktopHome_header_button">SEARCH JOBS NOW!</button>
      </section>

      <section className="desktopHome_content_init">

        <section className="desktopHome_content_init_one">
        <span className="desktopHome_content_init_question">
            Why Choose inIT?
        </span>
        <ul className="desktopHome_content_init_answer">
           <li>40% of software developers struggle to find work within a year of boot camp or college completion</li> 
           <li>Identifying jobs for entry-level developers with little to no experience can be difficult</li>
           <li>Other job search engines, harbor a "social media" environment that can prove tedious and overwhelming </li>
        </ul>
        </section>

        <section className="desktopHome_content_init_two">
        <span className="desktopHome_content_init_question">
            Our Mission?
        </span>
        <ul className="desktopHome_content_init_answer">
           <li>40% of software developers struggle to find work within a year of boot camp or college completion</li> 
           <li>Identifying jobs for entry-level developers with little to no experience can be difficult</li>
           <li>Other job search engines, harbor a "social media" environment that can prove tedious and overwhelming </li>
        </ul>
        </section>
       
      </section>

      <section className="desktopHome_content">About</section>
    </div>
  );
}

export default DesktopHomePage;
