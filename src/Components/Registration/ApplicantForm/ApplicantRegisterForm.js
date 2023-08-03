import { useState, useEffect } from "react";
import UserProvider from "../../../Providers/UserProvider";
import RegisterForm from "../RegisterForm/RegisterForm";
import ApplicantRegisterFormTwo from "./ApplicantRegisterFormTwo";

function ApplicantRegisterForm({setHideSliderButtons}) {
  const [applicantFormTwoAccess, setApplicantFormTwoAccess] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    first_name: "",
    last_name: "",
    education: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setHideSliderButtons(false)
    setApplicantFormTwoAccess(false)
  },[])

  return !applicantFormTwoAccess ? (
    <RegisterForm 
    formType={"applicant"} 
    formObj={applicantForm}
    registerPartTwo={setApplicantFormTwoAccess} />
  ) : (
    <UserProvider>
      <ApplicantRegisterFormTwo
      setHideSliderButtons={setHideSliderButtons}
      setApplicantFormTwoAccess={setApplicantFormTwoAccess} />
    </UserProvider>
    
  );
}

export default ApplicantRegisterForm;
