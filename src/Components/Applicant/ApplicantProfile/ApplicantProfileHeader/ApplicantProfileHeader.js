import SkillsComponent from "../../../Job/SkillsComponent.js"
import DesktopSkillsComponent from "../../../DesktopSkillsComponent/DesktopSkillsComponent.js";
import {desktopSkillIconAndName} from "../../../../Components/App/Data/Skills.js"
import { useWindowSizeProvider } from "../../../../Providers/WindowSizeProvider.js";

function ApplicantProfileHeader({applicantDetails, applicantSkills}) {
  
  const {isDesktopView} = useWindowSizeProvider()
    const {id, first_name, last_name, bio, position, education, skills } = applicantDetails

    const firstInitial = id ? applicantDetails["first_name"].charAt(0): "";
    const lastInitial = id ?applicantDetails["last_name"].charAt(0): "";

    const desktopApplicantSkillsIds = skills ? skills["skill_ids"] :[]
    const desktopApplicantSkillsNames = skills ? skills["skill_names"] : []

    const desktopApplicantSkillsArr = desktopApplicantSkillsIds.map((el, i) => {
     return { [el] : desktopApplicantSkillsNames[i]}
    })

    const desktopApplicantSkills= desktopSkillIconAndName(desktopApplicantSkillsArr)

    return (
      id &&
         <section className="applicantProfile_header">
          <div className="applicantProfile_header_icon">
            {firstInitial}
            {lastInitial}
          </div>
          <div className="applicantProfile_header_details">
            <span className="applicantProfile_header_details_name">{first_name} {last_name}</span>
            <span className="applicantProfile_header_details_role">{position}</span>
            
            {/* need to seperate skills section from name and rolle */}
            {/* <SkillsComponent justList={true}
            skillsArr={applicantSkills}/> */}
          </div>
            {/* for desktop list out full name w/ without icons??? */}
            {
              !isDesktopView ?
              <SkillsComponent justList={true}
            skillsArr={applicantSkills}/> :
              <DesktopSkillsComponent
              desktopJobSkills={desktopApplicantSkills} profileView={true} />
            }
          

          <div className="applicantProfile_sectionHeader applicantProfile_header_about">
            <span className="applicantProfile_sectionHeader_text">Bio:</span>
            <p className="applicantProfile_header_about_text">{bio} </p>

            {/* { isDesktopView && <span className="applicantProfile_sectionHeader_text">Education:</span>}
            { isDesktopView && <p className="applicantProfile_header_about_text">{education} </p>} */}
          </div>

          {/* <div className="applicantProfile_sectionHeader applicantProfile_header_education">
            <span className="applicantProfile_sectionHeader_text">Education:</span>
            <p className="applicantProfile_header_about_text">{education} </p>
          </div> */}

        </section>
    );
}

export default ApplicantProfileHeader;