import React from 'react';
import { handleFormInput } from '../FormFunctions/RegisterFormFunctions';

function UrlInput({label,formKey, value, stateVar, setFunction}) {

    return (
       <label className="applicantFormInput_url_label">
        <span>{label}</span>
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