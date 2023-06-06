import { Link } from "react-router-dom";
import user from "../../Assets/USER.png"
import "./ApplicantCard.css"

function ApplicantCard({obj}) {
    const { user_id, first_name, last_name, email} = obj


    return (
        <div className="applicant-card">
            <div className="applicant-icon">
            <img src={user} alt="user-icon" />
            </div>
            <span className="applicant-name">{first_name} {last_name}</span>
            <hr/>
            <span className="applicant-email">{email}</span>
        </div>
    );
}

export default ApplicantCard;