import UserProfile from "../Components/User/UserProfile.js";
import UserProvider from "../Providers/UserProvider.js";
import ApplicantProfile from "../Components/Applicant/ApplicantProfile/ApplicantProfile.js";

function User() {
  return (
    <UserProvider>
      {/* <UserProfile /> */}
      <ApplicantProfile />
    </UserProvider>
  );
}

export default User;
