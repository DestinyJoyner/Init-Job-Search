import SkillsComponent from "../../../Job/SkillsComponent.js"
import { useWindowSizeProvider } from "../../../../Providers/WindowSizeProvider.js";

function ApplicantProfileHeader({applicantDetails, applicantSkills}) {
  // console.log(applicantDetails)
  const {isDesktopView} = useWindowSizeProvider()
    const {id, first_name, last_name, bio, position, education } = applicantDetails

    const firstInitial = id ? applicantDetails["first_name"].charAt(0): "";
    const lastInitial = id ?applicantDetails["last_name"].charAt(0): "";

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
          <SkillsComponent justList={true}
            skillsArr={applicantSkills}/>

          <div className="applicantProfile_sectionHeader applicantProfile_header_about">
            <span className="applicantProfile_sectionHeader_text">Bio:</span>
            <p className="applicantProfile_header_about_text">{bio} </p>

           {/*  { isDesktopView && <span className="applicantProfile_sectionHeader_text">Education:</span>}
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