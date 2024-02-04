import {useEffect} from "react"
import RegisterTextInput from "../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterUrlInput from "../FormInputs/RegisterFormInputs/RegisterUrlInput";
import RegisterTextAreaInput from "../FormInputs/RegisterFormInputs/RegisterTextAreaInput";
import { asterisk } from "../App/Data/Icons";
import "./ProjectLinkInputs.scss"

function ProjectLinkInputs({stateVar, setFunction}) {

  const remainingChars = stateVar["project"] ? 1000 - stateVar["project"]["project_description"].length : 1000

  // useEffect(() => {},[stateVar["project"]["project_description"]])

// console.log(stateVar)
  function handleProjectInput (e) {
    const value = e.target.value
    const objectKey = e.target.id

    setFunction({
      ...stateVar, "project" : {
        ...stateVar["project"], 
        [objectKey] : value
      }
    })

  }
  // const {project_name, project_link, project_description} = stateVar
    return (
      stateVar.project &&
      <>
      <label className="registerFormInput_label">
        <span>Project Name</span>
      <input 
      className="registerFormInput_text"
      onChange={(event) => handleProjectInput(event)}
      type="text"
      value= {stateVar["project"]["project_name"]}
      id={"project_name"}
      placeholder="Project Name"/>
      </label>

      <label className="registerFormInput_label">
        <span>Project Link</span>
      <input 
      className="registerFormInput_text"
      onChange={(event) => handleProjectInput(event)}
      type="url"
      value= {stateVar["project"]["project_link"]}
      id={"project_link"}
      placeholder="Live Site or Repo Link"/>
      </label>


      <label className="applicantFormTwo_form_input_textarea_label">
        <span className="applicantFormTwo_form_input_textarea_label_text">Project Description</span>
        <span className="applicantFormTwo_form_input_textarea_label_helpText">Remaining Chars: {remainingChars}</span>
      <textarea
      onChange={(event) => handleProjectInput(event)}
      type="url"
      value= {stateVar["project"]["project_description"]}
      id={"project_description"}
      placeholder="Share a description about your project">
      </textarea>
      </label>
     
      {/* <RegisterTextInput
            label={"Project Name"}
            value={stateVar["project_name"] ? stateVar["project_name"] : ""}
            formKey={"project_name"}
            stateVar={stateVar}
            setFunction={setFunction}
          /> */}
      </>
      //   <>
      //   <section className="projectLinkInputs_header">
      //   <span className="projectLinkInputs_header_label">
      //     My Technical Project
      //   </span>
      //   {/* <span className="projectLinkInputs_header_helpText">
      //     {asterisk}Provide max. of 2
      //   </span> */}
      // </section>
      // {/* links w/ title and about fields */}
      // <section className="projectLinkInputs_details">
      //   <div className="projectLinkInputs_details_one">
      //     {/* <RegisterTextInput
      //       label={"Project Name"}
      //       value={stateVar["project_name"] && stateVar["project_name"]}
      //       formKey={"project_name"}
      //       stateVar={stateVar["project"]}
      //       setFunction={setFunction}
      //     /> */}
      //     <RegisterUrlInput
      //       label={"Technical Project 1 Link"}
      //       value={stateVar["project_one"]}
      //       formKey={"project_one"}
      //       stateVar={stateVar}
      //       setFunction={setFunction}
      //     />
      //     <RegisterTextAreaInput
      //       label={"Project 1 Details"}
      //       formKey={"project_one_details"}
      //       value={stateVar["project_one_details"]}
      //       stateVar={stateVar}
      //       setFunction={setFunction}
      //       placeholder={"A brief description of this project....."}
      //     />
      //   </div>

      //   <div className="projectLinkInputs_details_two">
      //     <RegisterTextInput
      //       label={"Project 2 Name"}
      //       value={stateVar["project_two_name"]}
      //       formKey={"project_two_name"}
      //       stateVar={stateVar}
      //       setFunction={setFunction}
      //     />
      //     <RegisterUrlInput
      //       label={"Technical Project 2"}
      //       value={stateVar["project_two"]}
      //       formKey={"project_two"}
      //       stateVar={stateVar}
      //       setFunction={setFunction}
      //     />
      //     <RegisterTextAreaInput
      //       label={"Project 2 Details"}
      //       formKey={"project_two_details"}
      //       value={stateVar["project_two_details"]}
      //       stateVar={stateVar}
      //       setFunction={setFunction}
      //       placeholder={"A brief description of this project....."}
      //     />
      //   </div>
      // </section>
      // </>
    );
}

export default ProjectLinkInputs;