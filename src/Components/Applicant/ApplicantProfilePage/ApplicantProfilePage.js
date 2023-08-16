import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useNavProvider } from "../../../Providers/NavProvider";

import "./ApplicantProfilePage.scss";

function ApplicantProfilePage(props) {
  const { setLoading, isRecruiterAcc, userID } = useContextProvider();
  const { applicantDetails, applicantJobs } = useUserProvider();
  const { setAppHeader } = useNavProvider();

  useEffect(() => {
    if (isRecruiterAcc && !userID) {
      navigate("/recruiter");
    }
    if (isRecruiterAcc) {
      setAppHeader("Applicant Profile");
    } else {
      setAppHeader("Profile");
    }
    setLoading(false);
  }, []);

  return (
  <div className="applicantProfile_page">

  </div>);
}

export default ApplicantProfilePage;
