import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useNavProvider } from "../../../Providers/NavProvider";
import ApplicantProfile from "../ApplicantProfile/ApplicantProfile";
import NoAccess from "../../App/NoAccess/NoAccess.js";

import "./ApplicantProfilePage.scss";

function ApplicantProfilePage(props) {
  const { setLoading, loading, isRecruiterAcc, userID } = useContextProvider();
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
  }, []);
  
  if (!userID) {
    return <NoAccess />;
  }


  return (
   
  <div className="applicantProfile_page">
    <ApplicantProfile />
  </div>);
}

export default ApplicantProfilePage;
