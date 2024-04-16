import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./NavBarLinkDropDown.scss";

function NavBarLinkDropDown({ dropdownLinks, setShowNavDropdown }) {
  return (
    dropdownLinks && (
      <div className="navBarLinkDropDown init-card"
      onMouseLeave={() => setShowNavDropdown(false)}>
        {dropdownLinks.map(({ value, route }) => (
          <Link 
          to={route} 
          key={uuidv4()}>
            {value}
          </Link>
        ))}
      </div>
    )
  );
}

export default NavBarLinkDropDown;
