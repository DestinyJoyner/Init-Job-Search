import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider";
import { useContextProvider } from "../../../Providers/Provider";
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import "./JobDetailsProfileLayout.scss";

function JobDetailsProfileLayout({ jobID }) {
  const taskSplit = process.env.REACT_APP_TASK_BREAK;
  const { isDesktopView } = useWindowSizeProvider();
  const { API, axios } = useContextProvider();

  const [thisJob, setThisJob] = useState({});
  const [expandJobDetails, setExpandJobDetails] = useState(false);

  const companyLogo = thisJob.company
    ? convertCompanyForLogo(thisJob.company.toLowerCase())
    : "";

  const jobTasks = thisJob.tasks ? thisJob.tasks.split(taskSplit) : [];

  const jobSkills = thisJob.skills
    ? thisJob.skills.map((el) => {
        const value = Object.values(el);
        return value[0];
      })
    : [];

  useEffect(() => {
    axios
      .get(`${API}/jobs/${jobID}`)
      .then(({ data }) => setThisJob(data))
      .catch((err) => console.log(err));
  }, [thisJob]);
  return (
    <section
      className={
        isDesktopView
          ? "jobDetailsProfileLayout init-card"
          : !expandJobDetails
          ? "jobDetailsProfileLayout init-card jobDetailsProfileLayout_expandLess"
          : "jobDetailsProfileLayout init-card jobDetailsProfileLayout_expandMore"
      }
      onClick={() => setExpandJobDetails(!expandJobDetails)}
    >
      <div className="jobDetailsProfileLayout_header">
        {isDesktopView && <img src={companyLogo} alt={thisJob.company} />}
        <h3>{thisJob.title}</h3>
        <span>{thisJob.company}</span>
        <div className="jobDetailsProfileLayout_header_skills">
          {jobSkills.map((el) => (
            <span
              key={uuidv4()}
              className="jobDetailsProfileLayout_header_skills_pill"
            >
              {el}
            </span>
          ))}
        </div>

        {!isDesktopView && !expandJobDetails ? (
          <MdOutlineExpandMore onClick={() => setExpandJobDetails(true)} />
        ) : !isDesktopView && expandJobDetails ? (
          <MdOutlineExpandLess onClick={() => setExpandJobDetails(false)} />
        ) : null}
      </div>
      <span className="jobDetailsProfileLayout_label">Details</span>
      <div className="jobDetailsProfileLayout_description">
        {thisJob.details}
      </div>
      <span className="jobDetailsProfileLayout_label">Tasks</span>
      <div className="jobDetailsProfileLayout_tasks">
        {jobTasks.map((el) => (
          <li key={uuidv4()}>{el}</li>
        ))}
      </div>
    </section>
  );
}

export default JobDetailsProfileLayout;
