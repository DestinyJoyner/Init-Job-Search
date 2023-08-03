import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavigate } from "react-router-dom";
import ShowHidePasswordButton from "../../ShowHidePassword/ShowHidePasswordButton.js";
import { handleFormInput } from "../../Functions/FormFunctions/RegisterFormFunctions.js";
import { handleLoginSubmit } from "../../Functions/FormFunctions/LoginFormSubmitFunctions.js";
import { loginEmail, loginPassword, recruiter } from "../../Job/Data/Icons.js";
import "./LoginForm.scss";
import "../../FormInputs/FormInputs.scss";

export default function LoginForm({setFailedLogin, setFailedMessage}) {
  const {
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,
  } = useContextProvider();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isRecruiter: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   if (isSignedIn || isRecruiterAcc) {
  //     navigate(isSignedIn ? "/user" : "/recruiter");
  //   } else {
  //     setAppHeader("Log In");
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    setFailedLogin(false);
  }, [loginForm]);

  return (
    // (!isSignedIn && !isRecruiterAcc) &&
      <form
        className="loginForm grid-center"
        onSubmit={(event) =>
          handleLoginSubmit(
            event,
            loginForm,
            setAuthToken,
            setUserID,
            setRecruiterID,
            setIsSignedIn,
            setIsRecruiterAcc,
            setFailedLogin,
            setFailedMessage,
            navigate
          )
        }
      >
        <label className="loginForm_label grid-center" htmlFor="email">
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
     
  );
}
