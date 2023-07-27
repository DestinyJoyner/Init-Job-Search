import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { useNavProvider } from "../../Providers/NavProvider";
import DarkModeSlider from "./DarkModeSlider";
import SlideNavLink from "./SlideNavLink";
import Footer from "./Footer";

import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/LOGO.png";
import "./SlideNav.css";

function SlideNav() {
  const {
    isSignedIn,
    setIsSignedIn,
    setRecruiterID,
    setIsRecruiterAcc,
    setUserID,
    isRecruiterAcc,
  } = useContextProvider();
  const {navbarClick, openNav} = useNavProvider()

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
          <SlideNavLink 
          path={isSignedIn ? "/user" : "/recruiter"}
          label={"Profile"}/>
        )}

        {!isSignedIn && !isRecruiterAcc && (
          <SlideNavLink path={"/register"} label={"Register"} />
        )}

        <SlideNavLink path={"/"} label={"Home"} />

        <SlideNavLink path={"/jobs"} label={"Jobs"} />

        <SlideNavLink path={"/about"} label={"About"} />

        {(isSignedIn || isRecruiterAcc) && (
          <SlideNavLink 
          path={"/logout"}
          label={"Logout"}
          clickfunction={logoutClick}/>
        )}
        <hr className="bottom-slide-nav-line"></hr>
        <DarkModeSlider />
        <Footer />
      </aside>
    </div>
  );
}

export default SlideNav;
