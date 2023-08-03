import RegistrationPage from "../Components/Registration/RegisterPage/RegistrationPage.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function Register() {
  return (
    <RecruiterProvider>
      <RegistrationPage />
    </RecruiterProvider>
  );
}
