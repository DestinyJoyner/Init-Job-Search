import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import TextInput from "../../FormInputs/TextInput";
import EmailInput from "../../FormInputs/EmailInput";
import PasswordInput from "../../FormInputs/PasswordInput";
import {
  checkPasswordMatchAndValid,
  checkIfFormInputsHaveValue,
} from "../../FormFunctions/FormFunctions";
import "../RecruiterForm/RecruiterRegisterForm.scss";
import "../../FormInputs/FormInputs.scss";
import "./ApplicantRegisterForm.scss"

function ApplicantRegisterForm(props) {
    const { API, axios } = useContextProvider();
    const [applicantForm, setApplicantForm] = useState({
      first_name: "",
      last_name: "",
      school: "",
      email: "",
      password: "",
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
      const formPassword = applicantForm["password"];
      const validPasswordMatch = checkPasswordMatchAndValid(
        formPassword,
        confirmPasswordValue
      );
  
      validPasswordMatch ? setPasswordMatch(true) : setPasswordMatch(false);
    }, [confirmPasswordValue, applicantForm["password"], passwordMatch]);
  
    // FormInputs
    useEffect(() => {
      const formReadyToSubmit = checkIfFormInputsHaveValue(applicantForm) && passwordMatch && availableEmail 
  
      formReadyToSubmit ? 
      setAllowSubmit(true) : 
      setAllowSubmit(false);
    }, [applicantForm,passwordMatch,availableEmail]);
  
    return (
      <form
        className="recruiterRegisterForm"
        onSubmit={(event) => handleRegistrationFormSubmit(event)}
      >
        <TextInput
          label={"First Name"}
          value={applicantForm["first_name"]}
          formKey={"first_name"}
          stateVar={applicantForm}
          setFunction={setApplicantForm}
        />
  
        <TextInput
          label={"Last Name"}
          value={applicantForm["last_name"]}
          formKey={"last_name"}
          stateVar={applicantForm}
          setFunction={setApplicantForm}
        />
  
        <TextInput
          label={"Education"}
          value={applicantForm["school"]}
          formKey={"school"}
          stateVar={applicantForm}
          setFunction={setApplicantForm}
        />
  
        <EmailInput
          label={"Email Address"}
          value={applicantForm["email"]}
          formKey={"email"}
          stateVar={applicantForm}
          setFunction={setApplicantForm}
          userType={"users"}
          validEmailStateVar={availableEmail}
          validEmailSetFunction={setAvailableEmail}
        />
  
        <PasswordInput
          label={"Password"}
          value={applicantForm["password"]}
          formKey={"password"}
          stateVar={applicantForm}
          setFunction={setApplicantForm}
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

export default ApplicantRegisterForm;