
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import { recruiter, handshake } from "../../App/Data/Icons";

function RecruiterProfileHeader({recruiterDetails, recruiterJobs, companyDetails}) {
    const { first_name, last_name, organization} = recruiterDetails

    const companyLogo = organization ? convertCompanyForLogo(
      organization.toLowerCase() 
    ) : null

    return (
        <div className="recruiterProfile_header">
        <span className="recruiterProfile_header_name">
          <span>{`${first_name} ${last_name}`} </span>
          <span>{handshake}</span>
        </span>
        <span className="recruiterProfile_header_company">
          {organization}
        </span>
        <img
          className="recruiterProfile_header_company_logo"
          src={companyLogo}
          alt="recruiter-company"
        />
        <span className="recruiterProfile_header_role">
        Recruiter
        </span>
      
      </div>
    );
}

export default RecruiterProfileHeader;