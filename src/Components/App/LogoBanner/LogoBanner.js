import logo from "../../../Assets/logo-noName-background.png"
import "./LogoBanner.scss"

function LogoBanner(props) {
    return (
        <div className="logoBanner">
            <span className="slideNav_header_slogan">Your first opportunity awaits</span>
            <img className="logoBanner_one" src={logo} alt="init-leaf" />

            <img className="logoBanner_two"src={logo} alt="init-leaf" />

            <img className="logoBanner_three" src={logo} alt="init-leaf" />

            <img className="logoBanner_four" src={logo} alt="init-leaf" />
        </div>
    );
}

export default LogoBanner;