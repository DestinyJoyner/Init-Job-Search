import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import DesktopRecruiterProfileHeader from "./DesktopRecruiterProfileHeader/DesktopRecruiterProfileHeader";
import DesktopRecruiterTopJobs from "./DesktopRecruiterTopJobs/DesktopRecruiterTopJobs";
import DesktopRecruiterJobs from "./DesktopRecruiterJobs/DesktopRecruiterJobs";
import "./DesktopRecruiterProfile.scss";

function DesktopRecruiterProfile(props) {
  const { isRecruiterAcc, setLoading, loading, recruiterID, axios, API } =
    useContextProvider();
  const {
    recruiterDetails,
    recruiterJobs,
    setRecruiterJobs,
    recruiterJobsWithUsers,
  } = useRecruiterProvider();

  const [companyDetails, setCompanyDetails] = useState({});

  useEffect(() => {
    if (recruiterDetails.id) {
      const companyName = recruiterDetails.organization.replaceAll(" ", "");

      axios
        .get(`${API}/company/${companyName.toLowerCase()}`)
        .then(({ data }) => setCompanyDetails(data))
        .catch((err) => console.log(err));

      setLoading(false);
    }
  }, [recruiterDetails]);

  return (
    !loading && (
      <div className="desktopRecruiterProfilePage">

        <section className="desktopRecruiterProfilePage_content">
          <DesktopRecruiterProfileHeader
            recruiterDetails={recruiterDetails}
            companyDetails={companyDetails}
            recruiterJobsWithUsers={recruiterJobsWithUsers}
            recruiterJobs={recruiterJobs}
          />

          <Link
            className="desktopRecruiterProfilePage_content_newPost flex-align"
            to="/jobs/new"
          >
            Post Opportunity
          </Link>

          <DesktopRecruiterTopJobs recruiterJobs={recruiterJobs} />

          <DesktopRecruiterJobs
            recruiterJobsWithUsers={recruiterJobsWithUsers}
            recruiterID={recruiterID}
            setRecruiterJobs={setRecruiterJobs}
            recruiterJobs={recruiterJobs}
          />
        </section>
      </div>
    )
  );
}

export default DesktopRecruiterProfile;
