import { useState } from "react";
import "./JobFormCheckbox.scss"

function JobFormCheckbox({label, formId, stateVar, setFunction}) {
    const [checkbox, setCheckbox] = useState(stateVar["full_remote"])

    // handleCheckbox
    function handleCheckBox(e, var1, setFunc){
        const value = e.target.value
        const checked = e.target.checked
       setCheckbox(!checkbox)
       setFunc({...var1, [value]: checked})
   }

    return (
        <label className="jobFormCheckbox" htmlFor={formId}>
            <input
            type="checkbox"
            value={formId} 
            checked={stateVar[formId]=== "true" || stateVar[formId] === true ? true : false }
            onChange={(event) => handleCheckBox(event, stateVar, setFunction)}
            />
             <span 
            >{label}</span>
        </label>
    );
}

export default JobFormCheckbox;