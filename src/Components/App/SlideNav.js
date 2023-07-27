import { useNavProvider } from "../../Providers/NavProvider";
import SlideNavLinkList from "./SlideNavLinkList";
import DarkModeSlider from "./DarkModeSlider";
import Footer from "./Footer";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/LOGO.png";
import "./SlideNav.css";

function SlideNav() {
  const { navbarClick, openNav } = useNavProvider();

  return (
    <div
      className={
        openNav
          ? " slide-nav-container nav-open"
          : " slide-nav-container nav-close"
      }
    >
      <div
        className="slide-nav-transparent"
        onClick={() => navbarClick()}
      ></div>

      <aside className="slide-nav">
        <section className="slide-nav-header">
          <div className="slide-nav-header-logo-container">
            <img src={logo} alt="init-logo" className="slide-nav-header-logo" />
            <AiOutlineClose
              className="slide-nav-close"
              onClick={() => navbarClick()}
            />
          </div>

          <p className="slogan">Your first tech opportunity awaits</p>
        </section>
        <hr className="top-slide-nav-line"></hr>

        <SlideNavLinkList />
        <hr className="bottom-slide-nav-line"></hr>
        <DarkModeSlider />
        <Footer />
      </aside>
    </div>
  );
}

export default SlideNav;
