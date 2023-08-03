import { handleFormInput } from "../Functions/FormFunctions/RegisterFormFunctions.js"
import { asterisk } from "../Job/Data/Icons.js";

function TextInput({label, value, formKey, stateVar, setFunction }) {
    return (
        <label 
        className="formInput_label"
        htmlFor={formKey}>
            <span>
                {asterisk}{label}
            </span>
            <input
            className="formInput_text"
            type="text"
            value = {value}
            id= {formKey}
            placeholder={label}
            onChange={(event) => handleFormInput(event, stateVar, setFunction)} />
        </label>
    );
}

export default TextInput;