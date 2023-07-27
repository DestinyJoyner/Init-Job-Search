import { Link } from "react-router-dom";
import { useNavProvider } from "../../../../Providers/NavProvider";
import {
  navAbout,
  navHome,
  navJobs,
  navLogin,
  navLogout,
  navProfile,
  navRegister,
} from "../../../Job/Data/Icons";

function SlideNavLink({ path, label, clickfunction }) {
  const { navbarClick } = useNavProvider();

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
      className="slideNav_link"
      onClick={() => {
        !clickfunction ? navbarClick() : clickfunction();
      }}
    >
      {navIconObj[label]}
      <span>{label}</span>
    </Link>
  );
}

export default SlideNavLink;
