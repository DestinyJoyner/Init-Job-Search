import { useState, useEffect } from "react";
import LoginHeader from "../Register-Login/LoginHeader";
import SliderButtons from "../App/SliderButton/SliderButtons";
import ApplicantRegisterForm from "./ApplicantForm/ApplicantRegisterForm.js"
import RecruiterRegisterForm from "./RecruiterForm/RecruiterRegisterForm";

function RegistrationPage(props) {
    const [userType, setUserType] = useState("applicant")

  return (
    <div className="registrationPage">
      <LoginHeader />

      <SliderButtons
        button1={"Applicant"}
        button2={"Recruiter"}
        setFunction={setUserType}
      />

      {
        userType === "applicant" ?
        <ApplicantRegisterForm /> :
        <RecruiterRegisterForm />
      }
    </div>
  );
}

export default RegistrationPage;
