import Register from "../Components/Register-Login/Register.js";
import RegistrationPage from "../Components/Registration/RegistrationPage.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function RegisterComponent() {
  return (
    <RecruiterProvider>
      <RegistrationPage />
    </RecruiterProvider>
  );
}
