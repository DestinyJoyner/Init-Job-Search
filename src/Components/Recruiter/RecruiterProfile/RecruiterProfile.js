import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useRecruiterProvider } from "../../../Providers/RecruiterProvider";
import RecruiterJob from "../RecruiterJob.js";
import RecruiterProfileHeader from "./RecruiterProfileHeader";
import RecruiterProfileTopJobs from "../RecruiterProfileTopJobs/RecruiterProfileTopJobs";
import NoAccess from "../../App/NoAccess";
import { getTwoHighestAppliedToJobs } from "../../Functions/RecruiterFunctions/RecruiterProfileFunctions";
import { addJob } from "../../Job/Data/Icons";

import "./RecruiterProfile.scss";

export default function RecruiterProfile() {
  const { isRecruiterAcc, setLoading, loading } = useContextProvider();
  const { recruiterDetails, recruiterJobs } = useRecruiterProvider();
  const { setAppHeader } = useNavProvider();

  const recruiterTopJobs = getTwoHighestAppliedToJobs(recruiterJobs)


  useEffect(() => {
    setAppHeader("Profile");
  }, []);

  useEffect(() => {
    if (recruiterDetails.id) {
      setLoading(false);
    }
  }, [recruiterDetails]);

  if (!isRecruiterAcc) {
    return <NoAccess />;
  }
  return (
    recruiterDetails.id && (
      <div className="recruiterProfile grid-center center">
        <RecruiterProfileHeader recruiterDetails={recruiterDetails} />

        {/* <hr /> */}

        <div className="recruiterProfile_jobsPosted_header">
          <h2>Jobs Posted ({recruiterJobs.length})</h2>
          <Link to="/jobs/new">{addJob}</Link>
        </div>

        { recruiterTopJobs.length > 0 &&
          <section className="recruiterProfile_topJobs">
            {
            recruiterTopJobs.map(jobObj => <RecruiterProfileTopJobs 
              key={uuidv4()}
            jobObj={jobObj}/>)
}
        </section>
}

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
