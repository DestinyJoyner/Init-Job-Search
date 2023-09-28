import LoginPage from "../LoginPage/LoginPage.js"
import goldFace from "../../../Assets/gold-face.png"

import "./DesktopLoginPage.scss"

function DesktopLoginPage(props) {
    return (
        <div className="desktopLoginPage">  
            <section className="desktopLoginPage_content">
                <div className="desktopLoginPage_content_left">
                    <div className="desktopLoginPage_content_left_transparent grid-center">
                    <span>Welcome Back<br/> To<br/> inIT!</span>
                    </div>
                    {/* <img src={goldFace} alt="face-circuit" className="desktopLoginPage_content_left_image" /> */}
                    
            
                   
                
                </div>
                <LoginPage />
            </section>
            
        </div>
    );
}

export default DesktopLoginPage;