import { Link } from "react-router-dom";
import { convertCities } from "../Job/Functions/JobFunctions";

import "./RecruiterJob.css";

export default function RecruiterJob({ jobObject }) {
  const { title, company, city, users, id } = jobObject;
  return (
    <div className="recruiter-job grid-center">
      <Link to={`/jobs/${id}`} className="recruiter-job-title">
          {title}
        </Link>
      <div className="recruiter-job-details">
        <span className="recruiter-job-company">{company}</span>
        <span className="recruiter-job-city">{convertCities(city)}</span>
      </div>
        <div
          className="recruiter-job-applicants"
        >
          <span>Applicants</span>
          <Link className="applicant-count"
          to={`/jobs/${id}/applicants`}
          >
            ({users ? users.length : "0"})
          </Link>
        </div>
    </div>
  );
}
