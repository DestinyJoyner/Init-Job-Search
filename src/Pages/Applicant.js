import UserProvider from "../Providers/UserProvider.js";
import ApplicantProfilePage from "../Components/Applicant/ApplicantProfilePage/ApplicantProfilePage.js";

function Applicant() {
  return (
    <UserProvider>
      <ApplicantProfilePage />
    </UserProvider>
  );
}

export default Applicant;
