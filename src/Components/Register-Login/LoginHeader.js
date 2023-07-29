import initLogo from "../../Assets/LOGO.png";
import "./LoginHeader.scss"

function LoginHeader() {
    return (
        <section className="loginHeader">
        <img className="loginHeader_logo" src={initLogo} alt="logo" />
        <span className="loginHeader_slogan">
          Your first tech opportunity awaits
        </span>
      </section>
    );
}

export default LoginHeader;