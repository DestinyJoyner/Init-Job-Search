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

      <section className="desktopHome_content">Bottom</section>
    </div>
  );
}

export default DesktopHomePage;
