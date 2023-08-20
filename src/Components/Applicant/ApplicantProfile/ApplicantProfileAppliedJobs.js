import { Link } from "react-router-dom";
import { convertDate } from "../../Functions/ConvertFunctions/ConversionFunctions";

function ApplicantProfileAppliedJobs({ applicantJobs }) {
    
  return (
    <div className="applicantProfile_appliedJobs">
      <span className="applicantProfile_sectionHeader_text">
        My Applications:
      </span>
      <section className="applicantProfile_appliedJobs_container">
        {applicantJobs.length > 0 ? (
          applicantJobs.map(({ id, title, company, date_applied }) => (
            <div className="applicantProfile_appliedJobs_container_card">
              <Link
                className="applicantProfile_appliedJobs_container_card_title"
                to={`/jobs/${id}`}
              >
                {title}
              </Link>
              <span className="applicantProfile_appliedJobs_container_card_company">
                {company}
              </span>
              <span className="applicantProfile_appliedJobs_container_card_applied">
                Date Applied
              </span>
              <span className="applicantProfile_appliedJobs_container_card_date">
                {convertDate(date_applied)}
              </span>
            </div>
          ))
        ) : (
          <span className="applicantProfile_appliedJobs_noJobs">No Job Applications to Display</span>
        )}
      </section>
    </div>
  );
}

export default ApplicantProfileAppliedJobs;
