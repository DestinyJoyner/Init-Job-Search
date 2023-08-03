import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "../LoginHeader/LoginHeader.js";
import ShowHidePasswordButton from "../../ShowHidePassword/ShowHidePasswordButton.js";
import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions.js";
import { handleLoginSubmit } from "../../Functions/FormFunctions/LoginFormSubmitFunctions.js";
import { loginEmail, loginPassword, recruiter } from "../../Job/Data/Icons.js";
import "./LoginForm.scss";
import "../../FormInputs/FormInputs.scss";

export default function LoginForm() {
  const {
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,
    setLoading,
    isSignedIn,
    isRecruiterAcc,
  } = useContextProvider();
  const { setAppHeader } = useNavProvider();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isRecruiter: false,
  });
  const [failedLogin, setFailedLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSignedIn || isRecruiterAcc) {
      navigate(isSignedIn ? "/user" : "/recruiter");
      // setLoading(true)
    } else {
      setAppHeader("Log In");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setFailedLogin(false);
  }, [loginForm]);

  return (
    // (!isSignedIn && !isRecruiterAcc) &&
    <div className="login grid-center">
      <LoginHeader />

      <form
        className="login_form grid-center"
        onSubmit={(event) =>
          handleLoginSubmit(
            event,
            loginForm,
            setAuthToken,
            setUserID,
            setRecruiterID,
            setIsSignedIn,
            setIsRecruiterAcc,
            navigate
          )
        }
      >
        <label className="login_form_label grid-center" htmlFor="email">
          {loginEmail}
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="login_form_input"
            value={loginForm.email}
            onChange={(event) =>
              handleFormInput(event, loginForm, setLoginForm)
            }
            required
          />
        </label>

        <label
          className="formInput_password_label grid-center"
          htmlFor="password"
        >
          {loginPassword}
          <input
            id="password"
            type={!showPassword ? "password" : "text"}
            placeholder="Password"
            className="login_form_input"
            value={loginForm.password}
            onChange={(event) =>
              handleFormInput(event, loginForm, setLoginForm)
            }
            required
          />
          <ShowHidePasswordButton
            setFunction={setShowPassword}
            stateVar={showPassword}
          />
        </label>

        <label className="login_form_isRecruiter_label" htmlFor="isRecruiter">
          {recruiter}
          <input
            id="isRecruiter"
            type="checkbox"
            checked={loginForm.isRecruiter}
            className="login_form_isRecruiter"
            onChange={(event) =>
              handleFormInput(event, loginForm, setLoginForm)
            }
          />
          <span className="login_form_isRecruiter_label_text">
            I am a Recruiter
          </span>
        </label>

        <input className="login_form_submit" type="submit" value="LOG IN" />
      </form>
      {failedLogin && (
        <div className="recruiter-login-error">
          "Invalid Email, or Password"
        </div>
      )}
      <Link to="/register" className="login_register">
        New to inIT? <br />
        Create an account
      </Link>
    </div>
  );
}
