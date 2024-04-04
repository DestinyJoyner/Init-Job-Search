import SkillProvider from "../../Providers/SkillProvider";
import SkillsComponent from "../Job/SkillsComponent";
import { handleSkillsCheckbox } from "../Functions/FormFunctions/RegisterFormFunctions";
import { asterisk } from "../App/Data/Icons";
import "./SkillsCheckboxes.scss"
import { useSkillProvider } from "../../Providers/SkillProvider";

function SkillsCheckboxes({skillsIdArr, setSkillIdArr, formStateVar, formSetFunction}) {

    return (
        <section className="skillsCheckboxes">
        <span className="skillsCheckboxes_label projectFormInputs_header">
          <span>My Skills & Technologies </span>
          <span className="skillsCheckboxes_helpText">
          {asterisk}Select up to 4
        </span>
        </span>
        
        <SkillProvider>
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
        </SkillProvider>
      </section>
    );
}

export default SkillsCheckboxes;