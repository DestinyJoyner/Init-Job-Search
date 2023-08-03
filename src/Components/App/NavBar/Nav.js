import { useNavProvider } from "../../../Providers/NavProvider";
import SlideNav from "./SlideNav/SlideNav";
import Header from "../../Job/Header.js"
import hamburger from "../../../Assets/blue-hamburger-menu.png"
import "./Nav.scss";

export default function Nav() {
  const { navbarClick, appHeader } = useNavProvider()

  return (
    <nav className="navBar grid-center">
      <img 
      src={hamburger} alt="hamburger-menu"
      className="navBar_burger" 
      onClick={() => navbarClick()} />

      <Header header={appHeader} />
      
      <SlideNav />
    </nav>
  );
}
