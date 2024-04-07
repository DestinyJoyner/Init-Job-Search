import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import LogoBanner from "../../../App/LogoBanner/LogoBanner";
import RecruiterProfileHeader from "../RecruiterProfileHeader";
import DesktopRecruiterProfileBottomHeader from "./DesktopRecruiterProfileBottomHeader/DesktopRecruiterProfileBottomHeader";
import DesktopRecruiterTopJobs from "./DesktopRecruiterTopJobs/DesktopRecruiterTopJobs";

import "./DesktopRecruiterProfile.scss";

function DesktopRecruiterProfile(props) {
  const { isRecruiterAcc, setLoading, loading, recruiterID, axios, API } =
    useContextProvider();
  const {
    recruiterDetails,
    recruiterJobs
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
        <LogoBanner />

        <section className="desktopRecruiterProfilePage_content">
          <RecruiterProfileHeader
            recruiterDetails={recruiterDetails}
            companyDetails = {companyDetails}
          />

          <DesktopRecruiterProfileBottomHeader />

          {/* <section className="desktopRecruiterProfilePage_content_bottomHeader">
            <div className="desktopRecruiterProfilePage_content_bottomHeader_newJob">
              <Link to="/jobs/new">Post Opportunity</Link>
            </div>

            <div className="recruiterProfile_bottomHeader_stats">
            <IoStatsChart />
            <span className="recruiterProfile_bottomHeader_stats_jobs"><b>Jobs Posted</b>: {recruiterJobs.length}</span>
            <span className="recruiterProfile_bottomHeader_stats_jobs"><b>Total Applicants</b>: {totalApplicants}</span>
          </div>

          </section> */}

          <DesktopRecruiterTopJobs recruiterJobs={recruiterJobs}/>

        </section>

      </div>
    )
  );
}

export default DesktopRecruiterProfile;
