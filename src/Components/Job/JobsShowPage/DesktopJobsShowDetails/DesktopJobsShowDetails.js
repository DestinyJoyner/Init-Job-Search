import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DesktopSkillsComponent from "../../../DesktopSkillsComponent/DesktopSkillsComponent";
import JobsShowActionButtons from "../JobsShowActionButtons/JobsShowActionButtons";
import DesktopJobShowDetailsAside from "./DesktopJobShowDetailsAside/DesktopJobShowDetailsAside";
import DesktopJobShowCompanyDetails from "./DesktopJobShowCompanyDetails/DesktopJobShowCompanyDetails";
import "./DesktopJobsShowDetails.scss";

function DesktopJobsShowDetails({
  jobDetails,
  applied,
  setApplied,
  desktopJobSkills,
}) {
  const TASK = process.env.REACT_APP_TASK_BREAK;
  const { details, tasks } = jobDetails;

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
              {tasks &&
                tasks.split(`${TASK}`).map((el) => {
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

          <hr className="desktopJobShowDetails_text_details_divider" />

          <div className="desktopJobShowDetails_text_details_company">
            <span className="desktopJobShowDetails_text_header">
              About This Company{" "}
            </span>

            <DesktopJobShowCompanyDetails jobDetails={jobDetails} />
          </div>
        </section>

        <DesktopJobShowDetailsAside jobDetails={jobDetails} />
      </section>

      <Link className="desktopJobShowDetails_backButton" to="/jobs">
        {"<"}
        <span>Back to Jobs</span>
      </Link>
    </div>
  );
}

export default DesktopJobsShowDetails;
