import LoginForm from "../Components/Login/LoginForm.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function LoginComponent() {
  return (
    <RecruiterProvider>
      <LoginForm/>
    </RecruiterProvider>
  );
}
