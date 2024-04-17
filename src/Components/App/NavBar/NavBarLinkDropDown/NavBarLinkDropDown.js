import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import navBarLinkDropdownValues from "../../Data/DesktopNavBarLinkContentObj";
import "./NavBarLinkDropDown.scss";

function NavBarLinkDropDown({
  path,
  handleMenuMouseEnter,
  handleMenuMouseLeave,
}) {
  const dropdownLinks = navBarLinkDropdownValues[path];
  return (
    dropdownLinks && (
      <div
        className="navBarLinkDropDown init-card"
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        {dropdownLinks.map(({ value, route }) => (
          <Link to={route} key={uuidv4()}>
            {value}
          </Link>
        ))}
      </div>
    )
  );
}

export default NavBarLinkDropDown;
