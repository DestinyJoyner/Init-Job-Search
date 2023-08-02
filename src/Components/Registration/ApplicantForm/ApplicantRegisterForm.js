import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";

function ApplicantRegisterForm(props) {
  const [applicantForm, setApplicantForm] = useState({
    first_name: "",
    last_name: "",
    school: "",
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
