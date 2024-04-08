import { Link } from "react-router-dom";
import { convertCities } from "../../Functions/ConvertFunctions/ConversionFunctions";
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import "./RecruiterProfileTopJobs.scss";

function RecruiterProfileTopJobs({ jobObj }) {
  const { title, company, city, users, id } = jobObj;

  const companyLogo = convertCompanyForLogo(company.toLowerCase());
  const companyCity = convertCities(city);
  return (
    <div className="recruiterTopJobs init-card">
      <section className="recruiterTopJobs_company flex-align">
        <img
          src={companyLogo}
          alt={company}
          className="recruiterTopJobs_logo"
        />
        <span className="recruiterTopJobs_company_details">
          <span className="recruiterTopJobs_company_details_name">
            {company}
          </span>

          <span className="recruiterTopJobs_company_details_city flex-column">
            {companyCity}
          </span>
        </span>
      </section>

      <span className="recruiterTopJobs_title">{title}</span>

      <section className="recruiterTopJobs_links flex-align">
        <Link to={`/jobs/${id}`}>Post Details</Link>

        <Link
          to={`/jobs/${id}/applicants`}
          className="recruiterTopJobs_links_applicants"
        >
          View Applicants
          {/* <span>{users.length}</span> */}
        </Link>
      </section>
    </div>
  );
}

export default RecruiterProfileTopJobs;
