import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiInfoCircle } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc"
import { GrLinkedin } from "react-icons/gr"
import { TfiEmail } from "react-icons/tfi"
import logo from "../../Assets/LOGO.png";
import pursuit from "../../Assets/pursuit-logo.png"
import "./Nav.css";

export default function Nav() {
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

  // const [openNav, setOpenNav] = useState(false);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const navigate = useNavigate();

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
  useEffect(() => {
    const handleScroll = () => {
      if (openNav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);


  function logoutClick() {
    setIsSignedIn(false);
    setIsRecruiterAcc(false);
    setRecruiterID(null);
    setUserID(null);
    if(localStorage.getItem("userID")){
      localStorage.removeItem("userID")
    }
    if(localStorage.getItem("recruiterID")){
      localStorage.removeItem("recruiterID")
    }
    navbarClick();
  }

  function profileClick() {
    isSignedIn ? navigate("/user") : navigate("/recruiter");
  }

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
      <aside
        className={openNav ? " slide-nav nav-open" : " slide-nav nav-close"}>
        <p className="slogan">
         Your first tech opportunity awaits
        </p>

        {/* Login  */}
        {(!isSignedIn && !isRecruiterAcc) && (
          <Link to="/login" onClick={() => navbarClick()}>
            <FiLogIn size={"30px"} color={"#0914ae"} />
            <span>Login</span>
          </Link>
        )}

        {/* Profile */}
        {(isSignedIn || isRecruiterAcc) && (
          <Link
            to={isSignedIn ? "/user" : "/recruiter"}
            onClick={() => navbarClick()}
          >
            <CgProfile size={"30px"} color={"#0914ae"} />
            <span>Profile</span>
          </Link>
        )}

        {!isSignedIn && !isRecruiterAcc && (
          <Link to="/register" onClick={() => navbarClick()}>
            <FiUserPlus size={"30px"} color={"#0914ae"} />
            <span>Register</span>
          </Link>
        )}

        <Link to="/" onClick={() => navbarClick()}>
          <AiOutlineHome size={"30px"} color={"#0914ae"} />
          <span>Home</span>
        </Link>
        <Link to="/jobs" onClick={() => navbarClick()}>
          <MdWorkOutline size={"30px"} color={"#0914ae"} />
          <span>Jobs</span>
        </Link>
        <Link to="/about" onClick={() => navbarClick()}>
          <BiInfoCircle size={"30px"} color={"#0914ae"} />
          <span>Meet the Team</span>
        </Link>
        {(isSignedIn || isRecruiterAcc) && (
          <Link className="logoutBtn" to="/" onClick={() => logoutClick()}>
            {<FiLogOut size={"30px"} color={"#0914ae"} />} <span>Logout</span>
          </Link>
        )}
        <hr className="navHR"></hr>
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

        {/* FOOTER INFO */}
        <footer className="nav-footer">
          <span className="nav-dev">Destiny J. 2023</span>
          <span className="pursuit-nav">
          <a 
          href="https://www.pursuit.org/mission-vision" target="_blank"> <img src={pursuit} alt="pursuit-logo" /></a>
          </span>
          
          <div>
          <span>
                <a href= "https://github.com/DestinyJoyner" target="blank">
                    <VscGithub/>
                </a>
            </span>
            <span>
                <a href= "https://www.linkedin.com/in/destiny-joyner-934846243/" target="blank">
                    <GrLinkedin  />
                </a>
                </span>
            <span>
                <a href= "mailto:destinyjoyner@pursuit.org" target="blank">
                    <TfiEmail/>
                </a>
            </span>
          </div>
        </footer>
      </aside>
    </nav>

  );
}
