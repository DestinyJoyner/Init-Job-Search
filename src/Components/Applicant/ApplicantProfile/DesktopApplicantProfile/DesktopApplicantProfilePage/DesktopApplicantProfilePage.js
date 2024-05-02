import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../../../Providers/Provider.js";
import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import DesktopApplicantProfileHeader from "../DesktopApplicantProfileHeader/DesktopApplicantProfileHeader.js";
import DesktopApplicantProfileAppliedJobs from "../DesktopApplicantProfileAppliedJobs/DesktopApplicantProfileAppliedJobs.js";
import DesktopApplicantProfileProject from "../DesktopApplicantProfileProject/DesktopApplicantProfileProject.js";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent.js";
import RecruiterNoteApplicantProfile from "../../../../App/RecruiterNoteApplicantProfile/RecruiterNoteApplicantProfile.js";
import { applicantProfileConversion } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import { applicantProfileHeaderLabel } from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions.js";
import { FaRegEdit } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import "./DesktopApplicantProfilePage.scss";

function DesktopApplicantProfilePage() {
  const { loading, setLoading, isRecruiterAcc, userID } = useContextProvider();
  const { applicantDetails, applicantSkillIds, applicantJobs } =
    useUserProvider();

  const desktopApplicantProfileDetails =
    applicantProfileConversion(applicantDetails);

  useEffect(() => {
    if (applicantDetails.id) {
      setLoading(false);
    }
    else {
      setLoading(true)
    }
  }, [applicantDetails]);

  return (
    !loading &&
    <div className="desktopApplicantProfilePage">
     
      <section className="desktopApplicantProfilePage_content init-card">
        <DesktopApplicantProfileHeader
          desktopApplicantProfileDetails={desktopApplicantProfileDetails}
          isRecruiterAcc={isRecruiterAcc}
        />

        {/* <div className="desktopApplicantProfilePage_content_skills">
          {applicantProfileHeaderLabel(
            "Proficient Skills:",
            <DesktopSkillsComponent
              desktopJobSkills={desktopApplicantProfileDetails.desktopSkills}
              profileView={true}
            />
          )}
        </div> */}

        {/* <div className="desktopApplicantProfilePage_content_link">
          {isRecruiterAcc ? (
           <RecruiterNoteApplicantProfile />
          ) : (
            <Link className="applicantProfile_edit" to="/user/edit">
              EDIT PROFILE <FaRegEdit />
            </Link>
          )}
        </div> */}

<div className="desktopApplicantProfilePage_content_right">
{!isRecruiterAcc &&
          <DesktopApplicantProfileAppliedJobs applicantJobs={applicantJobs} />}
</div>
        

<div className="desktopApplicantProfilePage_content_left">
        {applicantDetails.project && (
          <DesktopApplicantProfileProject
            applicantProject={applicantDetails.project}
          />
        )}
        <div className="desktopApplicantProfilePage_content_resume">
  <h4 className="desktopApplicantProfilePage_content_project_header"><GrDocumentPdf/>Resume</h4>
  <span>Coming Soon...</span>
</div>
</div>

{/* <div className="desktopApplicantProfilePage_content_resume init-card">
  <h4 className="desktopApplicantProfilePage_content_project_header"><GrDocumentPdf/>Resume</h4>
  <span>Coming Soon...</span>
</div> */}
      </section>
    </div>
  );
}

export default DesktopApplicantProfilePage;
