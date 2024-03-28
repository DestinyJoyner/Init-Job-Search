import { desktopSkillIconAndName } from "../../App/Data/Skills";

function applicantProfileConversion (detailsObj) {
    const {id, skills, bio, first_name, last_name, position, education, email } = detailsObj
    const firstInitial = id ? detailsObj["first_name"].charAt(0): "";
    const lastInitial = id ? detailsObj["last_name"].charAt(0): "";

    const desktopApplicantSkillsIds = skills ? skills["skill_ids"] :[]
    const desktopApplicantSkillsNames = skills ? skills["skill_names"] : []

    const desktopApplicantSkillsArr = desktopApplicantSkillsIds.map((el, i) => {
     return { [el] : desktopApplicantSkillsNames[i]}
    })

    const desktopApplicantSkills= desktopSkillIconAndName(desktopApplicantSkillsArr)

    return {
        bio, 
        firstInitial,
        lastInitial,
        id,
        first_name,
        last_name,
        education,
        position,
        email,
        desktopSkills : desktopApplicantSkills,
        profileSkills: skills
    }
}

function applicantProfileHeaderLabel (label, content) {
    return (
        <>
        <span className="applicantProfile_sectionHeader_text">{label}:</span>
            <p className="applicantProfile_header_about_text">{content} </p>
            </>
    )

}


export {
    applicantProfileConversion,
    applicantProfileHeaderLabel
}