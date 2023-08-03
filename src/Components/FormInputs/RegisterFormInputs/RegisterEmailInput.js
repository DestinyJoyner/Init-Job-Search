import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider.js";
import {
  handleFormInput,
  registrationEmailCheck,
} from "../../Functions/FormFunctions/RegisterFormFunctions.js";
import { emailInvalid, emailValid, asterisk } from "../../Job/Data/Icons.js";

function RegisterEmailInput({
  userType,
  label,
  formKey,
  value,
  stateVar,
  setFunction,
  validEmailStateVar,
  validEmailSetFunction,
}) {
  const { API, axios } = useContextProvider();

  // EMAIL VERIFICATION
  useEffect(() => {
    const emailValue = value;
    if (registrationEmailCheck(emailValue)) {
      axios
        .get(`${API}/emails/${userType}/${emailValue}`)
        .then(({ data }) => validEmailSetFunction(data.isEmailUnique))
        .catch((err) => console.log(err));
    }
    else {
      validEmailSetFunction(false)
    }
      
  }, [value]);

  return (
    <label 
    className="registerFormInput_email_label"
    htmlFor={formKey}>
      {!validEmailStateVar || !value  ? 
      emailInvalid : 
      emailValid}
      <span>{asterisk}{label}</span>
      <input
        type="email"
        id={formKey}
        value={value}
        placeholder="email@email.com"
        onChange={(event) => handleFormInput(event, stateVar, setFunction)}
      />
    </label>
  );
}

export default RegisterEmailInput;
