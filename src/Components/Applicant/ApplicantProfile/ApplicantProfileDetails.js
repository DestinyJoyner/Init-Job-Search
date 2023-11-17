import { useUserProvider } from "../../../Providers/UserProvider";

function ApplicantProfileDetails({ applicantDetails }) {
  const { education, project_one, project_two } = applicantDetails;
  console.log(applicantDetails, "profile")
  const { applicantEmail } = useUserProvider();
  
  return (
    <div className="applicantProfile_applicantDetails">
      <section className="applicantProfile_sectionHeader">
        <span className="applicantProfile_sectionHeader_text">Education:</span>
        <span className="applicantProfile_sectionHeader_text_span">
          {education}
        </span>
      </section>

      <div className="applicantProfile_applicantDetails_projects">
        <span className="applicantProfile_sectionHeader_text">
          Technical Projects:
        </span>
        <section className="applicantProfile_sectionHeader">
          <a
            className="applicantProfile_applicantDetails_projects_link"
            href={project_one}
            target="_blank"
          >
            Technical Project
          </a>
          <span className="applicantProfile_sectionHeader_text_span">
            Details about project tbd
          </span>
        </section>
        <section className="applicantProfile_sectionHeader">
          <a
            className="applicantProfile_applicantDetails_projects_link"
            href={project_two}
            target="_blank"
          >
            Technical Project
          </a>
          <span className="applicantProfile_sectionHeader_text_span">
            Details about Project tbd
          </span>
        </section>
      </div>

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
