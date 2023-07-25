import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { useJobProvider } from "../../Providers/JobProvider";
import { v4 as uuidv4 } from "uuid";
import SkillsComponent from "./SkillsComponent";
import { convertDate, convertCities } from "./Functions/JobFunctions";
import { convertSkills } from "./Functions/SkillsFunctions";
import convertCompanyForLogo from "./Data/CompanyLogos";
import { bulletPoint } from "./Data/Icons";
import "./JobsShow.scss";

function JobsShow() {
  const { setAppHeader } = useContextProvider();
  const {
    API,
    axios,
    jobID,
    userID,
    TASK,
    isRecruiterAcc,
    isSignedIn,
    editAccess,
  } = useJobProvider();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({});
  const [skillIdArr, setSkillIdArr] = useState([]);
  const [reload, setReload] = useState(false);
  const [applied, setApplied] = useState(false);

  const [jobDetailsToggle, setJobDetailsToggle] = useState(false)

  const applyButtonClick =
    !isSignedIn && !isRecruiterAcc
      ? null
      : isRecruiterAcc && editAccess
      ? () => navigate(`/jobs/${jobID}/edit`)
      : applied && isSignedIn
      ? () => navigate("/user")
      : () => applyToJob();

  const appliedButtonView =
    !isSignedIn && !isRecruiterAcc
      ? null
      : isRecruiterAcc && editAccess
      ? "EDIT"
      : !applied && isSignedIn
      ? "APPLY"
      : "APPLIED";

  const appliedButtonClass =
    isRecruiterAcc && !isSignedIn
      ? "jobShow_header_apply"
      : !applied && isSignedIn
      ? "jobShow_header_apply"
      : "jobShow_header_applied";

  // ADDED DELETE FOR RECRUITERS
  function deleteJob() {
    axios
      .delete(`${API}/jobs/${jobID}`)
      .then(() => navigate("/recruiter"))
      .catch((err) => console.log(err));
  }

  function applyToJob() {
    const obj = {
      user_id: userID,
      job_id: jobID,
    };
    axios
      .post(`${API}/user-jobs`, obj)
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (userID) {
      axios
        .get(`${API}/user-jobs/${userID}`)
        .then(({ data }) => {
          const match = data.find(({ id }) => id === +jobID);
          setApplied(match);
        })
        .catch((err) => console.log(err));
    }
    axios
      .get(`${API}/jobs/${jobID}`)
      .then(({ data }) => {
        setJobDetails(data);
        setSkillIdArr(convertSkills(data.skills));
      })
      .catch((err) => console.log(err));
  }, [reload, jobID, applied]);

  useEffect(() => setAppHeader("Job Details"), []);

  return (
    <div className="jobShow">
      <section className="jobShow_header">
        <img
          src={
            jobDetails.company &&
            convertCompanyForLogo(jobDetails.company.toLowerCase())
          }
          alt="company-logo"
          className="jobShow_header_logo"
        />
<span className="jobShow_header_company">{jobDetails.company}</span>

<h2 className="jobShow_header_title">{jobDetails.title}</h2>
<section className="jobShow_header_location">
<span className="jobShow_header_location_city">
              {jobDetails.city && convertCities(jobDetails.city)}
            </span>

          {jobDetails.full_remote && (
            <span className="jobShow_header_location_remote">
              <span>Remote</span>
            </span>
          )}
          
        </section>
        <hr/>


        {/* <div className="jobShow_header_details">
          <h2 className="jobShow_header_details_title">{jobDetails.title}</h2>
            <span>
              {jobDetails.city && convertCities(jobDetails.city)}
            </span>
          <section className="jobShow_header_details_company">
            <span>{jobDetails.company}</span>
            {bulletPoint}
            <span>
              {jobDetails.city && convertCities(jobDetails.city)}
            </span>
          </section>
        </div> */}
        {/* <section className="jobShow_header_options">
          {jobDetails.full_remote && (
            <span className="jobShow_header_options_remote">
              <span>REMOTE</span>
            </span>
          )}
          {isSignedIn || (isRecruiterAcc && editAccess) ? (
            <button onClick={applyButtonClick} className={appliedButtonClass}>
              <span>{appliedButtonView}</span>
            </button>
          ) : null}
        </section> */}

        {/* <hr className="jobShow_header_border-bottom" /> */}
      </section>

      <SkillsComponent skillsArr={skillIdArr} justList={true} />

      <section className="jobShow_detail">
        <div className="jobShow_detail_buttons">
          <button className="jobShow_detail_button_description"
          onClick={() => setJobDetailsToggle(false)}>Description</button>
          <button className="jobShow_detail_button_tasks"
          onClick={() => setJobDetailsToggle(true)}>Tasks</button>
        </div>

        <section className="jobShow_details_description">
          {
            !jobDetailsToggle ?
           <>
            <span className="job-disclaimer">*Not a real job posting*</span>
            <span>{jobDetails.details}</span>
            </>
          :
          <span className="jobShow_details_description_label_role-list">
          {jobDetails.tasks &&
            jobDetails.tasks.split(`${TASK}`).map((el) => {
              if (el) {
                return (
                  <li key={uuidv4()}>
                    <span>{el}</span>
                  </li>
                );
              }
            })}
        </span>
}
        </section>
        </section>
      
      {/* <section className="jobShow_details">
        <div className="jobShow_details_description">
          <span className="jobShow_details_description_label">Description:</span>
          <span className="job-disclaimer">*Not a real job posting*</span>
          <span>{jobDetails.details}</span>
        </div>

        <div className="jobShow_details_description">
          <span className="jobShow_details_description_label">Tasks:</span>
          <span className="jobShow_details_description_label_role-list">
            {jobDetails.tasks &&
              jobDetails.tasks.split(`${TASK}`).map((el) => {
                if (el) {
                  return (
                    <li key={uuidv4()}>
                      <span>{el}</span>
                    </li>
                  );
                }
              })}
          </span>
        </div>
      </section> */}

      {isRecruiterAcc || (isSignedIn && !applied) ? (
        <button
          onClick={
            appliedButtonView === "EDIT" ? () => deleteJob() : applyButtonClick
          }
          className={
            (isRecruiterAcc && !editAccess) || (!isSignedIn && !isRecruiterAcc)
              ? "hide"
              : "jobShow_apply"
          }
        >
          {appliedButtonView === "EDIT" ? "DELETE" : appliedButtonView}
        </button>
      ) : isSignedIn && applied ? (
        <div className="jobShow_applied" onClick={applyButtonClick}>
          APPLIED ON {convertDate(applied["date_applied"])}
        </div>
      ) : null}
    </div>
  );
}

export default JobsShow;
