import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import TextInput from "../../FormInputs/TextInput";
import EmailInput from "../../FormInputs/EmailInput";
import PasswordInput from "../../FormInputs/PasswordInput";
import "./RecruiterRegisterForm.scss";
import "../../FormInputs/FormInputs.scss"

function RecruiterRegisterForm(props) {
  const { API, axios } = useContextProvider()
  const [recruiterForm, setRecruiterForm] = useState({
    first_name : "",
    last_name: "",
    organization: "",
    email: "",
    password: "",
    isRecruiter: true
  })
  const [availableEmail, setAvailableEmail] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
 
  // USE EFFECTS

  return (
    <form className="recruiterRegisterForm">
      
      <TextInput 
      label ={"First Name"}
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
      label ={"Organization/Company"}
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
      formKey={"password"}
      stateVar={confirmPasswordValue}
      setFunction={setConfirmPasswordValue}
      showPasswordStateVar={showPassword}
      confirmPassword={true}
      />

      <input 
      type="submit"
      value="REGISTER"
      className="formInput_submitButton"
      />
      
    </form>
  );
}

export default RecruiterRegisterForm;
