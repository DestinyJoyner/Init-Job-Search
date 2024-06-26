import { useUserProvider } from "../../../../../Providers/UserProvider";
import { Link } from "react-router-dom";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent";
import { MdOutlineMail, MdOutlineSchool } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import "./DesktopApplicantProfileHeader.scss";

function DesktopApplicantProfileHeader({
  desktopApplicantProfileDetails,
  isRecruiterAcc,
}) {
  const { applicantEmail } = useUserProvider();

  const {
    firstInitial,
    lastInitial,
    first_name,
    last_name,
    position,
    education,
    bio,
    desktopSkills,
  } = desktopApplicantProfileDetails;

  return (
    <div className="desktopApplicantProfileHeader">
      <section className="applicantProfile_header_icon">
        {firstInitial}
        {lastInitial}
      </section>

      <section className="desktopApplicantProfileHeader_details">
        <h3 className="desktopApplicantProfileHeader_details_name">
          {first_name} {last_name}{" "}
          {!isRecruiterAcc ? (
            <Link
              className="desktopApplicantProfileHeader_editLink"
              to="/user/edit"
            >
              <FaRegEdit />
            </Link>
          ) : (
            <section className="desktopApplicantProfileHeader_details_email">
              <a href={`mailto:${applicantEmail}`}>
                <MdOutlineMail />
              </a>
            </section>
          )}
        </h3>
        <span className="desktopApplicantProfileHeader_details_position">
          <FiBriefcase />
          {position}
        </span>
        <span className="desktopApplicantProfileHeader_details_education">
          <MdOutlineSchool />
          {education}
        </span>
      </section>

      <section className="desktopApplicantProfileHeader_bio">{bio}</section>

      <div className="desktopApplicantProfileHeader_skills">
        <DesktopSkillsComponent
          desktopJobSkills={desktopSkills}
          profileView={true}
        />
      </div>
    </div>
  );
}

export default DesktopApplicantProfileHeader;
