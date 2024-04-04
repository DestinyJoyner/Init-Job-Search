import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import ApplicantProfileHeader from "./ApplicantProfileHeader/ApplicantProfileHeader.js";
import SliderButtons from "../../SliderButton/SliderButtons";
import ApplicantProfileDetails from "./ApplicantProfileDetails";
import ApplicantProfileAppliedJobs from "./ApplicantProfileAppliedJobs";

import "./ApplicantProfile.scss";

function ApplicantProfile() {
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();
  const { userID, loading, setLoading } = useContextProvider();
  const [profileInfoToggle, setProfileInfoToggle] = useState("details")

  useEffect(() => {
    if(applicantDetails.id){
        setLoading(false)
    }
  },[applicantDetails, loading])
 
  return (
    !loading && (
      <div className="applicantProfile grid-center">
        <ApplicantProfileHeader 
        applicantDetails={applicantDetails}
        applicantSkills={applicantSkillIds}/>
        
        <SliderButtons 
        button1={"Details"}
        button2={"Activity"}
        setFunction ={setProfileInfoToggle}/>

        {
            profileInfoToggle === "details" ?
            <ApplicantProfileDetails applicantDetails={applicantDetails} /> :
            <ApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        }

        {
            profileInfoToggle === "details" ?
            <Link
            className="applicantProfile_edit" 
            to="/user/edit">EDIT PROFILE</Link> :
            <Link
            className="applicantProfile_edit" 
            to="/jobs">SEARCH JOBS</Link>
        }
       
      </div>
    )
  );
}

export default ApplicantProfile;
