import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useNavProvider } from "../../../Providers/NavProvider";
import ApplicantProfile from "../ApplicantProfile/ApplicantProfile";
import ApplicantProfileRecruiterView from "../ApplicantProfile/ApplicantProfileRecruiterView";
import NoAccess from "../../App/NoAccess";

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
  }, []);
  
  if (!userID) {
    return <NoAccess />;
  }

  return (
  <div className="applicantProfile_page">
    {
      !isRecruiterAcc ? 
      <ApplicantProfile /> :
      <ApplicantProfileRecruiterView />
    }
  </div>);
}

export default ApplicantProfilePage;
