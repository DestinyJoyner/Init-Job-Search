import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import LogoBanner from "../../../App/LogoBanner/LogoBanner";
import RecruiterProfileHeader from "../RecruiterProfileHeader";
import DesktopRecruiterTopJobs from "./DesktopRecruiterTopJobs/DesktopRecruiterTopJobs";


import "./DesktopRecruiterProfile.scss";

function DesktopRecruiterProfile(props) {
  const { isRecruiterAcc, setLoading, loading, recruiterID, axios, API } =
    useContextProvider();
  const {
    recruiterDetails,
    recruiterJobs,
    setRecruiterJobs,
    recruiterJobsWithUsers,
    setRecruiterJobsWithUsers,
  } = useRecruiterProvider();

  const [companyDetails, setCompanyDetails] = useState({});

  const totalApplicants = recruiterJobsWithUsers.reduce((acc, { users }) => {
    return (acc += users.length);
  }, 0);
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
            recruiterJobs={recruiterJobs}
            totalApplicants={totalApplicants}
          />

          <section className="desktopRecruiterProfilePage_content_bottomHeader">
            <div className="desktopRecruiterProfilePage_content_bottomHeader_newJob">
              <Link to="/jobs/new">Post Opportunity</Link>
            </div>

            <p className="desktopRecruiterProfilePage_content_bottomHeader_about">
              {" "}
              {companyDetails.company_description}
            </p>
          </section>

          <DesktopRecruiterTopJobs recruiterJobs={recruiterJobs}/>
          
        </section>

      </div>
    )
  );
}

export default DesktopRecruiterProfile;
