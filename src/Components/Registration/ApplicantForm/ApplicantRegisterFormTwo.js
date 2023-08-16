import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import SkillsComponent from "../../Job/SkillsComponent";
import RegisterTextAreaInput from "../../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import RegisterUrlInput from "../../FormInputs/RegisterFormInputs/RegisterUrlInput";
import SkillsCheckboxes from "../../SkillsCheckboxes/SkillsCheckboxes";
import { handleSkillsCheckbox } from "../../Functions/FormFunctions/RegisterFormFunctions.js";
import { handleApplicantFormTwoSubmit } from "../../Functions/FormFunctions/RegisterFormSubmitFunctions";
import { asterisk } from "../../Job/Data/Icons";
import "./ApplicantFormTwo.scss";

function ApplicantRegisterFormTwo({ setHideSliderButtons }) {
  const { setAppHeader } = useNavProvider();
  const { applicantDetails } = useUserProvider();
  const { setLoading } = useContextProvider()
  const navigate = useNavigate();
  const [applicantFormTwo, setApplicantFormTwo] = useState(applicantDetails);
  const [applicantFormSkills, setApplicantFormSkills] = useState([]);

  useEffect(() => {
    setAppHeader("Add Profile Details");
    setHideSliderButtons(true);
  }, []);

  useEffect(() => {
    setApplicantFormTwo(applicantDetails);
    setLoading(false)
  }, [applicantDetails]);

  return (
    <div className="applicantFormTwo grid-center">
      <span className="applicantFormTwo_header">
        {asterisk}Details can be updated at any time from your profile{asterisk}
      </span>
      <form
        onSubmit={(event) =>
          handleApplicantFormTwoSubmit(
            event,
            applicantFormTwo,
            applicantFormSkills,
            navigate
          )
        }
        className="applicantFormTwo_form"
      >
        <RegisterTextAreaInput
          label={"Bio"}
          formKey={"bio"}
          value={applicantFormTwo["bio"]}
          placeholder={"Tell us about yourself..."}
          stateVar={applicantFormTwo}
          setFunction={setApplicantFormTwo}
        />

        <RegisterUrlInput
          label={"Portfolio Project 1"}
          formKey={"project_one"}
          value={applicantFormTwo["project_one"]}
          stateVar={applicantFormTwo}
          setFunction={setApplicantFormTwo}
        />

        <RegisterUrlInput
          label={"Portfolio Project 2"}
          formKey={"project_two"}
          value={applicantFormTwo["project_two"]}
          stateVar={applicantFormTwo}
          setFunction={setApplicantFormTwo}
        />

        <SkillsCheckboxes 
         skillsIdArr={applicantFormSkills} 
         setSkillIdArr={setApplicantFormSkills} formStateVar={applicantFormTwo} formSetFunction={setApplicantFormTwo}
        />

        {/* <section className="applicantFormTwo_form_skills">
          <span className="applicantFormTwo_form_skills_header">
            My Skills & Technologies
          </span>
          <span className="applicantFormTwo_form_skills_helpText">
            {asterisk}Select up to 4
          </span>
          <SkillsComponent
            checkbox={true}
            checkedArr={applicantFormSkills}
            checkBoxHandle={(event) =>
              handleSkillsCheckbox(
                event,
                applicantFormSkills,
                setApplicantFormSkills,
                applicantFormTwo,
                setApplicantFormTwo
              )
            }
          />
        </section> */}

        <input
          className="applicantFormTwo_form_submitButton"
          type="submit"
          value="Submit & View Profile"
        />
      </form>
      <Link to="/jobs">Skip & Begin Job Search</Link>
    </div>
  );
}

export default ApplicantRegisterFormTwo;
