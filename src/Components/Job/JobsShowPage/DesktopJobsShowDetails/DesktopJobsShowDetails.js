import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DesktopSkillsComponent from "../../../DesktopSkillsComponent/DesktopSkillsComponent";
import JobsShowActionButtons from "../JobsShowActionButtons/JobsShowActionButtons";
import "./DesktopJobsShowDetails.scss"

function DesktopJobsShowDetails({jobDetails, applied, setApplied, desktopJobSkills}) {
    const TASK = process.env.REACT_APP_TASK_BREAK;
    const { details, tasks} = jobDetails
    
    return (
        <div className='desktopJobShowDetails'>
             <DesktopSkillsComponent desktopJobSkills={desktopJobSkills} />
            <JobsShowActionButtons applied={applied}
        setApplied={setApplied} />

        <section className="desktopJobShowDetails_text">
            < section className="desktopJobShowDetails_text_details">
            <div className="desktopJobShowDetails_text_details_description">
                <span className="desktopJobShowDetails_text_header">
                    Description
                </span>
                <span className="desktopJobShowDetails_text_details_description_content">
                    {details}
                </span>
            </div>

            <hr className="desktopJobShowDetails_text_details_divider"/>

            <div className="desktopJobShowDetails_text_details_tasks">
            <span className="desktopJobShowDetails_text_header">
                Tasks
            </span>
            <div className="desktopJobShowDetails_text_details_tasks_content">
            {
            jobDetails.tasks &&
            jobDetails.tasks.split(`${TASK}`).map((el) => {
              if (el) {
                return (
                  <li key={uuidv4()}>
                    <span>{el}</span>
                  </li>)}
           })
        }
            </div>
            </div>
            </section>

            <aside className="desktopJobShowDetails_text_aside">
                <span className="desktopJobShowDetails_text_aside_header">
                    Content tba
                </span>
                <div className="desktopJobShowDetails_text_aside_list">
                    list items
                </div>
                <Link to="/jobs">{"<"} Back to Jobs</Link>
            </aside>
           
        </section>
          
        </div>
    );
}

export default DesktopJobsShowDetails;