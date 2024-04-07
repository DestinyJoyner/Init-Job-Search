import { Link } from "react-router-dom";
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import { userIcon } from "../../App/Data/Icons";
import "./RecruiterProfileTopJobs.scss";

function RecruiterProfileTopJobs({ jobObj }) {
  const { title, company, users, id } = jobObj;

  const companyLogo = convertCompanyForLogo(company.toLowerCase());

  return (
    <div className="recruiterTopJobs">

<img src={companyLogo} alt={company} className="recruiterTopJobs_logo" />

      <section className="recruiterTopJobs_details">
        <Link to={`/jobs/${id}`} className="recruiterTopJobs_details_title">{title}</Link>
        <span className="recruiterTopJobs_details_company">{company}</span>
      </section>

      {/* <span className="recruiterTopJobs_company bold">
     
        
      </span> */}

     

      <Link
        to={`/jobs/${id}/applicants`}
        className="recruiterTopJobs_applicants"
      >
        View Applicants: {" "}
        <span>
            {users.length}
        </span>
      </Link>
    </div>
  );
}

export default RecruiterProfileTopJobs;
