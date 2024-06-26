import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import LoginHeader from "../LoginHeader/LoginHeader";
import LoginForm from "../LoginForm/LoginForm";
import { asterisk } from "../../App/Data/Icons";
import loadingGif from "../../../Assets/loading-screen-resize-crop.gif"
import "./LoginPage.scss";

function LoginPage() {
  const { setLoading,loading, isSignedIn, isRecruiterAcc } = useContextProvider();
  const { setAppHeader } = useNavProvider();
  const navigate = useNavigate();
  const [failedLogin, setFailedLogin] = useState(false);
  const [failedLoginMessage, setFailedLoginMessage] = useState("");

  // temporary until revamp loading component for entire app
  const [loginLoad, setLoginLoad] = useState(false)

  useEffect(() => {
    // setLoading(true)
    if (isSignedIn || isRecruiterAcc) {
      navigate(isSignedIn ? "/user" : "/recruiter");
    } else {
      setAppHeader("Log In");
      // setLoading(false)
    }
  }, []);

  useEffect(() => {
    setLoading(false)
  },[loading])

  return (
    // !loading &&
    <div className="loginPage grid-center">
      <LoginHeader />

      <LoginForm
        setFailedLogin={setFailedLogin}
        setFailedMessage={setFailedLoginMessage}
        setLoginLoad={setLoginLoad}
      />

      {(failedLogin && 
        <div className="loginPage_error">{failedLoginMessage}</div>)
        ||
        (loginLoad && <div className="loginPage_loginLoad">
        <span>{asterisk}Due to free web hosting, initial login can take up to 30secs</span>
        <img src={loadingGif} alt="loading-spinner"/></div>
      )}

    

      <Link to="/register" className="loginPage_register">
        New to inIT? <br />
        Create an account
      </Link>
     
    </div>
  );
}

export default LoginPage;
