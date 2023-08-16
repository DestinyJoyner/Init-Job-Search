import SkillsComponent from "../../Job/SkillsComponent";

function ApplicantProfileHeader({applicantDetails, applicantSkills}) {
    const {id, first_name, last_name, bio, } = applicantDetails

    const firstInitial = id ? applicantDetails["first_name"].charAt(0): "";
    const lastInitial = id ?applicantDetails["last_name"].charAt(0): "";

    return (
         <section className="applicantProfile_header">
          <div className="applicantProfile_header_icon">
            {firstInitial}
            {lastInitial}
          </div>
          <div className="applicantProfile_header_details">
            <span className="applicantProfile_header_details_name">{first_name} {last_name}</span>
            <span className="applicantProfile_header_details_role">ROLE</span>
            <SkillsComponent justList={true}
            skillsArr={applicantSkills}/>
          </div>
          <div className="applicantProfile_sectionHeader applicantProfile_header_about">
            <span className="applicantProfile_sectionHeader_text">About Me:</span>
            <p className="applicantProfile_header_about_text">{bio} </p>
          </div>
        </section>
    );
}

export default ApplicantProfileHeader;