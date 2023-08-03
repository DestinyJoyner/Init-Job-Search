import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import { useUserProvider } from "../../../Providers/UserProvider";
import SkillsComponent from "../../Job/SkillsComponent";
import TextAreaInput from "../../FormInputs/TextAreaInput.js"
import UrlInput from "../../FormInputs/UrlInput.js"
import {handleSkillsCheckbox} from "../../FormFunctions/RegisterFormFunctions.js"
import "./ApplicantFormTwo.scss"

function ApplicantRegisterFormTwo({setHideSliderButtons}) {
    const {API, axios, userID, setLoading} = useContextProvider()
    const {applicantDetails} = useUserProvider()
    const [applicantFormTwo, setApplicantFormTwo] = useState(applicantDetails)
    const [applicantFormSkills, setApplicantFormSkills] = useState([])



    useEffect(() => setHideSliderButtons(true),[])
    useEffect(() => {}, [applicantDetails])

    return (
        <form className="applicantFormTwo">

            <TextAreaInput 
            label={"Bio"}
            formKey={"bio"}
            value={applicantFormTwo["bio"]}
            placeholder={"Tell us about yourself..."}
            stateVar={applicantFormTwo}
            setFunction={setApplicantFormTwo}/>

            <UrlInput 
            label={"Portfolio Project 1"}
            formKey={"project_one"}
            value={applicantFormTwo["project_one"]}
            stateVar={applicantFormTwo}
            setFunction={setApplicantFormTwo}
            />

            <UrlInput 
            label={"Portfolio Project 2"}
            formKey={"project_two"}
            value={applicantFormTwo["project_two"]}
            stateVar={applicantFormTwo}
            setFunction={setApplicantFormTwo}
            />

            <SkillsComponent 
            checkbox={true}
            checkedArr={applicantFormSkills}
            checkBoxHandle={(event) =>handleSkillsCheckbox(event, applicantFormSkills, setApplicantFormSkills, applicantFormTwo, setApplicantFormTwo)}
            />


        </form>
    );
}

export default ApplicantRegisterFormTwo;