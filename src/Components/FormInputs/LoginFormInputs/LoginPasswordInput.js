import { useState } from "react";
import ShowHidePasswordButton from "../../ShowHidePassword/ShowHidePasswordButton";
import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions";
import { loginPassword } from "../../Job/Data/Icons";

function LoginPasswordInput({formKey, placeholder, value, stateVar, setFunction}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <label
          className="loginForm_label grid-center loginForm_input_password"
          htmlFor={formKey}
        >
          {loginPassword}
          <input
            id={formKey}
            type={!showPassword ? "password" : "text"}
            placeholder={placeholder}
            className="loginForm_input"
            value={value}
            onChange={(event) =>
              handleFormInput(event, stateVar, setFunction)
            }
            required
          />
          <ShowHidePasswordButton
            setFunction={setShowPassword}
            stateVar={showPassword}
          />
        </label>
    );
}

export default LoginPasswordInput;