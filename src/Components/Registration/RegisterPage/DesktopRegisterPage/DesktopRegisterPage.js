import { useState, useEffect } from "react";
import { useContextProvider } from "../../../../Providers/Provider";
import RegistrationPage from "../RegistrationPage";
import DesktopRegisterAccountType from "./RegisterAccountType/DesktopRegisterAccountType";
import "./DesktopRegisterPage.scss"

function DesktopRegisterPage() {
    const {setLoading} = useContextProvider()
    const [accountToggle, setAccountToggle] = useState(true)

    useEffect(() => {
        setLoading(false)
      },[])

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