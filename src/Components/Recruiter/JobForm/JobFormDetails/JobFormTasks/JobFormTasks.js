import {v4 as uuidv4} from "uuid"
import JobFormTasksHeader from "./JobFormTasksHeader";
import JobFormTextInput from "../../../../FormInputs/JobFormInputs/JobFormTextInput/JobFormTextInput";
import "./JobFormTasks.scss"

function JobFormTasks({ tasksStateVar, tasksSetFunction }) {
  return (
    <div className="jobFormTasks">
      <JobFormTasksHeader
        tasksStateVar={tasksStateVar}
        tasksSetFunction={tasksSetFunction}
      />

      <div className="jobFormTasks_container">
        {tasksStateVar.map((el, i) => (
          <section
            className="jobFormTasks_container_line"
            key={uuidv4()}
          >
            <JobFormTextInput
              key={uuidv4()}
              label={"Job Task"}
              formId={"tasks"}
              stateVar={tasksStateVar}
              setFunction={tasksSetFunction}
              required={true}
              placeholder={`Job Task (${i + 1})`}
              index={i}
              task={true}
            />
          </section>
        ))}
      </div>
    </div>
  );
}

export default JobFormTasks;
