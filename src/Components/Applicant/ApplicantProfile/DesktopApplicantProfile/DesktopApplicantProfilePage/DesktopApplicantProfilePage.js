import { useUserProvider } from "../../../../../Providers/UserProvider.js";
import ApplicantProfileHeader from "../../ApplicantProfileHeader/ApplicantProfileHeader.js"
import "./DesktopApplicantProfilePage.scss"

function DesktopApplicantProfilePage() {
    const {applicantDetails, applicantSkillIds} = useUserProvider()
    return (
        <div className='desktopApplicantProfilePage'>
            <ApplicantProfileHeader applicantDetails={applicantDetails}
            applicantSkills={applicantSkillIds} />
        </div>
    );
}

export default DesktopApplicantProfilePage;