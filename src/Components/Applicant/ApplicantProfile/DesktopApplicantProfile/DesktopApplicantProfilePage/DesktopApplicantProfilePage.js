import { useEffect } from "react";
import { useContextProvider } from "../../../../../Providers/Provider.js";
import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import DesktopApplicantProfileHeader from "../DesktopApplicantProfileHeader/DesktopApplicantProfileHeader.js";
import DesktopApplicantProfileAppliedJobs from "../DesktopApplicantProfileAppliedJobs/DesktopApplicantProfileAppliedJobs.js";
import DesktopApplicantProfileProject from "../DesktopApplicantProfileProject/DesktopApplicantProfileProject.js";
import LogoBanner from "../../../../App/LogoBanner/LogoBanner.js";
import { applicantProfileConversion } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import { applicantProfileHeaderLabel } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import "./DesktopApplicantProfilePage.scss";

function DesktopApplicantProfilePage() {
  const { loading, setLoading } = useContextProvider();
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();

  const desktopApplicantProfileDetails =
    applicantProfileConversion(applicantDetails);

  useEffect(() => {
    if (applicantDetails.id) {
      setLoading(false);
    }
  }, [applicantDetails]);

  return (
  
    <div className="desktopApplicantProfilePage">
      <section className="desktopApplicantProfilePage_banner">
        <LogoBanner />
      </section>

      <section className="desktopApplicantProfilePage_content">

        <DesktopApplicantProfileHeader
          desktopApplicantProfileDetails={desktopApplicantProfileDetails}
        />

        <DesktopApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        {
          applicantDetails.project &&
          <DesktopApplicantProfileProject applicantProject={applicantDetails.project}/>}
      </section>
    </div>
  );
}

export default DesktopApplicantProfilePage;
