import { handleTextChange } from "../../Functions/FormFunctions/JobFormFunctions.js"
import { asterisk } from "../Data/Icons.js"

function TextArea({ label, formId, stateVar, setFunction, placeholder, required }) {

  return (
    <label htmlFor={formId}>
      <span className="job-form-label job-textarea">
        {label}
        {required && asterisk}
      </span>

      <textarea
        className="input-box"
        id={formId}
        value={stateVar[formId]}
        placeholder={placeholder}
        onChange={(event) => handleTextChange(event, stateVar, setFunction)}
        required
      />
    </label>
  );
}

export default TextArea;
