import UserProvider from "../Providers/UserProvider";
import JobProvider from "../Providers/JobProvider";
import RecruiterProvider from "../Providers/RecruiterProvider";
import JobsShow from "../Components/Job/JobsShowPage/JobsShow.js";

function JobsShowPage() {
  return (
    <UserProvider>
    <JobProvider>
      <RecruiterProvider>
        <JobsShow />
      </RecruiterProvider>
    </JobProvider>
    </UserProvider>
  );
}

export default JobsShowPage;
