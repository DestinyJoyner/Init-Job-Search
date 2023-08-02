import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";

function ApplicantRegisterForm() {
  const [applicantForm, setApplicantForm] = useState({
    first_name: "",
    last_name: "",
    education: "",
    email: "",
    password: "",
  });

  return (
    <RegisterForm 
    formType={"applicant"} 
    formObj={applicantForm} />
  );
}

export default ApplicantRegisterForm;
