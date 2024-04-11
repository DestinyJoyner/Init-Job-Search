import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import { useJobProvider } from "../../../../Providers/JobProvider";
import DesktopApplicantListPageHeader from "../DesktopApplicantListPageHeader/DesktopApplicantListPageHeader";
import JobDetailsProfileLayout from "../../../Job/JobDetailsProfileLayout/JobDetailsProfileLayout";
import ApplicantCard from "../ApplicantCard/ApplicantCard";

import "./DesktopApplicantListPage.scss";

function DesktopApplicantListPage(props) {
  const { recruiterID, setShowAccess, jobID, isSignedIn } = useJobProvider();
  const { recruiterJobs, showAccess } = useRecruiterProvider();
  const { isRecruiterAcc, setLoading, loading, axios, API } =
    useContextProvider();

  const navigate = useNavigate();

  const [applicants, setApplicants] = useState([]);
  const [thisJob, setThisJob] = useState({});

  useEffect(() => {
    const filter = recruiterJobs.find(({ id }) => id === +jobID);
    if (filter && filter.users) {
      setApplicants(filter.users);
    }
  }, [jobID, recruiterJobs.length]);

  useEffect(() => {
    if (!isRecruiterAcc) {
      navigate("/not-found");
    } else {
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => setThisJob(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <div className="desktopApplicantListPage">
        <DesktopApplicantListPageHeader />

      <JobDetailsProfileLayout jobID={jobID} />

      <section className="desktopApplicantListPage_applicants flex-column">
        {applicants.map((el) => (
          <ApplicantCard key={uuidv4()} obj={el} />
        ))}
      </section>
    </div>
  );
}

export default DesktopApplicantListPage;
