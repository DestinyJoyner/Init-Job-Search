import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useNavProvider } from "../../../Providers/NavProvider";
import SkillsComponent from "../../Job/SkillsComponent";
import TextAreaInput from "../../FormInputs/TextAreaInput.js";
import UrlInput from "../../FormInputs/UrlInput.js";
import { handleSkillsCheckbox } from "../../Functions/FormFunctions/RegisterFormFunctions.js";
import { handleApplicantFormTwoSubmit } from "../../Functions/FormFunctions/RegisterFormSubmitFunctions";
import { asterisk } from "../../Job/Data/Icons";
import "./ApplicantFormTwo.scss";

function ApplicantRegisterFormTwo({ setHideSliderButtons }) {
  const { setLoading } = useContextProvider();
  const { setAppHeader } = useNavProvider();
  const { applicantDetails } = useUserProvider();
  const navigate = useNavigate();
  const [applicantFormTwo, setApplicantFormTwo] = useState({});
  const [applicantFormSkills, setApplicantFormSkills] = useState([]);

  useEffect(() => {
    setApplicantFormTwo(applicantDetails);
    setAppHeader("Add Profile Details");
    setHideSliderButtons(true);
    setLoading(true);
  }, []);

  useEffect(() => setLoading(false), [applicantDetails]);

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
        <TextAreaInput
          label={"Bio"}
          formKey={"bio"}
          value={applicantFormTwo["bio"]}
          placeholder={"Tell us about yourself..."}
          stateVar={applicantFormTwo}
          setFunction={setApplicantFormTwo}
        />

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

        <section className="applicantFormTwo_form_skills">
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
        </section>

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