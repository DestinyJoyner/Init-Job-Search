import { useContextProvider } from "../../Providers/Provider";
import { useNavigate } from "react-router-dom";
import SlideNav from "./SlideNav";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


import logo from "../../Assets/LOGO.png";

import "./Nav.css";

export default function Nav() {
  const {
    navbarClick,
    openNav,
    setOpenNav,
  } = useContextProvider();
  const navigate = useNavigate();

  return (
    <nav>
      {!openNav ? (
        <RxHamburgerMenu
          className="burger"
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      ) : (
        <AiOutlineClose
          className="burger"
          size={"35px"}
          style={{ marginTop: "24px" }}
          color={"#41CDBC"}
          onClick={() => navbarClick()}
        />
      )}

      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
          setOpenNav(false);
        }}
      />

      {/* sliding nav bar section */}
      <SlideNav />
    </nav>

  );
}
