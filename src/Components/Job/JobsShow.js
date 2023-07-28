import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import { useNavProvider } from "../../Providers/NavProvider";
import { useJobProvider } from "../../Providers/JobProvider";
import { v4 as uuidv4 } from "uuid";
import SkillsComponent from "./SkillsComponent";
import { convertDate, convertCities } from "./Functions/JobFunctions";
import { convertSkills } from "./Functions/SkillsFunctions";
import convertCompanyForLogo from "./Data/CompanyLogos";
import "./JobsShow.scss";

function JobsShow() {
  const { API, axios, setLoading } = useContextProvider();
  const { setAppHeader } = useNavProvider()
  const {
    jobID,
    userID,
    isRecruiterAcc,
    isSignedIn,
    editAccess,
  } = useJobProvider();
  const TASK = process.env.REACT_APP_TASK_BREAK;
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({});
  const [skillIdArr, setSkillIdArr] = useState([]);
  const [reload, setReload] = useState(false);
  const [applied, setApplied] = useState(false);
  const [jobDetailsToggle, setJobDetailsToggle] = useState(false);

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
        setLoading(false)
        setJobDetails(data);
        setSkillIdArr(convertSkills(data.skills));
      })
      .catch((err) => console.log(err));
  }, [reload, jobID, applied]);

  useEffect(() => setAppHeader("Job Details"), []);

  return (
    <div className="jobShow">
      <section className="jobShow_header grid-center">
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
        <hr />
      </section>

      <SkillsComponent skillsArr={skillIdArr} justList={true} />

      <section className="jobShow_jobDetails">
        <div className="jobShow_jobDetails_buttons">
          <button
            className={
              !jobDetailsToggle
                ? "jobShow_jobDetails_buttons_description jobDetailSelected"
                : "jobShow_jobDetails_buttons_description"
            }
            onClick={() => setJobDetailsToggle(false)}
          >
            Description
          </button>
          <button
            className={
              jobDetailsToggle
                ? "jobShow_jobDetails_buttons_tasks jobDetailSelected"
                : "jobShow_jobDetails_buttons_tasks"
            }
            onClick={() => setJobDetailsToggle(true)}
          >
            Tasks
          </button>
        </div>

        <section className="jobShow_jobDetails_overview">
          {!jobDetailsToggle ? (
            <div className="jobShow_jobDetails_overview_description">
              <span className="jobShow_jobDetails_overview_description_disclaimer">
                *Not a real job posting*
              </span>
              <span>{jobDetails.details}</span>
            </div>
          ) : (
            <ul className="jobShow_jobDetails_overview_tasks">
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
            </ul>
          )}
        </section>
      </section>
      <hr className="jobShow_divider" />
      <section className="jobShow_actionButtons">
        {isRecruiterAcc && editAccess ? (
          <>
            <button
              onClick={() => navigate(`/jobs/${jobID}/edit`)}
              className="jobShow_actionButtons_edit"
            >
              EDIT
            </button>
            <button
              onClick={() => deleteJob()}
              className="jobShow_actionButtons_edit"
            >
              DELETE
            </button>
          </>
        ) : isRecruiterAcc && !editAccess ? null : isSignedIn && applied ? (
          <div
            className="jobShow_actionButtons_applied"
            onClick={() => navigate("/user")}
          >
            APPLIED ON {convertDate(applied["date_applied"])}
          </div>
        ) : isSignedIn && !applied ? (
          <button
            onClick={() => applyToJob()}
            className="jobShow_actionButtons_apply"
          >
            APPLY NOW
          </button>
        ) : (
          <div className="jobShow_actionButtons_notSignedIn">
            <Link className="jjobShow_actionButtons_apply" to="/login">
              LOG IN
            </Link>
            <Link className="jobShow_actionButtons_apply" to="/register">
              REGISTER NOW
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default JobsShow;
