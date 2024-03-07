import { handleTextChange } from "../../../Functions/FormFunctions/JobFormFunctions.js"
import { asterisk } from "../../../App/Data/Icons.js"
import "./JobFormTextArea.scss"

function JobFormTextArea({ label, formId, stateVar, setFunction, placeholder, required }) {

  return (
    <label className="jobFormTextArea"
    htmlFor={formId}>
      <textarea
        className="jobFormTextArea_textarea"
        id={formId}
        value={stateVar[formId]}
        placeholder={placeholder}
        onChange={(event) => handleTextChange(event, stateVar, setFunction)}
        required
      />
      <span className="job-form-label job-textarea">
        {label}
        {required && asterisk}
      </span>
    </label>
  );
}

export default JobFormTextArea;
