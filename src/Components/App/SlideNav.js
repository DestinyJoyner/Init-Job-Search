import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import Footer from "./Footer";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiInfoCircle } from "react-icons/bi";
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
  const navigate = useNavigate();
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
    <aside className={openNav ? " slide-nav nav-open" : " slide-nav nav-close"}>
        <p className="slogan">
        Your first tech opportunity awaits
        </p>

      {/* Login  */}
      {!isSignedIn && !isRecruiterAcc && (
        <Link to="/login" onClick={() => navbarClick()}>
          <FiLogIn className="nav-icons" />
          <span>Login</span>
        </Link>
      )}

      {/* Profile */}
      {(isSignedIn || isRecruiterAcc) && (
        <Link
          to={isSignedIn ? "/user" : "/recruiter"}
          onClick={() => navbarClick()}
        >
          <CgProfile className="nav-icons"  />
          <span>Profile</span>
        </Link>
      )}

      {!isSignedIn && !isRecruiterAcc && (
        <Link to="/register" onClick={() => navbarClick()}>
          <FiUserPlus className="nav-icons" />
          <span>Register</span>
        </Link>
      )}

      <Link to="/" onClick={() => navbarClick()}>
        <AiOutlineHome className="nav-icons" />
        <span>Home</span>
      </Link>
      <Link to="/jobs" onClick={() => navbarClick()}>
        <MdWorkOutline className="nav-icons" />
        <span>Jobs</span>
      </Link>
      <Link to="/about" onClick={() => navbarClick()}>
        <BiInfoCircle className="nav-icons" />
        <span>Meet the Team</span>
      </Link>
      {(isSignedIn || isRecruiterAcc) && (
        <Link className="logoutBtn" to="/" onClick={() => logoutClick()}>
          {<FiLogOut className="nav-icons"  />} <span>Logout</span>
        </Link>
      )}
      <hr className="nav-line"></hr>
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
  );
}

export default SlideNav;
