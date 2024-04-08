import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useRecruiterProvider } from "../../../Providers/RecruiterProvider";
import RecruiterJob from "../RecruiterJob.js";
import RecruiterProfileHeader from "./RecruiterProfileHeader";
import RecruiterProfileTopJobs from "../RecruiterProfileTopJobs/RecruiterProfileTopJobs";
import NoAccess from "../../App/NoAccess/NoAccess.js";
import Dropdown from "../../Job/Inputs/Dropdown";
import { getTwoHighestAppliedToJobs, handleRecruiterJobSort } from "../../Functions/RecruiterFunctions/RecruiterProfileFunctions";
import { recruiterSortOptionsArr } from "../../App/Data/RecruiterSortObj";
import { addJob } from "../../App/Data/Icons";

import "./RecruiterProfile.scss";

export default function RecruiterProfile() {
  const { isRecruiterAcc, setLoading, loading, recruiterID } = useContextProvider();
  const { recruiterDetails, recruiterJobs, setRecruiterJobs, recruiterJobsWithUsers, setRecruiterJobsWithUsers } = useRecruiterProvider();
  const { setAppHeader } = useNavProvider();

  const [recruiterTopJobs, setRecruiterTopJobs] = useState([])
  const [recruiterSortJobs, setRecruiterSortJobs] = useState("")

  useEffect(() => {
    setAppHeader("Profile");
  }, []);

  useEffect(() => {
    if (recruiterDetails.id) {
      setLoading(false);
      setRecruiterTopJobs(getTwoHighestAppliedToJobs(recruiterJobs))
    }
  }, [recruiterDetails]);


  if (!isRecruiterAcc) {
    return <NoAccess />;
  }
  return (
    recruiterDetails.id && (
      <div className="recruiterProfile grid-center center">
        <RecruiterProfileHeader recruiterDetails={recruiterDetails} />

        <hr />

        <div className="recruiterProfile_jobsPosted_header">
          <h2>
            Jobs Posted ({recruiterJobs.length})
          </h2>
          
          <Dropdown 
          idVal={"recruiterSort"}
          value={recruiterSortJobs}
          onChange={(event) => handleRecruiterJobSort(event, setRecruiterSortJobs, setRecruiterJobs, recruiterJobsWithUsers, recruiterID)}
          optionsArray={recruiterSortOptionsArr}/>

          <Link to="/jobs/new">{addJob}</Link>
        </div>

        <div className="recruiterProfile_jobsList">
          {recruiterJobs.length > 0 ? (
            recruiterJobs.map((e) => (
              <RecruiterJob jobObject={e} key={uuidv4()} />
            ))
          ) : (
            <p>No Current Job Postings</p>
          )}
        </div>

        <Link className="recruiterProfile_new-job-link" to="/jobs/new">
          POST A JOB
        </Link>
      </div>
    )
  );
}
