import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";

function RecruiterRegisterForm() {
  const [recruiterForm, setRecruiterForm] = useState({
    first_name: "",
    last_name: "",
    organization: "",
    email: "",
    password: "",
    isRecruiter: true,
  });
 
  return (
    <RegisterForm 
    formType={"recruiter"}
    formObj={recruiterForm}
    />
  );
}

export default RecruiterRegisterForm;
