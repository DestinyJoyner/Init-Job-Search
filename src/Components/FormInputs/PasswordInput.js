import ShowHidePasswordButton from "../ShowHidePassword/ShowHidePasswordButton";
import { handleFormInput } from "../FormFunctions/RegisterFormFunctions";
import { asterisk, emailInvalid, emailValid } from "../Job/Data/Icons";

function PasswordInput({
  label,
  formKey,
  value,
  stateVar,
  setFunction,
  showPasswordStateVar,
  showPasswordSetFunction,
  confirmPassword,
  passwordMatch
}) {
  const handlePasswordValue = confirmPassword
    ? (event) => setFunction(event.target.value)
    : (event) => handleFormInput(event, stateVar, setFunction);

  return (
    <label className="formInput_password_label" htmlFor={formKey}>
      <span className={!confirmPassword ? "formInput_password_label_text" : ""}>
        <span>
          {asterisk}
          {label}
        </span>
        {!confirmPassword && (
          <span className="formInput_password_label_helperText">
            Include a lowercase, uppercase, number, and special symbol. 5 char
            length min
          </span>
        )}
      </span>

      {!confirmPassword && (
        <ShowHidePasswordButton
          stateVar={showPasswordStateVar}
          setFunction={showPasswordSetFunction}
        />
      )}
      {
        confirmPassword &&
        <span className="formInput_password_label_confirmIcon">{passwordMatch ? emailValid : emailInvalid}</span>
      }

      <input
        type={showPasswordStateVar ? "text" : "password"}
        id={formKey}
        value={value}
        placeholder={label}
        onChange={handlePasswordValue}
      />
    </label>
  );
}

export default PasswordInput;
