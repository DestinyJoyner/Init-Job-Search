// import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import SlideNav from "./SlideNav";
import Header from "../Job/Header.js"
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi"
import hamburger from "../../Assets/blue-hamburger-menu.png"
import "./Nav.css";

export default function Nav() {
  const { navbarClick, appHeader } = useContextProvider();
  // const navigate = useNavigate();

  return (
    <nav className="grid-center">
      <img src={hamburger} alt="hamburger-menu"
      className="burger2" onClick={() => navbarClick()} />
        {/* <RxHamburgerMenu className="burger" onClick={() => navbarClick()} /> */}
      <Header header={appHeader} />

      <SlideNav />
    </nav>
  );
}
