import convertCompanyForLogo from "../../Job/Data/CompanyLogos";
import { recruiter } from "../../Job/Data/Icons";

function RecruiterProfileHeader({recruiterDetails}) {
    const { first_name, last_name, organization} = recruiterDetails

    return (
        <div className="recruiterProfile_header">
        <span className="recruiterProfile_header_name">
          {`${first_name} ${last_name}`}
        </span>
        <span className="recruiterProfile_header_company">
          {organization}
        </span>
        <img
          className="recruiterProfile_header_company_logo"
          src={convertCompanyForLogo(
            organization.toLowerCase()
          )}
          alt="recruiter-company"
        />
        <span className="recruiterProfile_header_badge">
        Recruiter
        </span>
      
      </div>
    );
}

export default RecruiterProfileHeader;