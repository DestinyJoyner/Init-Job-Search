import { useEffect } from "react";
import { useContextProvider } from "../../../../../Providers/Provider.js";
import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import ApplicantProfileHeader from "../../ApplicantProfileHeader/ApplicantProfileHeader.js"
import ApplicantProfileDetails from "../../ApplicantProfileDetails.js";
import ApplicantProfileAppliedJobs from "../../ApplicantProfileAppliedJobs.js";
import LogoBanner from "../../../../App/LogoBanner/LogoBanner.js";
import "./DesktopApplicantProfilePage.scss"

function DesktopApplicantProfilePage() {
    const {loading, setLoading} = useContextProvider()
    const {applicantDetails, applicantSkillIds, applicantJobs} = useUserProvider()

    useEffect(() => {
       
        if(applicantDetails.id){
            setLoading(false)
        }
    },[applicantDetails])
    
    return (
        <div className='desktopApplicantProfilePage'>
            <section className="desktopApplicantProfilePage_banner">
                <LogoBanner />
            </section>

            <section className="desktopApplicantProfilePage_content">
            <ApplicantProfileHeader applicantDetails={applicantDetails}
            applicantSkills={applicantSkillIds} />
        
        <ApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        <ApplicantProfileDetails applicantDetails={applicantDetails} />
            </section>
            
        </div>
    );
}

export default DesktopApplicantProfilePage;