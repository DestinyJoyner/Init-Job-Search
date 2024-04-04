import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import RegisterTextAreaInput from "../../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import RegisterTextInput from "../../FormInputs/RegisterFormInputs/RegisterTextInput.js";
import ProjectLinkInputs from "../../ProjectLinkInputs/ProjectLinkInputs.js";
import SkillsCheckboxes from "../../SkillsCheckboxes/SkillsCheckboxes";
import { handleApplicantFormTwoSubmit } from "../../Functions/FormFunctions/RegisterFormSubmitFunctions";
import { asterisk } from "../../App/Data/Icons";
import "./ApplicantFormTwo.scss";

function ApplicantRegisterFormTwo({ setHideSliderButtons }) {
  const { setAppHeader } = useNavProvider();
  const { applicantDetails, setApplicantDetails } = useUserProvider();
  const { setLoading, userID, axios, API } = useContextProvider()
  const navigate = useNavigate();
  const [applicantFormTwo, setApplicantFormTwo] = useState(applicantDetails);
  const [applicantFormSkills, setApplicantFormSkills] = useState([]);

  useEffect(() => {
    setAppHeader("Add Profile Details");
    setLoading(true)
    setHideSliderButtons(true);

    axios.get(`${API}/users/${userID}`)
    .then(({data}) =>setApplicantFormTwo(data))
    .catch(err => console.log(err))

    setApplicantFormTwo(applicantDetails);
    setLoading(false)
  }, []);

  useEffect(() => {
    // axios.get(`${API}/users/${userID}`)
    // .then(({data}) => console.log(data, "register"))
    // .catch(err => console.log(err))

    // setApplicantFormTwo(applicantDetails);
    // setLoading(false)
  }, [applicantDetails]);

  return (
    <div className="applicantFormTwo grid-center">
      <span className="applicantFormTwo_header">
      <span>{asterisk}Details can be updated at any time from your profile{asterisk}</span>
        
      </span>
      <form
        onSubmit={(event) =>
          handleApplicantFormTwoSubmit(
            event,
            applicantFormTwo,
            applicantFormSkills,
            userID,
            navigate
          )
        }
        className="applicantFormTwo_form"
      >
         <div className="applicantFormTwo_form_bio">
        <span className="skillsCheckboxes_label">
          Bio
        </span>
        <RegisterTextAreaInput
          label={"About Me"}
          formKey={"bio"}
          value={applicantFormTwo["bio"]}
          placeholder={"Tell us about yourself..."}
          stateVar={applicantFormTwo}
          setFunction={setApplicantFormTwo}
        />
         <RegisterTextInput
        label={"Title/Role/Position"}
        value={applicantFormTwo["position"]}
        formKey={"position"}
        stateVar={applicantFormTwo}
        setFunction={setApplicantFormTwo}
      />
        </div>

        <ProjectLinkInputs
        stateVar={applicantFormTwo}
        setFunction={setApplicantFormTwo} />

        <SkillsCheckboxes 
         skillsIdArr={applicantFormSkills} 
         setSkillIdArr={setApplicantFormSkills} formStateVar={applicantFormTwo} formSetFunction={setApplicantFormTwo}
        />

        <section className="applicantFormTwo_form_buttons">
        <input
          className="applicantFormTwo_form_buttons_submitButton"
          type="submit"
          value="Submit & View Profile"
        />
        <Link to="/jobs">SKIP</Link>
        </section>
        
      </form>
    </div>
  );
}

export default ApplicantRegisterFormTwo;
