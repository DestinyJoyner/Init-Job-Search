import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import NoAccess from "../../App/NoAccess.js";
import ApplicantProfileHeader from "./ApplicantProfileHeader";
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
        
        <SliderButtons 
        button1={"Details"}
        button2={"Activity"}
        setFunction ={setProfileInfoToggle}/>

        {
            profileInfoToggle === "details" ?
            <ApplicantProfileDetails applicantDetails={applicantDetails} /> :
            <ApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        }

        <Link
        className="applicantProfile_edit" 
        to="/user/edit">EDIT PROFILE</Link>
      </div>
    )
  );
}

export default ApplicantProfile;