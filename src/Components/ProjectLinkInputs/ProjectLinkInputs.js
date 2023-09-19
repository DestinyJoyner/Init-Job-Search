import RegisterTextInput from "../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterUrlInput from "../FormInputs/RegisterFormInputs/RegisterUrlInput";
import RegisterTextAreaInput from "../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import { asterisk } from "../App/Data/Icons";
import "./ProjectLinkInputs.scss"

function ProjectLinkInputs({stateVar, setFunction}) {
    return (
        <>
        <section className="projectLinkInputs_header">
        <span className="projectLinkInputs_header_label">
          My Technical Projects
        </span>
        <span className="projectLinkInputs_header_helpText">
          {asterisk}Provide max. of 2
        </span>
      </section>
      {/* links w/ title and about fields */}
      <section className="projectLinkInputs_details">
        <div className="projectLinkInputs_details_one">
          <RegisterTextInput
            label={"Project 1 Name"}
            value={stateVar["project_one_name"]}
            formKey={"project_one_name"}
            stateVar={stateVar}
            setFunction={setFunction}
          />
          <RegisterUrlInput
            label={"Technical Project 1 Link"}
            value={stateVar["project_one"]}
            formKey={"project_one"}
            stateVar={stateVar}
            setFunction={setFunction}
          />
          <RegisterTextAreaInput
            label={"Project 1 Details"}
            formKey={"project_one_details"}
            value={stateVar["project_one_details"]}
            stateVar={stateVar}
            setFunction={setFunction}
            placeholder={"A brief description of this project....."}
          />
        </div>

        <div className="projectLinkInputs_details_two">
          <RegisterTextInput
            label={"Project 2 Name"}
            value={stateVar["project_two_name"]}
            formKey={"project_two_name"}
            stateVar={stateVar}
            setFunction={setFunction}
          />
          <RegisterUrlInput
            label={"Technical Project 2"}
            value={stateVar["project_two"]}
            formKey={"project_two"}
            stateVar={stateVar}
            setFunction={setFunction}
          />
          <RegisterTextAreaInput
            label={"Project 2 Details"}
            formKey={"project_two_details"}
            value={stateVar["project_two_details"]}
            stateVar={stateVar}
            setFunction={setFunction}
            placeholder={"A brief description of this project....."}
          />
        </div>
      </section>
      </>
    );
}

export default ProjectLinkInputs;