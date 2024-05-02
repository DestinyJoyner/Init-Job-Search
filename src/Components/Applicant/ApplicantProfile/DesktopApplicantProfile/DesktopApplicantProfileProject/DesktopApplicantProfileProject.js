import { VscProject } from "react-icons/vsc";
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
      <h5 className="desktopApplicantProfilePage_content_project_header">
        Project Showcase{" "}
      </h5>

      <VscProject />
      <a href={`${project_link}`} target="_blank">
        <h3>{project_name}</h3>
      </a>
      <span>{project_description}</span>
    </div>
  );
}

export default DesktopApplicantProfileProject;
