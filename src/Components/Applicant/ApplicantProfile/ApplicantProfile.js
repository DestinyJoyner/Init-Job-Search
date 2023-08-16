import { useState, useEffect } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import NoAccess from "../../App/NoAccess.js";
import SkillsComponent from "../../Job/SkillsComponent";

import "./ApplicantProfile.scss";

function ApplicantProfile(props) {
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();
  const { userID, isRecruiterAcc, loading, setLoading } = useContextProvider();
  const { setAppHeader } = useNavProvider();
console.log(applicantDetails)
  // variables
  const firstInitial = applicantDetails.id ? applicantDetails["first_name"].charAt(0): "";
  const lastInitial = applicantJobs.id ?applicantDetails["last_name"].charAt(0): "";

  useEffect(() => {
    if (isRecruiterAcc && !userID) {
      navigate("/recruiter");
    } else {
      setAppHeader("Profile");
    }
  }, []);
  
  useEffect(() => {
    if(applicantDetails.id){
        setLoading(false)
    }
  },[applicantDetails])
 

  if (!userID) {
    return <NoAccess />;
  }
  return (
    !loading && (
      <div className="applicantProfile grid-center">
        <section className="applicantProfile_header">
          <div className="applicantProfile_header_icon">
            {firstInitial}
            {lastInitial}
          </div>
          <div className="applicantProfile_header_details">
            <span className="applicantProfile_header_details_name">{applicantDetails.first_name} {applicantDetails.last_name}</span>
            <span className="applicantProfile_header_details_role">ROLE</span>
            <SkillsComponent justList={true}
            skillsArr={applicantSkillIds}/>
          </div>
          <div className="applicantProfile_header_about">
            <span className="applicantProfile_header_about_header">About Me:</span>
            <p className="applicantProfile_header_about_text">{applicantDetails.bio} </p>
          </div>
        </section>
      </div>
    )
  );
}

export default ApplicantProfile;
