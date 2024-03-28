import { useUserProvider } from "../../../../../Providers/UserProvider";
import DesktopSkillsComponent from "../../../../DesktopSkillsComponent/DesktopSkillsComponent";
import {ApplicantProfileHeaderLabel} from "../../../../Functions/ApplicantFunctions/ApplicantProfileFunctions"
import "./DesktopApplicantProfileHeader.scss"

function DesktopApplicantProfileHeader({desktopApplicantProfileDetails}) {
    const {applicantEmail} = useUserProvider()

    const { firstInitial, lastInitial, first_name, last_name, desktopSkills, position, education} = desktopApplicantProfileDetails

    return (
        <div className="desktopApplicantProfileHeader">
            <section className="applicantProfile_header_icon">
            {firstInitial}
            {lastInitial}
            </section>

            <section className="desktopApplicantProfileHeader_name">
                <h3>{first_name} {last_name} </h3>
                <span>{position}</span>
            </section>

            <section className="desktopApplicantProfileHeader_education">
                {ApplicantProfileHeaderLabel("Education", education)}
            </section>

            <DesktopSkillsComponent
              desktopJobSkills={desktopSkills} profileView={true} />

            <section className="desktopApplicantProfileHeader_email">
                {ApplicantProfileHeaderLabel("Contact", applicantEmail)}
            </section>

        </div>
    );
}


export default DesktopApplicantProfileHeader;