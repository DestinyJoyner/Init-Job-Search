import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions";
import { recruiter } from "../../Job/Data/Icons";

function LoginCheckbox({formKey, value, stateVar, setFunction}) {
    return (
        <label className="loginForm_checkbox_label" htmlFor={formKey}>
        {recruiter}
        <input
          id={formKey}
          type="checkbox"
          checked={value}
          className="loginForm_checkbox"
          onChange={(event) =>
            handleFormInput(event, stateVar, setFunction)
          }
        />
        <span className="loginForm_checkbox_label_text">
          I am a Recruiter
        </span>
      </label>

    );
}

export default LoginCheckbox;