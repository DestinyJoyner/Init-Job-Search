import { v4 as uuidv4 } from "uuid";
import SliderButtons from "../../../SliderButton/SliderButtons";
import "./JobsShowDetails.scss";

function JobsShowDetails({
  jobDetails,
  jobDetailsToggle,
  setJobDetailsToggle,
}) {
  const TASK = process.env.REACT_APP_TASK_BREAK;

  return (
    <section className="jobShow_jobDetails">
      <SliderButtons
        button1={"Description"}
        button2={"Tasks"}
        setFunction={setJobDetailsToggle}
      />

      <section className="jobShow_jobDetails_overview">
        {jobDetailsToggle === "description" ? (
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
  );
}

export default JobsShowDetails;
