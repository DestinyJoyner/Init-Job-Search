import { useEffect } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import RegisterTextInput from "../../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterTextAreaInput from "../../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import SkillsCheckboxes from "../../SkillsCheckboxes/SkillsCheckboxes";
import ProjectLinkInputs from "../../ProjectLinkInputs/ProjectLinkInputs";
import { applicantSubmitEditForm } from "../../Functions/ApplicantFunctions/ApplicantFunctions";

import "./ApplicantProfileEditForm.scss";

function ApplicantProfileEditForm() {
  const {
    applicantEditForm,
    setApplicantEditForm,
    applicantSkillIds,
    setApplicantSkillIds,
  } = useUserProvider();
  const { setAppHeader } = useNavProvider();
  const { setLoading } = useContextProvider();

  useEffect(() => {
    if (applicantEditForm.id) {
      setLoading(false);
    }
  }, [applicantEditForm]);

  useEffect(() => setAppHeader("Edit Profile"), []);

  return (
    <form 
    onSubmit={(event) => applicantSubmitEditForm(event)}
    className="applicantProfileEditForm center">
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
        value={applicantEditForm["role"]}
        formKey={"role"}
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

      <ProjectLinkInputs 
      stateVar={applicantEditForm}
      setFunction={setApplicantEditForm}/>

      <SkillsCheckboxes
        skillsIdArr={applicantSkillIds}
        setSkillIdArr={setApplicantSkillIds}
        formStateVar={applicantEditForm}
        formSetFunction={setApplicantEditForm}
      />
      
      <input 
      className="applicantProfileEditForm_submitButton"
      type="submit" value="SAVE" />
    </form>
  );
}

export default ApplicantProfileEditForm;
