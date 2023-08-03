import LoginForm from "../Components/Login/LoginForm/LoginForm.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function Login() {
  return (
    <RecruiterProvider>
      <LoginForm/>
    </RecruiterProvider>
  );
}
