import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavProvider } from "../../../../../Providers/NavProvider";
import { useContextProvider } from "../../../../../Providers/Provider";
import NavBarLinkDropDown from "../../NavBarLinkDropDown/NavBarLinkDropDown";

import { ImProfile } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import "./DesktopNavBarLinks.scss";

function DesktopNavBarLinks({ path, label, clickfunction }) {
  const { navbarClick } = useNavProvider();
  const { isRecruiterAcc } = useContextProvider();
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);

  const jobNavOptions = isRecruiterAcc
    ? [
        { value: "Browse Jobs", route: "/jobs" },
        { value: "Post New Job", route: "/jobs/new" },
      ]
    : null;

  const navBarLinkDropdownValues = {
    "/user": [
      { value:<div className="navBarLinkDropDown_links">
      <ImProfile />
      <span>View Profile</span>
      <p>Explore your personal information, resume, job applications, and skills at a glance.</p>
      </div> , route: "/user" },
      { value: <div className="navBarLinkDropDown_links">
      <FaEdit />
      <span>Edit Profile</span>
      <p>Edit your education, skills, projects, personal info, and resume to keep your profile up to date.</p>
      </div>, route: "/user/edit" },
      { value: <div className="navBarLinkDropDown_links">
      <MdDeleteForever />
      <span>Delete Profile</span>
      <p>Permanently delete your profile and remove all current job applications from consideration.</p>
      </div>, route: "/" },
    ],
    "/jobs": jobNavOptions,
    "/recruiter": [
      { value: "View Profile", route: "/recruiter" },
      { value: "Edit Profile", route: "/recruiter" },
      { value: "Delete Account", route: "/" },
    ],
  };

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
        <span>
          {label}
        </span>
      </Link>

      {showNavDropdown && (
        <NavBarLinkDropDown
          dropdownLinks={navBarLinkDropdownValues[path]}
          setShowNavDropdown={setShowNavDropdown}
          handleMenuMouseEnter={handleMenuMouseEnter}
          handleMenuMouseLeave={handleMenuMouseLeave}
        />
      )}
     {/* <NavBarLinkDropDown
          dropdownLinks={navBarLinkDropdownValues[path]}
          setShowNavDropdown={setShowNavDropdown}
          handleMenuMouseEnter={handleMenuMouseEnter}
          handleMenuMouseLeave={handleMenuMouseLeave}
        /> */}
    </div>
  );
}

export default DesktopNavBarLinks;
