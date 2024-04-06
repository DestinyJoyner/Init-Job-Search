import { useState, useEffect } from "react";
import { getTwoHighestAppliedToJobs } from "../../../../Functions/RecruiterFunctions/RecruiterProfileFunctions";
import { v4 as uuidv4 } from "uuid";
import RecruiterProfileTopJobs from "../../../RecruiterProfileTopJobs/RecruiterProfileTopJobs";
import "./DesktopRecruiterTopJobs.scss"

function DesktopRecruiterTopJobs({recruiterJobs}) {
    const [recruiterTopJobs, setRecruiterTopJobs] = useState([])

    // useEffect(() => {
    //     setRecruiterTopJobs(getTwoHighestAppliedToJobs(recruiterJobs))
    // },[recruiterTopJobs])

    return (
        <div className="desktopRecruiterTopJobs">
            <span className="desktopRecruiterTopJobs_header">Top Jobs</span>
        {recruiterTopJobs.length > 0 ? (
      <section className="desktopRecruiterTopJobs_topJobs">
        {recruiterTopJobs.map((jobObj) => (
          <RecruiterProfileTopJobs key={uuidv4()} jobObj={jobObj} />
        ))}
      </section>
    ) :
    <span>None of Your Current Jobs Have Applicants</span>}
        </div>
    );
}

export default DesktopRecruiterTopJobs;