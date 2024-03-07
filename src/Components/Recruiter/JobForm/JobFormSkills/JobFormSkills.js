import SkillsComponent from "../../../Job/SkillsComponent";
import { asterisk } from "../../../App/Data/Icons";
import "./JobFormSkills.scss"

function JobFormSkills({handleSkills, skills}) {
    return (
        <section className="jobFormSkills">
        <label className="jobFormPage_form_border_label">
          Skills Req.{asterisk}
        </label>

        <span className="jobFormSkills_req">Min. 1, Max. 4 Skills req.</span>

        <SkillsComponent
          checkbox={true}
          checkedArr={skills}
          checkBoxHandle={(event) => handleSkills(event)}
        />
      </section>
    );
}

export default JobFormSkills;