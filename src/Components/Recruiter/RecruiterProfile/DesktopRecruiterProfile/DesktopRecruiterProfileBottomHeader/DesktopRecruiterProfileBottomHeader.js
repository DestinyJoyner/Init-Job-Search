import { Link } from "react-router-dom";
import { useRecruiterProvider } from "../../../../../Providers/RecruiterProvider";
import { IoStatsChart } from "react-icons/io5";
import "./DesktopRecruiterProfileBottomHeader.scss";

function DesktopRecruiterProfileBottomHeader(props) {
  const { recruiterJobsWithUsers, recruiterJobs } = useRecruiterProvider();

  const totalApplicants = recruiterJobsWithUsers.reduce((acc, { users }) => {
    return (acc += users.length);
  }, 0);

  return (
    <section className="desktopRecruiterProfilePage_content_bottomHeader">
      <Link
        className="desktopRecruiterProfilePage_content_bottomHeader_newJob"
        to="/jobs/new"
      >
        Post Opportunity
      </Link>

      <div className="desktopRecruiterProfilePage_content_bottomHeader_stats">
        <IoStatsChart />
        <span className="desktopRecruiterProfilePage_content_bottomHeader_stats_jobs">
          <b>Jobs Posted</b>: {recruiterJobs.length}
        </span>
        <span className="desktopRecruiterProfilePage_content_bottomHeader_stats_applicants">
          <b>Total Applicants</b>: {totalApplicants}
        </span>
      </div>
    </section>
  );
}

export default DesktopRecruiterProfileBottomHeader;
