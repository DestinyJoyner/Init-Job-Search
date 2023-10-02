import JobProvider from "../Providers/JobProvider";
import RecruiterProvider from "../Providers/RecruiterProvider";
import JobsShow from "../Components/Job/JobsShowPage/JobsShow.js";

function JobsShowPage() {
  return (
    <JobProvider>
      <RecruiterProvider>
        <JobsShow />
      </RecruiterProvider>
    </JobProvider>
  );
}

export default JobsShowPage;
