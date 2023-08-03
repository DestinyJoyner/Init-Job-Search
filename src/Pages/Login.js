import LoginPage from "../Components/Login/LoginPage/LoginPage.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function Login() {
  return (
    <RecruiterProvider>
      <LoginPage/>
    </RecruiterProvider>
  );
}
