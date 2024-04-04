import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../../../Providers/Provider.js";
import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import DesktopApplicantProfileHeader from "../DesktopApplicantProfileHeader/DesktopApplicantProfileHeader.js";
import DesktopApplicantProfileAppliedJobs from "../DesktopApplicantProfileAppliedJobs/DesktopApplicantProfileAppliedJobs.js";
import DesktopApplicantProfileProject from "../DesktopApplicantProfileProject/DesktopApplicantProfileProject.js";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent.js";
import { applicantProfileConversion } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import { applicantProfileHeaderLabel } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import { FaRegEdit } from "react-icons/fa";
import "./DesktopApplicantProfilePage.scss";

function DesktopApplicantProfilePage() {
  const { loading, setLoading, isRecruiterAcc, userID } = useContextProvider();
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();

  const desktopApplicantProfileDetails =
    applicantProfileConversion(applicantDetails);
  console.log(desktopApplicantProfileDetails);
  useEffect(() => {
    if (applicantDetails.id) {
      setLoading(false);
    }
  }, [applicantDetails]);

  return (
    <div className="desktopApplicantProfilePage">
     
      <section className="desktopApplicantProfilePage_content">
        <DesktopApplicantProfileHeader
          desktopApplicantProfileDetails={desktopApplicantProfileDetails}
        />

        <div className="desktopApplicantProfilePage_content_skills">
          {applicantProfileHeaderLabel(
            "Proficient Skills",
            <DesktopSkillsComponent
              desktopJobSkills={desktopApplicantProfileDetails.desktopSkills}
              profileView={true}
            />
          )}
        </div>

        <div className="desktopApplicantProfilePage_content_link">
          {!userID && isRecruiterAcc ? (
            <span>recruiter view</span>
          ) : (
            <Link className="applicantProfile_edit" to="/user/edit">
              EDIT PROFILE <FaRegEdit />
            </Link>
          )}
        </div>

        <DesktopApplicantProfileAppliedJobs applicantJobs={applicantJobs} />

        {applicantDetails.project && (
          <DesktopApplicantProfileProject
            applicantProject={applicantDetails.project}
          />
        )}

<div className="desktopApplicantProfilePage_content_resume">
  Resume Under Construction
</div>
      </section>
    </div>
  );
}

export default DesktopApplicantProfilePage;
