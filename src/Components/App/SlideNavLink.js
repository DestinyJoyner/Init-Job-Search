import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { navAbout, navHome, navJobs, navLogin, navLogout, navProfile, navRegister } from "../Job/Data/Icons";

function SlideNavLink({path, label}) {
    const { navbarClick } = useContextProvider()

    const navIconObj = {
        "Home" : navHome,
        "About" : navAbout,
        "Jobs" : navJobs,
        "Login" : navLogin,
        "Logout" : navLogout,
        "Profile" : navProfile,
        "Register" : navRegister
    }

    return (
        <Link 
        to={`${path}`} 
        className="slideNav_link"
        onClick={() => navbarClick()}>
           {navIconObj[label]}
            <span>{label}</span>
        </Link>
    );
}

export default SlideNavLink;