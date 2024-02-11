import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import RegisterTextInput from "../../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterTextAreaInput from "../../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import SkillsCheckboxes from "../../SkillsCheckboxes/SkillsCheckboxes";
import ProjectLinkInputs from "../../ProjectLinkInputs/ProjectLinkInputs";
import {
  applicantSubmitEditForm,
  checkIfEditsMade,
} from "../../Functions/ApplicantFunctions/ApplicantFunctions";

import "./ApplicantProfileEditForm.scss";

function ApplicantProfileEditForm() {
  const {
    applicantEditForm,
    setApplicantEditForm,
    applicantSkillIds,
    setApplicantSkillIds,
    applicantDetails,
  } = useUserProvider();
  const { setAppHeader } = useNavProvider();
  const { setLoading } = useContextProvider();
  const navigate = useNavigate();
  const [buttonAccess, setButtonAccess] = useState(false);

  // console.log(applicantEditForm["project"])

  useEffect(() => {
    if (applicantEditForm.id) {
      setLoading(false);
    }
    const edited = checkIfEditsMade(applicantDetails, applicantEditForm);

    edited ? setButtonAccess(true) : setButtonAccess(false);
  }, [applicantEditForm]);

  useEffect(() => setAppHeader("Edit Profile"), []);

  return (
    <form
      onSubmit={(event) =>
        applicantSubmitEditForm(
          event,
          applicantDetails,
          applicantEditForm,
          applicantSkillIds,
          navigate
        )
      }
      className="applicantProfileEditForm center"
    >
      <RegisterTextInput
        label={"First Name"}
        value={applicantEditForm["first_name"]}
        formKey={"first_name"}
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
      />

      <RegisterTextInput
        label={"Last Name"}
        value={applicantEditForm["last_name"]}
        formKey={"last_name"}
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
      />

      {/* role */}
      <RegisterTextInput
        label={"Field/Role"}
        value={applicantEditForm["position"]}
        formKey={"position"}
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
      />

      <RegisterTextInput
        label={"Education/Training"}
        value={applicantEditForm["education"]}
        formKey={"education"}
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
      />

      <RegisterTextAreaInput
        label={"About Me"}
        formKey={"bio"}
        value={applicantEditForm["bio"]}
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
        placeholder={"Tell recruiters about yourself..."}
      />

<section className="applicantProfileEditForm_project">
<label className="jobForm_details_border_label">Project Details</label>
      <ProjectLinkInputs
        stateVar={applicantEditForm}
        setFunction={setApplicantEditForm}
      />
      </section>

      <SkillsCheckboxes
        skillsIdArr={applicantSkillIds}
        setSkillIdArr={setApplicantSkillIds}
        formStateVar={applicantEditForm}
        formSetFunction={setApplicantEditForm}
      />

      <input
        className={
          buttonAccess
            ? "applicantProfileEditForm_submitButton"
            : "applicantProfileEditForm_submitButton greyed-out"
        }
        type={buttonAccess ? "submit" : "button"}
        value="SAVE"
      />
    </form>
  );
}

export default ApplicantProfileEditForm;
