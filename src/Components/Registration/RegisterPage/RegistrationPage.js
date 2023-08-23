import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useContextProvider } from "../../../Providers/Provider";
import LoginHeader from "../../Login/LoginHeader/LoginHeader.js";
import SliderButtons from "../../SliderButton/SliderButtons";
import ApplicantRegisterForm from "../ApplicantForm/ApplicantRegisterForm.js";
import RecruiterRegisterForm from "../RecruiterForm/RecruiterRegisterForm";
import "./RegistrationPage.scss";

function RegistrationPage() {
  const {setLoading,loading} = useContextProvider()
  const { setAppHeader } = useNavProvider();
  const [userType, setUserType] = useState("applicant");
  const [hideSliderButtons, setHideSliderButtons] = useState(false)

  useEffect(() => {
    setAppHeader("Register")
    setLoading(false)
  }, []);

  useEffect(() => {
    setLoading(false)
  },[loading])

  useEffect(() => {}, [userType]);

  return (
    <div className="registrationPage grid-center">
      <LoginHeader />

     { !hideSliderButtons &&
     <section className="registrationPage_userType">
        <SliderButtons
          button1={"Applicant"}
          button2={"Recruiter"}
          setFunction={setUserType}
        />
        <span>Select an Account Type</span>
      </section>}

      {userType === "applicant" ? (
        <ApplicantRegisterForm
        setHideSliderButtons={setHideSliderButtons} />
      ) : (
        <RecruiterRegisterForm />
      )}

     {!hideSliderButtons &&
      <span>
      Already have an Account?
      <Link to="/login"> Log in </Link>
        </span>}
    </div>
  );
}

export default RegistrationPage;
