import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContextProvider } from "../../../../Providers/Provider";
import DesktopSkillsComponent from "../../../DesktopSkillsComponent/DesktopSkillsComponent";
import JobsShowActionButtons from "../JobsShowActionButtons/JobsShowActionButtons";
import SkillDoughnutChart from "../../../SkillDoughnutChart/SkillDoughnutChart";
import { jobLocation } from "../../../App/Data/Icons";

import "./DesktopJobsShowDetails.scss";

function DesktopJobsShowDetails({
  jobDetails,
  applied,
  setApplied,
  desktopJobSkills,
}) {
  const { API, axios } = useContextProvider();
  const TASK = process.env.REACT_APP_TASK_BREAK;
  const { details, tasks, city } = jobDetails;

  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    if (city) {
      const convertCity = city.replaceAll(" ", "").toLowerCase();
      axios
        .get(`${API}/jobs?start=0&limit=4&city=${convertCity}`)
        .then(({ data }) => {
          data.shift();
          const filterRelatedJobs = data.filter(
            ({ id }) => id !== jobDetails.id
          );
          setRelatedJobs(filterRelatedJobs);
        })
        .catch((err) => console.log(err));
    }
  }, [jobDetails]);
  
  return (
    <div className="desktopJobShowDetails">
      <DesktopSkillsComponent desktopJobSkills={desktopJobSkills} />
      <JobsShowActionButtons applied={applied} setApplied={setApplied} />

      <section className="desktopJobShowDetails_text">
        <section className="desktopJobShowDetails_text_details">
          <div className="desktopJobShowDetails_text_details_description">
            <span className="desktopJobShowDetails_text_header">
              Description
            </span>
            <span className="desktopJobShowDetails_text_details_description_content">
              {details}
            </span>
          </div>

          <hr className="desktopJobShowDetails_text_details_divider" />

          <div className="desktopJobShowDetails_text_details_tasks">
            <span className="desktopJobShowDetails_text_header">Tasks</span>
            <ul className="desktopJobShowDetails_text_details_tasks_content">
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
          </div>
        </section>

        <aside className="desktopJobShowDetails_text_aside">
          <SkillDoughnutChart />

          <div className="desktopJobShowDetails_text_aside_relatedJobs">
            <span className="desktopJobShowDetails_text_aside_relatedJobs_header">
              {jobLocation} Jobs Near {city}
            </span>
            <ul className="desktopJobShowDetails_text_aside_relatedJobs_list">
              {relatedJobs.length > 0 ? (
                relatedJobs.map(({ title, company, id }) => (
                  <li key={uuidv4()}>
                    <Link to={`/jobs/${id}`}>
                      {title}, <br />
                      {company}
                    </Link>
                  </li>
                ))
              ) : (
                <span className="desktopJobShowDetails_text_aside_relatedJobs_list_none">
                  No Jobs to Display
                </span>
              )}
            </ul>
          </div>

          <Link className="desktopJobShowDetails_backButton" to="/jobs">
            {"<"}
            <span>Back to Jobs</span>
          </Link>
        </aside>
      </section>
    </div>
  );
}

export default DesktopJobsShowDetails;
