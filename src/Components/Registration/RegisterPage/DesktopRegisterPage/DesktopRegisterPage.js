import { useState } from "react";
import RegistrationPage from "../RegistrationPage";
import DesktopRegisterAccountType from "./RegisterAccountType/DesktopRegisterAccountType";
import "./DesktopRegisterPage.scss"

function DesktopRegisterPage(props) {
    const [accountToggle, setAccountToggle] = useState(true)

    return (
        <div className="desktopRegisterPage">
            <div className="desktopRegisterPage_content">
                <section className="desktopRegisterPage_content_right">
                    <DesktopRegisterAccountType accountToggle={accountToggle} />
                </section>

                <RegistrationPage accountToggle={accountToggle}
                setAccountToggle={setAccountToggle} />
            </div>
        </div>
    );
}

export default DesktopRegisterPage;