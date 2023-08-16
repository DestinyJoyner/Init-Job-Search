import SkillsComponent from "../Job/SkillsComponent";
import { handleSkillsCheckbox } from "../Functions/FormFunctions/RegisterFormFunctions";
import { asterisk } from "../Job/Data/Icons";
import "./SkillsCheckboxes.scss"

function SkillsCheckboxes({skillsIdArr, setSkillIdArr, formStateVar, formSetFunction}) {
    return (
        <section className="skillsCheckboxes">
        <span className="skillsCheckboxes_label">
          My Skills & Technologies
        </span>
        <span className="skillsCheckboxes_helpText">
          {asterisk}Select up to 4
        </span>
        <SkillsComponent
          checkbox={true}
          checkedArr={skillsIdArr}
          checkBoxHandle={(event) =>
            handleSkillsCheckbox(
              event,
              skillsIdArr,
              setSkillIdArr,
              formStateVar,
              formSetFunction
            )
          }
        />
      </section>
    );
}

export default SkillsCheckboxes;