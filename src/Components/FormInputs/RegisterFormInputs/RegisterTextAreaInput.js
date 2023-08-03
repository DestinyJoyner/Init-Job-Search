import { useEffect } from "react";
import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions";

function RegisterTextAreaInput({label,formKey, value, placeholder, stateVar, setFunction}) {
    const remainingChars = value ? 160 - value.length : 160

    useEffect(() => {},[value])

    return (
        <label className="applicantFormTwo_form_input_textarea_label">
            <span className="applicantFormTwo_form_input_textarea_label_text">{label}</span>
            <span className="applicantFormTwo_form_input_textarea_label_helpText">Remaining Chars: {remainingChars}</span>
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

export default RegisterTextAreaInput;