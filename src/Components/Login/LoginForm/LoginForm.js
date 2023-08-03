import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavigate } from "react-router-dom";
import LoginEmailInput from "../../FormInputs/LoginFormInputs/LoginEmailInput.js";
import LoginPasswordInput from "../../FormInputs/LoginFormInputs/LoginPasswordInput.js";
import LoginCheckbox from "../../FormInputs/LoginFormInputs/LoginCheckbox.js";
import { handleLoginSubmit } from "../../Functions/FormFunctions/LoginFormSubmitFunctions.js";
import "./LoginForm.scss";
import "../../FormInputs/LoginFormInputs/LoginFormInputs.scss"

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

  useEffect(() => {
    setFailedLogin(false);
  }, [loginForm]);

  return (
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
        <LoginEmailInput 
        formKey={"email"}
        value={loginForm["email"]}
        placeholder={"Email Address"}
        stateVar={loginForm}
        setFunction={setLoginForm}/>

        <LoginPasswordInput 
        formKey={"password"}
        value={loginForm["password"]}
        placeholder={"Password"}
        stateVar={loginForm}
        setFunction={setLoginForm}/>

        <LoginCheckbox 
        formKey={"isRecruiter"}
        value={loginForm["isRecruiter"]}
        stateVar={loginForm}
        setFunction={setLoginForm}/>

        <input className="loginForm_submitButton" type="submit" 
        value="LOG IN" />
      </form>
     
  );
}
