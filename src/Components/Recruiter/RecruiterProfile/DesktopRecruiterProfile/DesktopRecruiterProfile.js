import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import LogoBanner from "../../../App/LogoBanner/LogoBanner"
import RecruiterProfileHeader from "../RecruiterProfileHeader";
import { applicantProfileHeaderLabel } from "../../../Functions/ApplicantFunctions/ApplicantProfileFunctions";
import "./DesktopRecruiterProfile.scss"

function DesktopRecruiterProfile(props) {
    const { isRecruiterAcc, setLoading, loading, recruiterID } = useContextProvider();
    const { recruiterDetails, recruiterJobs, setRecruiterJobs, recruiterJobsWithUsers, setRecruiterJobsWithUsers } = useRecruiterProvider()

console.log(recruiterJobsWithUsers)
useEffect(() => {
    if(recruiterDetails.id){
        setLoading(false)
    }
},[recruiterDetails])

    return (
        !loading&&
        <div className="desktopRecruiterProfilePage">
            <LogoBanner />

            <section className="desktopRecruiterProfilePage_content">
            <RecruiterProfileHeader recruiterDetails={recruiterDetails} />

            <section className="desktopRecruiterProfilePage_content_bottomHeader">
        
          <div className="desktopRecruiterProfilePage_content_bottomHeader_newJob">
          <Link to="/jobs/new">Post Opportunity</Link>
          </div>

          <div className="desktopRecruiterProfilePage_content_bottomHeader_about"> fetch for company info
          </div>

          </section>
            </section>
            
            
        </div>
    );
}

export default DesktopRecruiterProfile;