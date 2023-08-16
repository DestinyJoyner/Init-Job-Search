import { useState } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { convertDate } from "../../Functions/ConvertFunctions/ConversionFunctions";

function ApplicantJobs(props) {
    const {applicantJobs} = useUserProvider()
    const [showAllJobs, setShowAllJobs] = useState(false)

    return (
        <div className="applicantProfile_jobs">
            
        </div>
    );
}

export default ApplicantJobs;