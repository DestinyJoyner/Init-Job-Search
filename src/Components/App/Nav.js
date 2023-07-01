import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import SlideNav from "./SlideNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/LOGO.png";
import "./Nav.css";

export default function Nav() {
  const { navbarClick, openNav, setOpenNav } = useContextProvider();
  const navigate = useNavigate();

  function logoClick() {
    navigate("/");
    setOpenNav(false);
  }

  return (
    <nav className="grid-center">
      {!openNav ? (
        <RxHamburgerMenu className="burger" onClick={() => navbarClick()} />
      ) : (
        <AiOutlineClose className="burger" onClick={() => navbarClick()} />
      )}

      <img src={logo} alt="logo" onClick={() => logoClick()} />

      <SlideNav />
    </nav>
  );
}
