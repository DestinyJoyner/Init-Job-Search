import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./NavBarLinkDropDown.scss";

function NavBarLinkDropDown({ dropdownLinks }) {
  return (
    dropdownLinks && (
      <div className="navBarLinkDropDown">
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
