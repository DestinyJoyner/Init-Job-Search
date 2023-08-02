import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import TextInput from "../../FormInputs/TextInput";
import EmailInput from "../../FormInputs/EmailInput";
import PasswordInput from "../../FormInputs/PasswordInput";
import {
  checkPasswordMatchAndValid,
  checkIfFormInputsHaveValue,
} from "../../FormFunctions/FormFunctions";
import "./RecruiterRegisterForm.scss";
import "../../FormInputs/FormInputs.scss";

function RecruiterRegisterForm(props) {
  const { API, axios } = useContextProvider();
  const [recruiterForm, setRecruiterForm] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    email: "",
    password: "",
    isRecruiter: true,
  });
  const [availableEmail, setAvailableEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);

  // Submit
  function handleRegistrationFormSubmit(e, formObj){
    e.preventDefault()
    console.log("submit")
  }

  // Password
  useEffect(() => {
    const formPassword = recruiterForm["password"];
    const validPasswordMatch = checkPasswordMatchAndValid(
      formPassword,
      confirmPasswordValue
    );

    validPasswordMatch ? setPasswordMatch(true) : setPasswordMatch(false);
  }, [confirmPasswordValue, recruiterForm["password"], passwordMatch]);

  // FormInputs
  useEffect(() => {
    const formReadyToSubmit = checkIfFormInputsHaveValue(recruiterForm) && passwordMatch && availableEmail 

    formReadyToSubmit ? 
    setAllowSubmit(true) : 
    setAllowSubmit(false);
  }, [recruiterForm,passwordMatch,availableEmail]);

  return (
    <form
      className="recruiterRegisterForm"
      onSubmit={(event) => handleRegistrationFormSubmit(event)}
    >
      <TextInput
        label={"First Name"}
        value={recruiterForm["first_name"]}
        formKey={"first_name"}
        stateVar={recruiterForm}
        setFunction={setRecruiterForm}
      />

      <TextInput
        label={"Last Name"}
        value={recruiterForm["last_name"]}
        formKey={"last_name"}
        stateVar={recruiterForm}
        setFunction={setRecruiterForm}
      />

      <TextInput
        label={"Organization/Company"}
        value={recruiterForm["organization"]}
        formKey={"organization"}
        stateVar={recruiterForm}
        setFunction={setRecruiterForm}
      />

      <EmailInput
        label={"Email Address"}
        value={recruiterForm["email"]}
        formKey={"email"}
        stateVar={recruiterForm}
        setFunction={setRecruiterForm}
        userType={"recruiters"}
        validEmailStateVar={availableEmail}
        validEmailSetFunction={setAvailableEmail}
      />

      <PasswordInput
        label={"Password"}
        value={recruiterForm["password"]}
        formKey={"password"}
        stateVar={recruiterForm}
        setFunction={setRecruiterForm}
        showPasswordStateVar={showPassword}
        showPasswordSetFunction={setShowPassword}
      />

      <PasswordInput
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

export default RecruiterRegisterForm;
