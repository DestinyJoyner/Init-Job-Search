import { useState } from "react";
import ShowHidePasswordButton from "../ShowHidePassword/ShowHidePasswordButton";
import { handleFormInput } from "../FormFunctions/FormFunctions";

function PasswordInput({label, formKey, value, stateVar, setFunction}) {
    const [showPassword, setShowPassword] = useState(false)

    return (
       <label htmlFor={formKey}>
        <span>{label}</span>
        <ShowHidePasswordButton
        stateVar={showPassword}
        setFunction={setShowPassword} />
        <input 
        type={showPassword ? "text": "password"}
        id={formKey}
        value={value}
        onChange={(event) => handleFormInput(event, stateVar, setFunction)}
        />
       </label>
    );
}

export default PasswordInput;