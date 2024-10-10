import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../../../../Providers/Provider.js";
import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import DesktopApplicantProfileHeader from "../DesktopApplicantProfileHeader/DesktopApplicantProfileHeader.js";
import DesktopApplicantProfileAppliedJobs from "../DesktopApplicantProfileAppliedJobs/DesktopApplicantProfileAppliedJobs.js";
import DesktopApplicantProfileProject from "../DesktopApplicantProfileProject/DesktopApplicantProfileProject.js";
import ResumeUpload from "../../ResumeUpload/ResumeUpload.js";
import {handleExtractedTextFromResumeFile} from "../../../../../utils/pdfUtils.js"
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
    } else {
      setLoading(true);
    }
  }, [applicantDetails]);

  return (
    !loading && (
      <div className="desktopApplicantProfilePage">
        <section className="desktopApplicantProfilePage_content">
          <DesktopApplicantProfileHeader
            desktopApplicantProfileDetails={desktopApplicantProfileDetails}
            isRecruiterAcc={isRecruiterAcc}
          />

          {!isRecruiterAcc && (
            <Link
              className="desktopApplicantProfilePage_content_browseJobs flex-align"
              to="/jobs"
            >
              Browse Jobs
            </Link>
          )}

          <div className="desktopApplicantProfilePage_content_right">
            {!isRecruiterAcc && (
              <DesktopApplicantProfileAppliedJobs
                applicantJobs={applicantJobs}
              />
            )}
          </div>

          <div className="desktopApplicantProfilePage_content_left init-card">
            {applicantDetails.project && (
              <DesktopApplicantProfileProject
                applicantProject={applicantDetails.project}
              />
            )}
            <div className="desktopApplicantProfilePage_content_resume init-card">
              {/* RESUME UPLOAD */}
              <h4 className="desktopApplicantProfilePage_content_project_header">
                Resume <GrDocumentPdf />
              </h4>
              <ResumeUpload onFileUpload={handleExtractedTextFromResumeFile} />
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default DesktopApplicantProfilePage;
