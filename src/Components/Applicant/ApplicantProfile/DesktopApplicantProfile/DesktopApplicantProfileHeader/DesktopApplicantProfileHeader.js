import { useUserProvider } from "../../../../../Providers/UserProvider";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent";
import {applicantProfileHeaderLabel} from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions"
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import "./DesktopApplicantProfileHeader.scss"

function DesktopApplicantProfileHeader({desktopApplicantProfileDetails}) {
    const {applicantEmail} = useUserProvider()

    const { firstInitial, lastInitial, first_name, last_name, desktopSkills, position, education, bio} = desktopApplicantProfileDetails

    return (
        <div className="desktopApplicantProfileHeader">
            <section className="applicantProfile_header_icon">
            {firstInitial}
            {lastInitial}
            </section>

            <section className="desktopApplicantProfileHeader_name">
                <div className="desktopApplicantProfileHeader_name_email">
                <h3>{first_name} {last_name} </h3>
                <a href={`mailto:${applicantEmail}`}><MdOutlineMail /></a>
                </div>
                
                <span>{position}</span>

                <span><MdOutlineSchool/>{education}</span>
            </section>

            <section className="desktopApplicantProfileHeader_bio">
                {bio}
            </section>

            <DesktopSkillsComponent
              desktopJobSkills={desktopSkills} profileView={true} />

        </div>
    );
}


export default DesktopApplicantProfileHeader;