import { useEffect } from "react";
import { handleFormInput } from "../FormFunctions/RegisterFormFunctions";

function TextAreaInput({label,formKey, value, placeholder, stateVar, setFunction}) {
    const remainingChars = value ? 160 - value.length : 160

    useEffect(() => {},[value])

    return (
        <label className="applicantFormTwo_input_textarea_label">
            <span>{label}</span>
            <span>Remaining Chars:{remainingChars}</span>
            <textarea 
            id={formKey}
            maxLength={160}
            value={value}
            placeholder={placeholder}
            onChange={(event) => handleFormInput(event, stateVar, setFunction)}
            />
        </label>
    );
}

export default TextAreaInput;