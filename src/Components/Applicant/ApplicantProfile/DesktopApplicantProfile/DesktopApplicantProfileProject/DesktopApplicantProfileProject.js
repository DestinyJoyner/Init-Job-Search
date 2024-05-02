import { VscProject } from "react-icons/vsc";
import { applicantProfileHeaderLabel } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions";
import "./DesktopApplicantProfileProject.scss";

function DesktopApplicantProfileProject({ applicantProject }) {
  const { project_description, project_link, project_name } = applicantProject;

  const projectHtml = (
    <>
      <h3>{project_name}</h3>
      <a href={`${project_link}`}>Project Link</a>
      <span>{project_description}</span>
    </>
  );

  return (
    <div className="desktopApplicantProfilePage_content_project init-card">
      <h4 className="desktopApplicantProfilePage_content_project_header"><VscProject />Project Showcase</h4>
      <h3>{project_name}</h3>
      <a href={`${project_link}`}>Project Link</a>
      <span>{project_description}</span>
     

      {/* {applicantProfileHeaderLabel("Technical Project", projectHtml, true)} */}
    </div>
  );
}

export default DesktopApplicantProfileProject;
