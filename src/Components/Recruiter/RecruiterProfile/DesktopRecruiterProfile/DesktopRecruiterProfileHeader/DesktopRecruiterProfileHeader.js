import convertCompanyForLogo from "../../../../App/Data/CompanyLogos";
import { handshake } from "../../../../App/Data/Icons";
import { IoStatsChart } from "react-icons/io5";
import "./DesktopRecruiterProfileHeader.scss";

function DesktopRecruiterProfileHeader({
  recruiterDetails,
  recruiterJobs,
  companyDetails,
  recruiterJobsWithUsers,
}) {
  const { first_name, last_name, organization } = recruiterDetails;

  const companyLogo = organization
    ? convertCompanyForLogo(organization.toLowerCase())
    : null;

  const totalApplicants = recruiterJobsWithUsers.reduce((acc, { users }) => {
    return (acc += users.length);
  }, 0);

  return (
    <div className="desktopRecruiterProfileHeader grid-align">
      <img src={companyLogo} alt={organization} />

      <section className="desktopRecruiterProfileHeader_details flex-column">
        <span className="desktopRecruiterProfileHeader_details_name">
          {first_name} {last_name}
        </span>
        <span className="desktopRecruiterProfileHeader_details_company">
          {organization}
        </span>
        <span className="desktopRecruiterProfileHeader_details_badge flex-align">
          <span>Recruiter </span>
          {handshake}
        </span>
      </section>

      <section className="desktopRecruiterProfileHeader_stats">
        <IoStatsChart />
        <span className="desktopRecruiterProfileHeader_stats_jobs">
          <b>Jobs Posted</b>: {recruiterJobs.length}
        </span>
        <span className="desktopRecruiterProfileHeader_stats_applicants">
          <b>Total Applicants</b>: {totalApplicants}
        </span>
      </section>

      <section className="desktopRecruiterProfileHeader_companyDetails">
        {companyDetails.company_description}
      </section>
    </div>
  );
}

export default DesktopRecruiterProfileHeader;
