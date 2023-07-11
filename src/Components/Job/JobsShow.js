import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { useJobProvider } from "../../Providers/JobProvider";
import { v4 as uuidv4 } from "uuid";
import SkillsComponent from "./SkillsComponent";
import Header from "./Header";
import { convertDate, convertCities } from "./Functions/JobFunctions";
import { convertSkills } from "./Functions/SkillsFunctions";
import { jobCompany, jobLocation, jobApplied } from "./Data/Icons";
import { GrEdit } from "react-icons/gr";
import { GiPill } from "react-icons/gi";
import "./JobsShow.css";

function JobsShow() {
  const { triggerBonus, setAppHeader, } = useContextProvider()
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

  const applyButtonClick =
    !isSignedIn && !isRecruiterAcc
      ? null
      : isRecruiterAcc && editAccess
      ? () => navigate(`/jobs/${jobID}/edit`)
      : applied && isSignedIn
      ? () =>  navigate("/user")
      : () =>  applyToJob();

  const appliedButtonView =
    !isSignedIn && !isRecruiterAcc
      ? null
      : isRecruiterAcc && editAccess
      ? "EDIT"
      : !applied && isSignedIn
      ? "APPLY"
      : "APPLIED";

  const appliedButtonClass = isRecruiterAcc && !isSignedIn
    ? "job-show-header-apply job-show-edit"
    : !applied && isSignedIn
    ? "job-show-header-apply"
    : "job-show-header-applied";

    // ADDED DELETE FOR RECRUITERS
    function deleteJob () {
      axios.delete(`${API}/jobs/${jobID}`)
      .then(() => navigate("/recruiter"))
      .catch(err => console.log(err))
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
    if(jobID === '22' && !triggerBonus){
      navigate("/not-found")
    }
    if(userID){
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
        // setAppHeader(data.title)
      })
      .catch((err) => console.log(err));
  }, [reload, jobID, applied]);
  useEffect(() => setAppHeader("Job Details"), [])

  return (
    <div className="job-show">
      <section className={jobDetails.id !== 22 ? "job-show-header" : "job-show-header bonus-job"  }>
        {
          jobDetails.id !== 22 ?
          <>
          {/* <Header header={jobDetails.title} /> */}
          <h2>{jobDetails.title}</h2>
        <div className="job-show-header-details">
          <span className="job-show-company">
            {jobCompany}
            <span>{jobDetails.company}</span>
          </span>
          <span className="job-show-location">
            {jobLocation}
            <span>{jobDetails.city && convertCities(jobDetails.city)}</span>
          </span>
        </div>
        <hr />
        {jobDetails.full_remote && (
          <span className="job-show-remote">
            <span>REMOTE</span>
          </span>
        )}
        {
          isSignedIn  || (isRecruiterAcc && editAccess) ?
          <button onClick={applyButtonClick} className={appliedButtonClass}>
          <span>
            {appliedButtonView}
            {!isSignedIn && isRecruiterAcc && editAccess && (
              <GrEdit size={"25px"} color={"#ffde59"} />
            )}
          </span>
        </button>
        :
        null
        }</> :
        <>
        <Header header={jobDetails.title} />
        <div className="bonus-show">
          ...follow the white rabbit.
        </div>
        </>
        }
      </section>
      {
       jobDetails.id !== 22 ?
       <SkillsComponent skillsArr={skillIdArr} justList={true} /> :
       <section className="skills-component">
       <GiPill color={"red"} size={"50px"} />
       <GiPill color={"blue"} size={"50px"} />
      </section>
      }

      {/* <SkillsComponent skillsArr={skillIdArr} justList={true} /> */}

      <section className="job-show-details">
        <div className="job-show-description">
          <span className="job-show-label">Description:</span>
          <span className="job-disclaimer">*Not a real job posting. For Demo purposes ONLY*</span>
          <span>{jobDetails.details}</span>
        </div>

        <div className="job-show-description">
          <span className="job-show-label">Tasks:</span>
          <span className="job-show-role-list">
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
      </section>

      {
       isRecruiterAcc || (isSignedIn && !applied ) ? (
        <button
          onClick={appliedButtonView === "EDIT" ? () => deleteJob() : applyButtonClick}
          className={(isRecruiterAcc && !editAccess) || (!isSignedIn && !isRecruiterAcc)  || jobID === "22" ? "hide" : "job-show-apply"}
        >
          {appliedButtonView === "EDIT" ? "DELETE" : appliedButtonView}
        </button>
      ) : 
        isSignedIn && applied ?
        (
          <div className="job-show-applied">
            {jobApplied}
            <span onClick={applyButtonClick}>
              APPLIED ON {convertDate(applied["date_applied"])}
            </span>
          </div>
        ) :
          null
      }
    </div>
  );
}

export default JobsShow;
