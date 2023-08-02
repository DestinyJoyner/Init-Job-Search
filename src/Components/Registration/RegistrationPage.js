import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavProvider } from "../../Providers/NavProvider";
import LoginHeader from "../Register-Login/LoginHeader";
import SliderButtons from "../App/SliderButton/SliderButtons";
import ApplicantRegisterForm from "./ApplicantForm/ApplicantRegisterForm.js";
import RecruiterRegisterForm from "./RecruiterForm/RecruiterRegisterForm";
import "./RegistrationPage.scss";

function RegistrationPage(props) {
  const { setAppHeader } = useNavProvider();
  const [userType, setUserType] = useState("applicant");

  useEffect(() => setAppHeader("Register"), []);

  useEffect(() => {}, [userType]);

  return (
    <div className="registrationPage grid-center">
      <LoginHeader />

      <section className="registrationPage_userType">
        <SliderButtons
          button1={"Applicant"}
          button2={"Recruiter"}
          setFunction={setUserType}
        />
        <span>Select an Account Type</span>
      </section>

      {userType === "applicant" ? (
        <ApplicantRegisterForm />
      ) : (
        <RecruiterRegisterForm />
      )}

      <span>
      Already have an Account?
      <Link to="/login"> Log in </Link>
        </span>
    </div>
  );
}

export default RegistrationPage;
