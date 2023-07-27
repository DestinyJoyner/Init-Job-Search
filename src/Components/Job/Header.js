import { useNavigate } from "react-router-dom";
import { BiArrowBack} from "react-icons/bi"
import "./Header.css"

function Header({header, noBack}) {
    const navigate = useNavigate()

    return (
        <div className="app-header">
        {!noBack && <BiArrowBack
        size={"36px"}
        className="app-header-back"
        onClick={() => navigate(-1)}
        />}
        <h1><span>{header}</span></h1>
        </div>
    );
}

export default Header;