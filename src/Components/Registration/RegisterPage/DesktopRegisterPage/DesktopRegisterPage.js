import RegistrationPage from "../RegistrationPage";
import DesktopRegisterAccountType from "./RegisterAccountType/DesktopRegisterAccountType";
import "./DesktopRegisterPage.scss"

function DesktopRegisterPage(props) {
    return (
        <div className="desktopRegisterPage">
            <div className="desktopRegisterPage_content">
                <section className="desktopRegisterPage_content_right">
                    <DesktopRegisterAccountType />
                </section>

                <RegistrationPage />
            </div>
        </div>
    );
}

export default DesktopRegisterPage;