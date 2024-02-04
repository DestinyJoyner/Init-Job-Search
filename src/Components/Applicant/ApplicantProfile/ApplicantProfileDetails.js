import { useUserProvider } from "../../../Providers/UserProvider";

function ApplicantProfileDetails({ applicantDetails }) {
  const { education, project } = applicantDetails;
  // console.log(applicantDetails, "profile");
  const { applicantEmail } = useUserProvider();

  return (
    <div className="applicantProfile_applicantDetails">
      <section className="applicantProfile_sectionHeader">
        <span className="applicantProfile_sectionHeader_text">Education:</span>
        <span className="applicantProfile_sectionHeader_text_span">
          {education}
        </span>
      </section>
      {project && (
        <div className="applicantProfile_applicantDetails_projects">
          <span className="applicantProfile_sectionHeader_text">
            Technical Project:
          </span>
          <section className="applicantProfile_sectionHeader">
            <a
              className="applicantProfile_applicantDetails_projects_link"
              href={project["project_link"]}
              target="_blank"
            >
              {project["project_name"]}
            </a>
            <span className="applicantProfile_sectionHeader_text_span">
              {project["project_description"]}
            </span>
          </section>
        
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
