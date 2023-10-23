import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavProvider } from "../../../../Providers/NavProvider";
import NavBarLinkDropDown from "../NavBarLinkDropDown/NavBarLinkDropDown";
import {
  navAbout,
  navHome,
  navJobs,
  navLogin,
  navLogout,
  navProfile,
  navRegister,
} from "../../Data/Icons";
import {BiChevronDown} from "react-icons/bi"

function SlideNavLink({ path, label, clickfunction, showIcon, dropdownLinks }) {
  const { navbarClick } = useNavProvider();
  const [showNavDropdown, setShowNavDropdown] = useState(false)

  const navIconObj = {
    Home: navHome,
    About: navAbout,
    Jobs: navJobs,
    Login: navLogin,
    Logout: navLogout,
    Profile: navProfile,
    Register: navRegister,
  };

  return (
    <Link
      to={`${path}`}
      className={`slideNav_link_${label}`}
      onClick={() => {
        !clickfunction ? navbarClick() : clickfunction();
      }}
      onMouseEnter={() => setShowNavDropdown(true)}
      onMouseLeave={() => setShowNavDropdown(false)}
    >
      
      { showIcon !== false && navIconObj[label]}

      <span>{label} <BiChevronDown /></span>
      {
        showNavDropdown &&
        <NavBarLinkDropDown dropdownLinks={dropdownLinks}
        setShowNavDropdown={setShowNavDropdown} />
      }
    </Link>
  );
}

export default SlideNavLink;
