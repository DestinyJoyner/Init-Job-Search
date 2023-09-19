import ContactLinks from "../../ContactLinks/ContactLinks";
import initWhite from "../../../Assets/init-no-text.png";
import blueTree from "../../App/HomePage/Images/init-tree-blue.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="nav-footer">
      <span>
        inIT {" "}
        <img 
        src={initWhite} 
        alt="init-logo" 
        className="nav-footer_init" /> {" "}
        May 2023
      </span>
      <ContactLinks pursuit={true} />
      <img 
      src={blueTree} 
      alt="init-tree-blue" className="nav-footer_tree" />
    </footer>
  );
}
