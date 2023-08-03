import { handleFormInput } from '../FormFunctions/RegisterFormFunctions';

function UrlInput({label,formKey, value, stateVar, setFunction}) {

    return (
       <label className="applicantFormTwo_form_input_url_label">
        <span className="applicantFormTwo_form_input_url_label_text">{label}</span>
        <span className="applicantFormTwo_form_input_url_label_helpText">Link to live site, git repo, etc</span>
        <input 
        type="url"
        id={formKey}
        value={value}
        placeholder="https://example.com"
        onChange={(event)=> handleFormInput(event, stateVar, setFunction)}
        />
       </label>
    );
}

export default UrlInput;