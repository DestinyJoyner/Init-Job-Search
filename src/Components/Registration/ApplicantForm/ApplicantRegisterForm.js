import { useState } from "react";
import UserProvider from "../../../Providers/UserProvider";
import RegisterForm from "../RegisterForm/RegisterForm";
import ApplicantRegisterFormTwo from "./ApplicantRegisterFormTwo";

function ApplicantRegisterForm({setHideSliderButtons}) {
  const [applicantFormTwoAccess, setApplicantFormTwoAccess] = useState(true);
  const [applicantForm, setApplicantForm] = useState({
    first_name: "",
    last_name: "",
    education: "",
    email: "",
    password: "",
  });

  return !applicantFormTwoAccess ? (
    <RegisterForm 
    formType={"applicant"} 
    formObj={applicantForm}
    registerPartTwo={setApplicantFormTwoAccess} />
  ) : (
    <UserProvider>
      <ApplicantRegisterFormTwo
      setHideSliderButtons={setHideSliderButtons} />
    </UserProvider>
    
  );
}

export default ApplicantRegisterForm;
