import { useNavigate } from "react-router-dom";
import { TfiAngleLeft } from "react-icons/tfi";
import { MdArrowBackIosNew } from "react-icons/md"
import "./Header.css"

function Header({header, noBack}) {
    const navigate = useNavigate()

    return (
        <div className="app-header">
        {!noBack && <MdArrowBackIosNew
        size={"35px"}
        className="app-header-back"
        onClick={() => navigate(-1)}
        />}
        <h1><span>{header}</span></h1>
        </div>
    );
}

export default Header;