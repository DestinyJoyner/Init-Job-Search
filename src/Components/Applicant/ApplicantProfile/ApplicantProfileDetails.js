import { useUserProvider } from "../../../Providers/UserProvider";
import { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider";
import { Link } from "react-router-dom";

function ApplicantProfileDetails({ applicantDetails }) {
  const { education, project } = applicantDetails;
  const {isDesktopView} = useWindowSizeProvider()
  const { applicantEmail } = useUserProvider();

  return (
    <div className="applicantProfile_applicantDetails">
    {!isDesktopView &&
      <section className="applicantProfile_sectionHeader">
        <span className="applicantProfile_sectionHeader_text">Education:</span>
        <span className="applicantProfile_sectionHeader_text_span">
          {education}
        </span>
      </section>
}
      {project && (
        <div className="applicantProfile_applicantDetails_projects">
          <span className="applicantProfile_sectionHeader_text">
            Project Highlight:
          </span>
          <section className="applicantProfile_sectionHeader">
            {
              project["project_link"] ? 
              <a
              className="applicantProfile_applicantDetails_projects_link"
              href={project["project_link"]}
              target="_blank"
            >
              {project["project_name"] || "Project Name"}
            </a>
            :
            <Link className="applicantProfile_applicantDetails_projects_link" to="/user/edit">{project["project_name"] || "Add Project Details"}</Link>
            }
            
              
      
          </section>
          <span className="applicantProfile_applicantDetails_projects_description"><b>{project["project_name"]}</b><br/>{project["project_description"] || "Add Project Description" }</span>
        
        </div>
      )}

      <section className="applicantProfile_sectionHeader">
        <span className="applicantProfile_sectionHeader_text">Contact Me:</span>
        <span className="applicantProfile_sectionHeader_text_span">
          {applicantEmail}
        </span>
      </section>
    </div>
  );
}

export default ApplicantProfileDetails;
