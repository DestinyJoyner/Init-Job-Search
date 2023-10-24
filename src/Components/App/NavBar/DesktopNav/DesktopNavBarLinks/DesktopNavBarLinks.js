import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavProvider } from "../../../../../Providers/NavProvider";
import { useContextProvider } from "../../../../../Providers/Provider";
import NavBarLinkDropDown from "../../NavBarLinkDropDown/NavBarLinkDropDown";
import { BiChevronDown } from "react-icons/bi";
import "./DesktopNavBarLinks.scss";

function DesktopNavBarLinks({ path, label, clickfunction }) {
  const { navbarClick } = useNavProvider();
  const { isRecruiterAcc } = useContextProvider();
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  const jobNavOptions = isRecruiterAcc
    ? [
        { value: "Browse Jobs", route: "/jobs" },
        { value: "Post New Job", route: "/jobs/new" },
      ]
    : null;

  const navBarLinkDropdownValues = {
    "/user": [
      { value: "View Profile", route: "/user" },
      { value: "Edit Profile", route: "/user/edit" },
      { value: "Delete Account", route: "/" },
    ],
    "/jobs": jobNavOptions,
    "/recruiter": [
      { value: "View Profile", route: "/recruiter" },
      { value: "Edit Profile", route: "/recruiter" },
      { value: "Delete Account", route: "/" },
    ],
  };

  return (
    <div
      className={
        label === "Home"
          ? ` desktopNavBarLinks desktopNavBarLinks_${label}`
          : "desktopNavBarLinks"
      }
      onMouseEnter={() => setShowNavDropdown(true)}
      onMouseLeave={() => setShowNavDropdown(false)}
    >
      <Link
        to={`${path}`}
        className={`slideNav_link_${label}`}
        onClick={() => {
          !clickfunction ? navbarClick() : clickfunction();
        }}
      >
        <span>
          {label} {navBarLinkDropdownValues[path] && <BiChevronDown />}
        </span>
      </Link>

      {showNavDropdown && (
        <NavBarLinkDropDown 
        dropdownLinks={navBarLinkDropdownValues[path]} />
      )}
    </div>
  );
}

export default DesktopNavBarLinks;
