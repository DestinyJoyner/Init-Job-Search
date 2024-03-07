import JobFormTextArea from "../../../FormInputs/JobFormInputs/JobFormTextArea/JobFormTextArea";
import JobFormTasks from "./JobFormTasks/JobFormTasks";
import { asterisk } from "../../../App/Data/Icons";
import "./JobFormDetails.scss"

function JobFormDetails({tasksStateVar, tasksSetFunction, formStateVar, formSetFunction}) {
    return (
        <section className="jobFormDetails">
        <label className="jobFormPage_form_border_label">
          Job Details{asterisk}
        </label>
        <JobFormTextArea
          label={"Job Description"}
          formId={"details"}
          stateVar={formStateVar}
          setFunction={formSetFunction}
          required={true}
          placeholder={"Enter Job Description here"}
        />

        <JobFormTasks 
        tasksStateVar={tasksStateVar}
        tasksSetFunction={tasksSetFunction}/>
     </section>
    );
}

export default JobFormDetails;