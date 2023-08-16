import ApplicantProfileEditForm from "../Components/Applicant/EditApplicantProfile/ApplicantProfileEditForm";
import UserProvider from "../Providers/UserProvider.js";

function ApplicantEdit() {
  return (
    <UserProvider>
      <ApplicantProfileEditForm />
    </UserProvider>
  );
}

export default ApplicantEdit;
