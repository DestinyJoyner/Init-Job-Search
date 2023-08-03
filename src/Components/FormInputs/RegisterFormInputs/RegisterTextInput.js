import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions.js"
import { asterisk } from "../../Job/Data/Icons.js";

function RegisterTextInput({label, value, formKey, stateVar, setFunction }) {
    return (
        <label 
        className="registerFormInput_label"
        htmlFor={formKey}>
            <span>
                {asterisk}{label}
            </span>
            <input
            className="registerFormInput_text"
            type="text"
            value = {value}
            id= {formKey}
            placeholder={label}
            onChange={(event) => handleFormInput(event, stateVar, setFunction)} />
        </label>
    );
}

export default RegisterTextInput;