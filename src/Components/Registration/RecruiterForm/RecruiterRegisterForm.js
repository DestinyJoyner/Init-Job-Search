import { useState, useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";
import TextInput from "../../App/FormInputs/TextInput";
import "./RecruiterRegisterForm.scss";
import EmailInput from "../../App/FormInputs/EmailInput";
import { registrationEmailCheck } from "../../FormFunctions/FormFunctions";

function RecruiterRegisterForm(props) {
  const { API, axios } = useContextProvider()
  const [recruiterForm, setRecruiterForm] = useState({
    first_name : "",
    last_name: "",
    organization: "",
    email: "",
    password: ""
  })
  const [availableEmail, setAvailableEmail] = useState(false)
 
  // USE EFFECTS
  // EMAIL VERIFICATION
  // useEffect(() => {
  //   const emailValue = recruiterForm["email"]
  //   if(registrationEmailCheck(emailValue)){
  //     axios.get(`${API}/emails/recruiters/${emailValue}`)
  //       .then(({ data }) => setAvailableEmail(data.isEmailUnique))
  //       .catch((err) => console.log(err));
  //   }
  // },[recruiterForm["email"]])

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

    </form>
  );
}

export default RecruiterRegisterForm;
