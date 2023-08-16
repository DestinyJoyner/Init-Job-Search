import { useState, useEffect } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import NoAccess from "../../App/NoAccess.js";
import ApplicantProfileHeader from "../ApplicantProfilePage/ApplicantProfileHeader";

import "./ApplicantProfile.scss";

function ApplicantProfile(props) {
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();
  const { userID, isRecruiterAcc, loading, setLoading } = useContextProvider();
  const { setAppHeader } = useNavProvider();
  // variables
  const {id, education, project_one, project_two} = applicantDetails


  useEffect(() => {
    if (isRecruiterAcc && !userID) {
      navigate("/recruiter");
    } else {
      setAppHeader("Profile");
    }
  }, []);

  useEffect(() => {
    if(id){
        setLoading(false)
    }
  },[applicantDetails])
 

  if (!userID) {
    return <NoAccess />;
  }
  return (
    !loading && (
      <div className="applicantProfile grid-center">
        <ApplicantProfileHeader 
        applicantDetails={applicantDetails}
        applicantSkills={applicantSkillIds}/>
       
      </div>
    )
  );
}

export default ApplicantProfile;
