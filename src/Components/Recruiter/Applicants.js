import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useJobProvider } from "../../Providers/JobProvider";
import { useContextProvider } from "../../Providers/Provider";
import { useNavProvider } from "../../Providers/NavProvider";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider";
import { v4 as uuidv4 } from "uuid";

import ApplicantCard from "./ApplicantCard";
import { jobCompany, jobLocation } from "../Job/Data/Icons";
import "./Applicants.css";

export default function Applicants() {
  const {  recruiterID,  setShowAccess, jobID, isSignedIn, } = useJobProvider();
  const { recruiterJobs, showAccess } = useRecruiterProvider()
  const { isRecruiterAcc  } = useContextProvider()
  const {setAppHeader} = useNavProvider()
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [thisJob, setThisJob] = useState({});

  useEffect(() => {
    const filter = recruiterJobs.find(({ id }) => id === +jobID);
    if (filter) {
      setThisJob(filter);
    }
    if (filter && filter.users) {
      setApplicants(filter.users);
    }
  }, [jobID, recruiterJobs.length]);
  useEffect(() => {
    if( !isRecruiterAcc ){
      navigate("/not-found")
    }
    else {
      setAppHeader("Applicants")
    }
    }, [])
// applicants page add skills or corresponding skills for applicant/ space for more info on job posting etc..... -> alter color scheme???

  return (
    showAccess &&
      <div className="job-applicant-page">
      {/* <Header header={"Job Applicants"} /> */}
      <section className="job-applicant-job-details">
        <Link to={`/jobs/${thisJob.id}`} className="applicant-title">
          <h2>{thisJob.title}</h2>
        </Link>
        <span className="applicant-company">
          {jobCompany}
          {thisJob.company}
        </span>
        <span className="applicant-city">
          {jobLocation}
          {thisJob.city}
        </span>
        <span className="applicant-remote">
          {thisJob.full_remote && "REMOTE"}
        </span>
      </section>

      <section className="applicant-list">
        <h3>
          {!applicants.length
            ? "No Applicants"
            : `Applicants (${applicants.length})`}
        </h3>
        {applicants.map((obj) => (
          <ApplicantCard key={uuidv4()} obj={obj} />
        ))}
      </section>

      <Link className="job-applicant-link" to={`/jobs/${thisJob.id}`}>
        VIEW JOB DETAILS
      </Link>
    </div>
    
    
  );
}
