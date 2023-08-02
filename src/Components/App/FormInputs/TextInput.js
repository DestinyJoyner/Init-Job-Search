import { handleFormInput } from "../../FormFunctions/FormFunctions.js"

function TextInput({label, value, formKey, stateVar, setFunction }) {
    return (
        <label htmlFor={formKey}>
            <span className="formInput_label">
                {label}
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