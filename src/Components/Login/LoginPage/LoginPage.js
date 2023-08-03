import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import LoginHeader from "../LoginHeader/LoginHeader";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPage.scss";

function LoginPage(props) {
  const { setLoading, isSignedIn, isRecruiterAcc } = useContextProvider();
  const { setAppHeader } = useNavProvider();
  const [failedLogin, setFailedLogin] = useState(false);
  const [failedLoginMessage, setFailedLoginMessage] = useState("")

  useEffect(() => {
    if (isSignedIn || isRecruiterAcc) {
      navigate(isSignedIn ? "/user" : "/recruiter");
    } else {
      setAppHeader("Log In");
      setLoading(false);
    }
  }, []);

  return (
    <div className="loginPage grid-center">
      <LoginHeader />

      <LoginForm 
      setFailedLogin={setFailedLogin}
      setFailedMessage={setFailedLoginMessage} />

      {failedLogin && (
        <div className="loginPage_error">
          {failedLoginMessage}
        </div>
      )}
      <Link to="/register" className="loginPage_register">
        New to inIT? <br />
        Create an account
      </Link>
    </div>
  );
}

export default LoginPage;
