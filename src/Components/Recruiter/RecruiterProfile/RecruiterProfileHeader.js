import { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider";
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import { recruiter, handshake } from "../../App/Data/Icons";

function RecruiterProfileHeader({recruiterDetails}) {
    const { first_name, last_name, organization} = recruiterDetails
    // console.log(recruiterDetails)
    const {isDesktopView} = useWindowSizeProvider()
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
        <span className="recruiterProfile_header_badge">
        {/* {recruiter}  */}
        {/* {handshake} */}
        <span>Recruiter</span>
        </span>

      {
        isDesktopView &&
        <div className="recruiterProfile_header_stats">
            <span className="recruiterProfile_header_stats_jobs">Jobs Posted:</span>
            <span className="recruiterProfile_header_stats_jobs">Total Applicants:</span>
          </div>
      }
      
      </div>
    );
}

export default RecruiterProfileHeader;