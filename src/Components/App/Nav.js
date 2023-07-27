import { useContextProvider } from "../../Providers/Provider";
import { useNavProvider } from "../../Providers/NavProvider";
import SlideNav from "./SlideNav";
import Header from "../Job/Header.js"
import hamburger from "../../Assets/blue-hamburger-menu.png"
import "./Nav.css";

export default function Nav() {
  const { appHeader } = useContextProvider();
  const { navbarClick } = useNavProvider()

  return (
    <nav className="grid-center">
      <img src={hamburger} alt="hamburger-menu"
      className="burger" onClick={() => navbarClick()} />
      <Header header={appHeader} />
      <SlideNav />
    </nav>
  );
}
