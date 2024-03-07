import "./ProjectLinkInputs.scss";

function ProjectLinkInputs({ stateVar, setFunction }) {

  const remainingChars = stateVar["project"]
    ? 1000 - stateVar["project"]["project_description"].length
    : 1000;

  function handleProjectInput(e) {
    const value = e.target.value;
    const objectKey = e.target.id;

    setFunction({
      ...stateVar,
      project: {
        ...stateVar["project"],
        [objectKey]: value,
      },
    });
  }
  return (
    stateVar.project && (
      <div className="projectFormInputs">
        <div className="projectFormInputs_header">
          <span className="skillsCheckboxes_label">My Project Details</span>
          <span className="skillsCheckboxes_helpText">Showcase a project</span>
        </div>

        <label className="registerFormInput_label">
          <span>Project Name</span>
          <input
            className="registerFormInput_text"
            onChange={(event) => handleProjectInput(event)}
            type="text"
            value={stateVar["project"]["project_name"]}
            id={"project_name"}
            placeholder="Project Name"
          />
        </label>

        <label className="registerFormInput_label">
          <span>Project Link</span>
          <input
            className="registerFormInput_text"
            onChange={(event) => handleProjectInput(event)}
            type="url"
            value={stateVar["project"]["project_link"]}
            id={"project_link"}
            placeholder="Live Site or Repo Link"
          />
        </label>

        <label className="applicantFormTwo_form_input_textarea_label">
          <span className="applicantFormTwo_form_input_textarea_label_text">
            Project Description
          </span>
          <span className="applicantFormTwo_form_input_textarea_label_helpText">
            Remaining Chars: {remainingChars}
          </span>
          <textarea
            onChange={(event) => handleProjectInput(event)}
            type="url"
            value={stateVar["project"]["project_description"]}
            id={"project_description"}
            placeholder="Share a description about your project"
          ></textarea>
        </label>
      </div>
    )
  );
}

export default ProjectLinkInputs;
