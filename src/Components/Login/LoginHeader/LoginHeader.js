import { useNavigate } from "react-router-dom";
import initLogo from "../../../Assets/LOGO.png";
import "./LoginHeader.scss"

function LoginHeader() {
  const navigate = useNavigate()
    return (
        <section 
        className="loginHeader"
        onClick={() => navigate("/")}>
        <img 
        className="loginHeader_logo" 
        src={initLogo} 
        alt="logo" />
        <span className="loginHeader_slogan">
          Your first tech opportunity awaits
        </span>
      </section>
    );
}

export default LoginHeader;