import { Link } from "react-router-dom";

import "./RecruiterJob.css";

export default function RecruiterJob ({object}) {
    const {title, company, users, id} = object;
    return(
        <div className="recruiter-job grid-center">
            <div className="recruiter-job-details">
            <Link to={`/jobs/${id}`} className="recruiter-job-title">{title}</Link>
            <p>{company}</p>
            <Link className="recruiter-job-applicants grid-center" to={`/jobs/${id}/applicants`}><span>Applicants</span><span className="applicant-count">
            ({users ? users.length : "0"})</span></Link>
            </div>
            
        </div>
    )
}