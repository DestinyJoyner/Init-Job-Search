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
} from "../../Data/Icons";

function SlideNavLink({ path, label, clickfunction, showIcon }) {
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
      className={`slideNav_link_${label}`}
      onClick={() => {
        !clickfunction ? navbarClick() : clickfunction();
      }}
    >
      
      { showIcon !== false && navIconObj[label]}

      <span>{label}</span>
    </Link>
  );
}

export default SlideNavLink;
