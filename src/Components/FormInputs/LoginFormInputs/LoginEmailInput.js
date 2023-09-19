import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions";
import { loginEmail } from "../../App/Data/Icons";

function LoginEmailInput({formKey, value, placeholder, stateVar, setFunction}) {
    return (
        <label 
        className="loginForm_label grid-center" 
        htmlFor={formKey}>
        {loginEmail}
        <input
          id={formKey}
          type="email"
          placeholder={placeholder}
          className="loginForm_input"
          value={value}
          onChange={(event) =>
            handleFormInput(event, stateVar, setFunction)
          }
          required
        />
      </label>
    );
}

export default LoginEmailInput;