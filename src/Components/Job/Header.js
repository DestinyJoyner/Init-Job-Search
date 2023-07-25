import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5"
import "./Header.css"

function Header({header, noBack}) {
    const navigate = useNavigate()

    return (
        <div className="app-header">
        {!noBack && <IoArrowBackCircleOutline
        size={"40px"}
        className="app-header-back"
        onClick={() => navigate(-1)}
        />}
        <h1><span>{header}</span></h1>
        </div>
    );
}

export default Header;