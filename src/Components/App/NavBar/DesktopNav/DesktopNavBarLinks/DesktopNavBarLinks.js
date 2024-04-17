import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavProvider } from "../../../../../Providers/NavProvider";
import { useContextProvider } from "../../../../../Providers/Provider";
import NavBarLinkDropDown from "../../NavBarLinkDropDown/NavBarLinkDropDown";
import "./DesktopNavBarLinks.scss";

function DesktopNavBarLinks({ path, label, clickfunction }) {
  const { navbarClick } = useNavProvider();
  const { isRecruiterAcc } = useContextProvider();
  const location = useLocation();
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const timeoutRef = useRef(null);

  const handleLinkMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowNavDropdown(true);
  };

  const handleLinkMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!menuSelected) {
        setShowNavDropdown(false);
      }
    }, 600);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setMenuSelected(true);
  };

  const handleMenuMouseLeave = () => {
    setMenuSelected(false);
    setShowNavDropdown(false);
  };

  useEffect(() => {
    setShowNavDropdown(false);
  }, [location.pathname]);

  return (
    <div
      className={
        label === "Home"
          ? ` desktopNavBarLinks desktopNavBarLinks_${label}`
          : "desktopNavBarLinks"
      }
    >
      <Link
        to={`${path}`}
        className={`slideNav_link_${label}`}
        onClick={() => {
          !clickfunction ? navbarClick() : clickfunction();
        }}
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        <span>{label}</span>
      </Link>

      {showNavDropdown && (
        <NavBarLinkDropDown
          path={path}
          setShowNavDropdown={setShowNavDropdown}
          handleMenuMouseEnter={handleMenuMouseEnter}
          handleMenuMouseLeave={handleMenuMouseLeave}
        />
      )}
    </div>
  );
}

export default DesktopNavBarLinks;
