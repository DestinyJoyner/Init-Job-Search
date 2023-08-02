import { useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import {
  handleFormInput,
  registrationEmailCheck,
} from "../FormFunctions/FormFunctions.js";
import { emailInvalid, emailValid } from "../Job/Data/Icons.js";

function EmailInput({
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
  }, [value]);

  return (
    <label 
    className="registerForm_email_label"
    htmlFor={formKey}>
      {!validEmailStateVar || !value  ? 
      emailInvalid : 
      emailValid}
      <span className="formInput_label">{label}</span>
      <input
        type="email"
        id={formKey}
        value={value}
        placeholder="email@email.com"
        onChange={() => handleFormInput(event, stateVar, setFunction)}
      />
    </label>
  );
}

export default EmailInput;
