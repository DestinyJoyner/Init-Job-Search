import { useState, useEffect } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";

import "./ApplicantProfile.scss"

function ApplicantProfile(props) {
    const {applicantDetails, applicantSkillIds, applicantJobs} = useUserProvider() 
    const { userID } = useContextProvider()
    const { setAppHeader } = useNavProvider()


    useEffect(() => setAppHeader("Profile"),[])


    return (
        <div className="applicantProfile">
            
        </div>
    );
}

export default ApplicantProfile;