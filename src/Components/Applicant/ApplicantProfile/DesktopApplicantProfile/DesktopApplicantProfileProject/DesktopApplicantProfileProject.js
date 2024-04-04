import { applicantProfileHeaderLabel } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions";
import "./DesktopApplicantProfileProject.scss"

function DesktopApplicantProfileProject({applicantProject}) {

    const {project_description, project_link, project_name} = applicantProject
    

    const projectHtml = <>
    <h3>{project_name}</h3>
    <a href={`${project_link}`}>Project Link</a>
    <span>{project_description}</span>
    </>

    return (
        <div className="desktopApplicantProfileProject">
           {applicantProfileHeaderLabel("Project", projectHtml, true)}
            
        </div>
    );
}

export default DesktopApplicantProfileProject;