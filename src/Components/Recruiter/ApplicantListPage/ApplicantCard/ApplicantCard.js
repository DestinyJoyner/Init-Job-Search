import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../../Providers/Provider";

import "./ApplicantCard.scss"

function ApplicantCard({obj}) {
    const navigate = useNavigate()
    const { setUserID } = useContextProvider()
    const { user_id, first_name, last_name, email} = obj
    
    function applicantClick() {
        setUserID(user_id)
        navigate("/user")
    }

    return (
        <div className="applicant-card" onClick={()=> applicantClick()}>
            <div className="applicant-icon">
            <img src={""} alt="user-icon" />
            </div>
            <span className="applicant-name">{first_name} {last_name}</span>
            <hr/>
            <span className="applicant-email">{email}</span>
        </div>
    );
}

export default ApplicantCard;