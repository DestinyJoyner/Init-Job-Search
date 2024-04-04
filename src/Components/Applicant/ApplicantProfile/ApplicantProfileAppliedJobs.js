import ApplicantProfileAppliedJobsCard from "./ApplicantProfileAppliedJobsCard.js"
import { v4 as uuidv4 } from "uuid";

function ApplicantProfileAppliedJobs({ applicantJobs }) {
    
  return (
    <div className="applicantProfile_appliedJobs">
      <span className="applicantProfile_sectionHeader_text">
        Job Search Activity:
      </span>
      <section className="applicantProfile_appliedJobs_container">
        {applicantJobs.length > 0 ? 
        (
          applicantJobs.map(jobsCard => <ApplicantProfileAppliedJobsCard 
          key ={uuidv4()}
          jobCardObj={jobsCard}
          />) 
          ) :
         (
          <span className="applicantProfile_appliedJobs_noJobs">
            No Job Applications to Display
          </span>
        )}
      </section>
    </div>
  );
}

export default ApplicantProfileAppliedJobs;
