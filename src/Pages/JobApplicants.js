import JobProvider from "../Providers/JobProvider.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";
import Applicants from "../Components/Recruiter/Applicants.js"

export default function JobApplicants() {
    return (
      <JobProvider>
        <RecruiterProvider>
        <Applicants />
        </RecruiterProvider>
      </JobProvider>
    
    );
  }