import { useContextProvider } from "../../Providers/Provider";
import SlideNav from "./SlideNav";
import Header from "../Job/Header.js"
import hamburger from "../../Assets/blue-hamburger-menu.png"
import "./Nav.css";

export default function Nav() {
  const { navbarClick, appHeader } = useContextProvider();

  return (
    <nav className="grid-center">
      <img src={hamburger} alt="hamburger-menu"
      className="burger" onClick={() => navbarClick()} />
      <Header header={appHeader} />
      <SlideNav />
    </nav>
  );
}
