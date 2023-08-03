import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../Providers/Provider";
import RegisterTextInput from "../../FormInputs/RegisterFormInputs/RegisterTextInput";
import RegisterEmailInput from "../../FormInputs/RegisterFormInputs/RegisterEmailInput";
import RegisterPasswordInput from "../../FormInputs/RegisterFormInputs/RegisterPasswordInput";
import {
  checkPasswordMatchAndValid,
  checkIfFormInputsHaveValue,
} from "../../Functions/FormFunctions/RegisterFormFunctions";
import {
  handleRecruiterRegisterForm,
  handleApplicantRegisterForm,
} from "../../Functions/FormFunctions/RegisterFormSubmitFunctions";
import "./RegisterForm.scss";
import "../../FormInputs/RegisterFormInputs/RegisterFormInputs.scss"

function RegisterForm({ formObj, formType, registerPartTwo }) {
  const {
    setRecruiterID,
    setIsSignedIn,
    setIsRecruiterAcc,
    setUserID,
    setAuthToken,
  } = useContextProvider();
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState(formObj);
  const [availableEmail, setAvailableEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);

  const handleRegistrationFormSubmit = (e) =>
    formType === "recruiter"
      ? handleRecruiterRegisterForm(
          e,
          registerForm,
          setRecruiterID,
          setIsSignedIn,
          setUserID,
          setIsRecruiterAcc,
          setAuthToken,
          navigate
        )
      : handleApplicantRegisterForm(
          e,
          registerForm,
          setRecruiterID,
          setIsSignedIn,
          setUserID,
          setIsRecruiterAcc,
          setAuthToken,
          navigate,
          registerPartTwo
        );

  // Password
  useEffect(() => {
    const formPassword = registerForm["password"];
    const validPasswordMatch = checkPasswordMatchAndValid(
      formPassword,
      confirmPasswordValue
    );

    validPasswordMatch ? setPasswordMatch(true) : setPasswordMatch(false);
  }, [confirmPasswordValue, registerForm["password"], passwordMatch]);

  // FormInputs
  useEffect(() => {
    const formReadyToSubmit =
      checkIfFormInputsHaveValue(registerForm) &&
      passwordMatch &&
      availableEmail;

    formReadyToSubmit ? setAllowSubmit(true) : setAllowSubmit(false);
  }, [registerForm, passwordMatch, availableEmail]);

  return (
    <form
      className="registerForm"
      onSubmit={(event) => handleRegistrationFormSubmit(event)}
    >
      <RegisterTextInput
        label={"First Name"}
        value={registerForm["first_name"]}
        formKey={"first_name"}
        stateVar={registerForm}
        setFunction={setRegisterForm}
      />

      <RegisterTextInput
        label={"Last Name"}
        value={registerForm["last_name"]}
        formKey={"last_name"}
        stateVar={registerForm}
        setFunction={setRegisterForm}
      />

      {formType === "recruiter" ? (
        <RegisterTextInput
          label={"Organization/Company"}
          value={registerForm["organization"]}
          formKey={"organization"}
          stateVar={registerForm}
          setFunction={setRegisterForm}
        />
      ) : (
        <RegisterTextInput
          label={"Education"}
          value={registerForm["education"]}
          formKey={"education"}
          stateVar={registerForm}
          setFunction={setRegisterForm}
        />
      )}

      <RegisterEmailInput
        label={"Email Address"}
        value={registerForm["email"]}
        formKey={"email"}
        stateVar={registerForm}
        setFunction={setRegisterForm}
        userType={formType === "recruiter" ? "recruiters" : "users"}
        validEmailStateVar={availableEmail}
        validEmailSetFunction={setAvailableEmail}
      />

      <RegisterPasswordInput
        label={"Password"}
        value={registerForm["password"]}
        formKey={"password"}
        stateVar={registerForm}
        setFunction={setRegisterForm}
        showPasswordStateVar={showPassword}
        showPasswordSetFunction={setShowPassword}
      />

      <RegisterPasswordInput
        label={"Confirm Password"}
        value={confirmPasswordValue}
        formKey={"confirmPassword"}
        stateVar={confirmPasswordValue}
        setFunction={setConfirmPasswordValue}
        showPasswordStateVar={showPassword}
        confirmPassword={true}
        passwordMatch={passwordMatch}
      />

      {allowSubmit && (
        <input
          type="submit"
          value="REGISTER"
          className="formInput_submitButton"
        />
      )}
    </form>
  );
}

export default RegisterForm;
