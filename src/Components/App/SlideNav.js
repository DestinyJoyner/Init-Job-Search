import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import Footer from "./Footer";
import SlideNavLink from "./SlideNavLink";
import {
  navLogout,
  navProfile,
} from "../Job/Data/Icons";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/LOGO.png";
import "./SlideNav.css";

function SlideNav() {
  const {
    setTheme,
    isSignedIn,
    setIsSignedIn,
    setRecruiterID,
    setIsRecruiterAcc,
    setUserID,
    isRecruiterAcc,
    navbarClick,
    openNav,
    setOpenNav,
  } = useContextProvider();
  // const navigate = useNavigate();
  const darkModeSwitch =
    localStorage.getItem("theme") === "dark" ? true : false;

  //   STATE DECLARATIONS
  const [isChecked, setIsChecked] = useState(darkModeSwitch);

  const toggleTheme = (e) => {
    const checkbox = e.target.checked;
    if (checkbox) {
      setTheme("dark");
      setIsChecked(true);
    } else {
      setTheme("light");
      setIsChecked(false);
    }
    navbarClick();
  };

  function logoutClick() {
    setIsSignedIn(false);
    setIsRecruiterAcc(false);
    setRecruiterID(null);
    setUserID(null);
    if (localStorage.getItem("userID")) {
      localStorage.removeItem("userID");
    }
    if (localStorage.getItem("recruiterID")) {
      localStorage.removeItem("recruiterID");
    }
    navbarClick();
  }

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

        {/* Login  */}
        {!isSignedIn && !isRecruiterAcc && (
          <SlideNavLink path={"/login"} label={"Login"} />
        )}

        {/* Profile */}
        {(isSignedIn || isRecruiterAcc) && (
          <Link
            to={isSignedIn ? "/user" : "/recruiter"}
            onClick={() => navbarClick()}
          >
            {navProfile}
            <span>Profile</span>
          </Link>
        )}

        {!isSignedIn && !isRecruiterAcc && (
          <SlideNavLink path={"/register"} label={"Register"} />
        )}

        <SlideNavLink path={"/"} label={"Home"} />

        <SlideNavLink path={"/jobs"} label={"Jobs"} />

        <SlideNavLink path={"/about"} label={"About"} />

        {(isSignedIn || isRecruiterAcc) && (
          <Link className="logoutBtn" to="/login" onClick={() => logoutClick()}>
            {navLogout} <span>Logout</span>
          </Link>
        )}
        <hr className="bottom-slide-nav-line"></hr>
        <label className="switch">
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => toggleTheme(event)}
            />
            <span className="slider round"></span>
          </div>
          <span className="toggleBtn">Dark Mode</span>
        </label>
        <Footer />
      </aside>
    </div>
  );
}

export default SlideNav;
