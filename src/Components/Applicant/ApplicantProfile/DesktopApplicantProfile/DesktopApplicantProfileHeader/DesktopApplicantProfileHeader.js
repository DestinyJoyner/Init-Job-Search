import { useUserProvider } from "../../../../../Providers/UserProvider";
import { Link } from "react-router-dom";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent";
import { MdOutlineMail, MdOutlineSchool } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";

import { FaRegStar, FaRegEdit } from "react-icons/fa";
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

      {!isRecruiterAcc ? (
        <Link
          className="desktopApplicantProfileHeader_editLink"
          to="/user/edit"
        >
          EDIT PROFILE
          {/* <FaRegEdit />  */}
        </Link>
      ) :
      <section className="desktopApplicantProfileHeader_details_email">
      <MdOutlineMail />
      <a href={`mailto:${applicantEmail}`}>{applicantEmail}</a>
    </section>
      }

      <section className="desktopApplicantProfileHeader_details">
        <h3 className="desktopApplicantProfileHeader_details_name">
          {first_name} {last_name}{" "}
        </h3>
        <span className="desktopApplicantProfileHeader_details_position">
          <FiBriefcase />
          {position}
        </span>
        <span className="desktopApplicantProfileHeader_details_education">
          <MdOutlineSchool />
          {education}
        </span>

        <div className="desktopApplicantProfileHeader_skills">
        {/* <b>Skills:</b> */}
        <DesktopSkillsComponent
          desktopJobSkills={desktopSkills}
          profileView={true}
        />
      </div>

        {/* <section className="desktopApplicantProfileHeader_details_email">
          <MdOutlineMail />
          <a href={`mailto:${applicantEmail}`}>{applicantEmail}</a>
        </section> */}
      </section>

      {/* <div className="desktopApplicantProfileHeader_skills">
        <b>Skills:</b>
        <DesktopSkillsComponent
          desktopJobSkills={desktopSkills}
          profileView={true}
        />
      </div> */}

      <section className="desktopApplicantProfileHeader_bio">
        <b>Bio:</b><br/> {bio}
        </section>
    </div>
  );
}

export default DesktopApplicantProfileHeader;
