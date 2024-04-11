import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import ApplicantProfileHeader from "./ApplicantProfileHeader/ApplicantProfileHeader.js";
import SliderButtons from "../../SliderButton/SliderButtons";
import ApplicantProfileDetails from "./ApplicantProfileDetails";
import ApplicantProfileAppliedJobs from "./ApplicantProfileAppliedJobs";
import RecruiterNoteApplicantProfile from "../../App/RecruiterNoteApplicantProfile/RecruiterNoteApplicantProfile.js"

import "./ApplicantProfile.scss";

function ApplicantProfile() {
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();
  const { userID, loading, setLoading, isRecruiterAcc } = useContextProvider();
  const [profileInfoToggle, setProfileInfoToggle] = useState("details")

  useEffect(() => {
    if(applicantDetails.id){
        setLoading(false)
    }
  },[applicantDetails, loading])
 
  return (
    !loading && (
      <div className={!isRecruiterAcc ? "applicantProfile grid-center" : "applicantProfile_recruiterView grid-center"}>
        <ApplicantProfileHeader 
        applicantDetails={applicantDetails}
        applicantSkills={applicantSkillIds}/>
        
        { !isRecruiterAcc ? <SliderButtons 
        button1={"Details"}
        button2={"Activity"}
        setFunction ={setProfileInfoToggle}/> :
          <RecruiterNoteApplicantProfile />
      }

        {
            profileInfoToggle === "details" ?
            <ApplicantProfileDetails applicantDetails={applicantDetails} /> :
            <ApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        }

        { !isRecruiterAcc && (
            profileInfoToggle === "details" ?
            <Link
            className="applicantProfile_edit" 
            to="/user/edit">EDIT PROFILE</Link> :
            <Link
            className="applicantProfile_edit" 
            to="/jobs">SEARCH JOBS</Link> )
        }
       
      </div>
    )
  );
}

export default ApplicantProfile;
