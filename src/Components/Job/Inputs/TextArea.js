import { handleTextChange } from "../../Functions/FormFunctions/JobFormFunctions.js"
import { asterisk } from "../../App/Data/Icons.js"

function TextArea({ label, formId, stateVar, setFunction, placeholder, required }) {

  return (
    <label className="jobFormPage_form_label_textarea"
    htmlFor={formId}>
      <textarea
        className="input-box"
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

export default TextArea;
