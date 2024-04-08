import { useEffect, useState } from "react";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import LogoBanner from "../../../App/LogoBanner/LogoBanner";
import RecruiterProfileHeader from "../RecruiterProfileHeader";
import DesktopRecruiterProfileBottomHeader from "./DesktopRecruiterProfileBottomHeader/DesktopRecruiterProfileBottomHeader";
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
        <LogoBanner />

        <section className="desktopRecruiterProfilePage_content">
          <RecruiterProfileHeader
            recruiterDetails={recruiterDetails}
            companyDetails={companyDetails}
          />

          <DesktopRecruiterProfileBottomHeader />

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
