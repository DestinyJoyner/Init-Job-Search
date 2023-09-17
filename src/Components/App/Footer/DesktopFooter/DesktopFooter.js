import { team } from "../../AboutPage/AboutData";
import developerImage from "../../../../Assets/DJphoto.png"
import "./DesktopFooter.scss"

function DesktopFooter() {
    const developerBio = team["1"].bio2
    return (
        <div className="desktopFooter">
            <section className="desktopFooter_about">
            <h2> About inIT</h2>
            </section>
            

            <section className="desktopFooter_developer">
            <h2>The Developer</h2>
            <img src={developerImage} alt ="developer-image" />
            <span className="desktopFooter_developer_bio">
                {developerBio}
            </span>

            <div className="desktopFooter_developer_links">links</div>

            <span className="desktopFooter_developer_name">Destiny Joyner</span>
            </section>
            
        </div>
    );
}

export default DesktopFooter;