import { useUserProvider } from "../../../../../Providers/UserProvider";
import { MdOutlineMail, MdOutlineSchool } from "react-icons/md";
import "./DesktopApplicantProfileHeader.scss";

function DesktopApplicantProfileHeader({ desktopApplicantProfileDetails }) {
  const { applicantEmail } = useUserProvider();

  const {
    firstInitial,
    lastInitial,
    first_name,
    last_name,
    desktopSkills,
    position,
    education,
    bio,
  } = desktopApplicantProfileDetails;

  return (
    <div className="desktopApplicantProfileHeader">
      <section className="applicantProfile_header_icon">
        {firstInitial}
        {lastInitial}
      </section>

      <section className="desktopApplicantProfileHeader_name">
        <h3>
          {first_name} {last_name}{" "}
        </h3>
        <span>{position}</span>
      </section>

      <section className="desktopApplicantProfileHeader_details">
        <span>
          <MdOutlineSchool />
          {education}
        </span>

        <section className="desktopApplicantProfileHeader_details_email">
          <MdOutlineMail />
          <a href={`mailto:${applicantEmail}`}>{applicantEmail}</a>
        </section>
      </section>

      <section className="desktopApplicantProfileHeader_bio">{bio}</section>
    </div>
  );
}

export default DesktopApplicantProfileHeader;
