import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useJobProvider } from "../../../Providers/JobProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useRecruiterProvider } from "../../../Providers/RecruiterProvider";
import { v4 as uuidv4 } from "uuid";
import JobDetailsProfileLayout from "../../Job/JobDetailsProfileLayout/JobDetailsProfileLayout";

import ApplicantCard from "./ApplicantCard/ApplicantCard";
import { jobCompany, jobLocation } from "../../App/Data/Icons";
import "./ApplicantListPage.scss";

export default function ApplicantListPage() {
  const { recruiterID, setShowAccess, jobID, isSignedIn } = useJobProvider();
  const { recruiterJobs, showAccess } = useRecruiterProvider();
  const { isRecruiterAcc, setLoading, loading } = useContextProvider();
  const { setAppHeader } = useNavProvider();
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
    if (!isRecruiterAcc) {
      navigate("/not-found");
    } else {
      setAppHeader("Job Applicants");
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [loading]);
  // applicants page add skills or corresponding skills for applicant/ space for more info on job posting etc..... -> alter color scheme???

  return (
    showAccess &&
    !loading && (
      <div className="job-applicant-page">
        <JobDetailsProfileLayout jobID={jobID} />

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
      </div>
    )
  );
}
