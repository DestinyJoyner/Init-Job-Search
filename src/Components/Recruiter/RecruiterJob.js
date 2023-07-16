import { Link } from "react-router-dom";
import { convertCities } from "../Job/Functions/JobFunctions";
import convertCompanyForLogo from "../Job/Data/CompanyLogos.js"

import "./RecruiterJob.css";

export default function RecruiterJob({ jobObject }) {
  const { title, company, city, users, id } = jobObject;

  const companyLogo = convertCompanyForLogo(company.toLowerCase())

  return (
    <div className="recruiter-job grid-center">
      <img className="recruiter-job-company-logo"
      src= {companyLogo}
      alt ="company-logo"/>
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
