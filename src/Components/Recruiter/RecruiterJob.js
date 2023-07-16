import { Link } from "react-router-dom";
import { convertCities } from "../Job/Functions/JobFunctions";

import "./RecruiterJob2.css";

export default function RecruiterJob({ jobObject }) {
  const { title, company, city, users, id } = jobObject;
  return (
    <div className="recruiter-job grid-center">
      <div className="recruiter-job-details">
        <Link to={`/jobs/${id}`} className="recruiter-job-title">
          {title}
        </Link>
        <span className="recruiter-job-company">{company}</span>
        <span className="recruiter-job-city">{convertCities(city)}</span>
        <Link
          className="recruiter-job-applicants grid-center"
          to={`/jobs/${id}/applicants`}
        >
          <span>Applicants</span>
          <span className="applicant-count">
            ({users ? users.length : "0"})
          </span>
        </Link>
      </div>
    </div>
  );
}
