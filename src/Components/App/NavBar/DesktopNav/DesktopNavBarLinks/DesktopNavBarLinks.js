import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavProvider } from "../../../../../Providers/NavProvider";
import { useContextProvider } from "../../../../../Providers/Provider";
import NavBarLinkDropDown from "../../NavBarLinkDropDown/NavBarLinkDropDown";

import { ImProfile } from "react-icons/im";
import { FaEdit, FaUserTie } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import "./DesktopNavBarLinks.scss";

function DesktopNavBarLinks({ path, label, clickfunction }) {
  const { navbarClick } = useNavProvider();
  const { isRecruiterAcc } = useContextProvider();
  const location = useLocation()
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);

  const navBarLinkDropdownValues = {
    "/user": [
      { value:<div className="navBarLinkDropDown_links">
      <ImProfile />
      <span>View Profile</span>
      <p>Explore your personal information, resume, job applications, and skills at a glance.</p>
      </div>, route: "/user" },
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
    "/recruiter": [
      { value: <div className="navBarLinkDropDown_links">
      <AiFillFileAdd />
      <span>Post New Job</span>
      <p>Share new opportunities for entry-level software engineers and connect with talent on our platform.</p>
      </div>, route: "/jobs/new" },
      { value: <div className="navBarLinkDropDown_links">
      <FaUserTie />
      <span>View Profile</span>
      <p>Browse and oversee your job postings, company information, and evaluate applicants for your listings.</p>
      </div>
        , route: "/recruiter" },
      // { value: <div className="navBarLinkDropDown_links">
      // <FaEdit />
      // <span>Edit Profile</span>
      // <p>Update your organization information, and effortlessly manage your posted job listings.</p>
      // </div>, route: "/recruiter" },
      { value: <div className="navBarLinkDropDown_links">
      <MdDeleteForever />
      <span>Delete Profile</span>
      <p>Permanently delete your profile and remove all current job postings from inIT.</p>
      </div>, route: "/" },
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

  useEffect(() => {
    setShowNavDropdown(false)
  },[location.pathname])
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
