import { Link } from "react-router-dom";
import { convertDate } from "../../Functions/ConvertFunctions/ConversionFunctions";

function ApplicantProfileAppliedJobsCard({ jobCardObj }) {
  const { id, title, company, date_applied } = jobCardObj;

  return (
    <div className="applicantProfile_appliedJobs_container_card">
      <Link
        className="applicantProfile_appliedJobs_container_card_title"
        to={`/jobs/${id}`}
      >
        {title}
      </Link>

      {/* make this one section display flex it */}
      <section className="applicantProfile_appliedJobs_container_card_details">
      <span className="applicantProfile_appliedJobs_container_card_company">
        {company}
      </span>
      <span className="applicantProfile_appliedJobs_container_card_applied">
        Applied: <b>{convertDate(date_applied)}</b>
      </span>
      </section>
      {/* <span className="applicantProfile_appliedJobs_container_card_company">
        {company}
      </span>
      <span className="applicantProfile_appliedJobs_container_card_applied">
        Applied: <b>{convertDate(date_applied)}</b>
      </span> */}
    </div>
  );
}

export default ApplicantProfileAppliedJobsCard;
