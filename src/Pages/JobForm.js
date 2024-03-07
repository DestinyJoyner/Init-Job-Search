import NewEditJobForm from "../Components/Recruiter/JobForm/NewEditJobForm.js";
import JobProvider from "../Providers/JobProvider.js";

export default function JobForm({edit}) {
  return (
    <JobProvider>
      <NewEditJobForm edit={edit} />
    </JobProvider>
  );
}
