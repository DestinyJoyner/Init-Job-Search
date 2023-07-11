import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import SlideNav from "./SlideNav";
import Header from "../Job/Header.js"
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/LOGO.png";
import "./Nav.css";

export default function Nav() {
  const { navbarClick, openNav, setOpenNav, appHeader } = useContextProvider();
  const navigate = useNavigate();

  function logoClick() {
    navigate("/");
    setOpenNav(false);
  }

  return (
    <nav className="grid-center">
        <RxHamburgerMenu className="burger" onClick={() => navbarClick()} />
      <Header header={appHeader} />

      <SlideNav />
    </nav>
  );
}
