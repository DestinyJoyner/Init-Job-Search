import { useNavProvider } from "../../../../Providers/NavProvider";
import SlideNavLinkList from "./SlideNavLinkList";
import DarkModeSlider from "./DarkModeSlider/DarkModeSlider";
import Footer from "../../Footer/Footer";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../../Assets/LOGO.png"
import "./SlideNav.scss";

function SlideNav() {
  const { navbarClick, openNav } = useNavProvider();

  return (
    <div
      className={
        openNav
          ? " slideNav_container slideNav_open"
          : " slideNav_container slideNav_close"
      }
    >
      <div className="slideNav_transparent" onClick={() => navbarClick()}></div>

      <aside className="slideNav">
        <section className="slideNav_header">
          <div className="slideNav_header_logo_container">
            <img src={logo} alt="init-logo" className="slideNav_header_logo" />
            <AiOutlineClose
              className="slideNav_closeButton"
              onClick={() => navbarClick()}
            />
          </div>
          <p className="slideNav_header_slogan">
            Your first tech opportunity awaits
          </p>
        </section>
        <hr className="slideNav_divider"></hr>
        <SlideNavLinkList />
        <hr className="slideNav_divider"></hr>
        <DarkModeSlider />
        <Footer />
      </aside>
    </div>
  );
}

export default SlideNav;
