import { useState } from "react";

function Checkbox({label, formId, stateVar, setFunction}) {
    const [checkbox, setCheckbox] = useState(stateVar["full_remote"])

    // handleCheckbox
    function handleCheckBox(e, var1, setFunc){
        const value = e.target.value
        const checked = e.target.checked
       setCheckbox(!checkbox)
       setFunc({...var1, [value]: checked})
   }

    return (
        <label className="jobForm_label_checkbox" htmlFor={formId}>
            {/* className="job-form-label job-form-remote" */}
           
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

export default Checkbox;