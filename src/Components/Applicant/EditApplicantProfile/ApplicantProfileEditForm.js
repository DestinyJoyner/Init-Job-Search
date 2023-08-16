import { useEffect } from "react";
import { useUserProvider } from "../../../Providers/UserProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import RegisterTextInput from "../../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterUrlInput from "../../FormInputs/RegisterFormInputs/RegisterUrlInput";
import RegisterTextAreaInput from "../../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import SkillsCheckboxes from "../../SkillsCheckboxes/SkillsCheckboxes";
import { asterisk } from "../../Job/Data/Icons";

import "./ApplicantProfileEditForm.scss";

function ApplicantProfileEditForm(props) {
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
    <form className="applicantProfileEditForm center">
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

      <section className="applicantProfileEditForm_projects_header">
        <span className="applicantProfileEditForm_projects_header_label">
          My Technical Projects
        </span>
        <span className="applicantProfileEditForm_projects_header_helpText">
          {asterisk}Provide max. of 2
        </span>
      </section>
      {/* links w/ title and about fields */}
      <section className="applicantProfileEditForm_projects_details">
        <div className="applicantProfileEditForm_projects_details_one">
          <RegisterTextInput
            label={"Project 1 Name"}
            value={applicantEditForm["project_one_name"]}
            formKey={"project_one_name"}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
          />
          <RegisterUrlInput
            label={"Technical Project 1 Link"}
            value={applicantEditForm["project_one"]}
            formKey={"project_one"}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
          />
          <RegisterTextAreaInput
            label={"Project 1 Details"}
            formKey={"project_one_details"}
            value={applicantEditForm["project_one_details"]}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
            placeholder={"A brief description of this project....."}
          />
        </div>

        <div className="applicantProfileEditForm_projects_details_two">
          <RegisterTextInput
            label={"Project 2 Name"}
            value={applicantEditForm["project_two_name"]}
            formKey={"project_two_name"}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
          />
          <RegisterUrlInput
            label={"Technical Project 2"}
            value={applicantEditForm["project_two"]}
            formKey={"project_two"}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
          />
          <RegisterTextAreaInput
            label={"Project 2 Details"}
            formKey={"project_two_details"}
            value={applicantEditForm["project_two_details"]}
            stateVar={applicantEditForm}
            setFunction={setApplicantEditForm}
            placeholder={"A brief description of this project....."}
          />
        </div>
      </section>

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
