import { useNavigate, Link } from "react-router-dom";
import logo from "../../Assets/LOGO.png"
import "./NoAccess.scss"

function NoAccess() {
    const navigate = useNavigate()
    return (
        <div 
        className="userLoginPrompt center">
        <h2>Login to access your profile</h2>
        <Link className="userLoginPrompt_link"to="/login">
          LOGIN
        </Link>
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
      </div>
    );
}

export default NoAccess;