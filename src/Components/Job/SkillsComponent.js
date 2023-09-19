import { useState, useEffect } from "react";
import { useSkillProvider } from "../../Providers/SkillProvider.js";
import { v4 as uuidv4 } from "uuid";
import { skillClick } from "../Functions/SearchFunctions/SearchBarFunctions";
import { skillsColorObject, skillsObject } from "../App/Data/Skills.js";
import "./SkillsComponent.css";

function SkillsComponent({
  skillsArr,
  justList,
  checkbox,
  checkBoxHandle,
  checkedArr,
  stateVar,
  setFunction,
}) {
  const { allSkills } = useSkillProvider();
  const [skillsObj, setSkillsObj] = useState(skillsObject);
  const [skillsWithColor, setSkillsWithColor] = useState(skillsColorObject);
  const iconArr = allSkills.map(({ id }) => id);

  useEffect(() => {
    if (!checkbox && !justList) {
      checkedArr.forEach((el) => {
        const currentValArr = [...skillsObj[el]];
        currentValArr[1] = true;
        setSkillsObj({ ...skillsObj, [el]: currentValArr });
      });
    }
  }, [!checkbox && !justList && checkedArr.length]);

  if (justList) {
    return (
      <div className="skills-component">
        {skillsArr.map((skill) => skillsWithColor[skill])}
      </div>
    );
  }
  if (checkbox) {
    return (
      <div className="skills-checkboxes">
        {allSkills.map((obj) => (
          <label key={uuidv4()} htmlFor={obj.id}>
            <input
              type="checkbox"
              id={obj.id}
              checked={checkedArr.includes(obj.id)}
              onChange={checkBoxHandle}
            />
            <span>{obj["skill_name"]}</span>
          </label>
        ))}
      </div>
    );
  } else {
    return (
      <div className="skills-component">
        {iconArr.map((skill) => (
          <span
            key={uuidv4()}
            className={checkedArr.includes(skill) ? "skill-icon" : null}
            onClick={() =>
              skillClick(skill, skillsObj, setSkillsObj, stateVar, setFunction)
            }
          >
            {skillsObj[skill]}
          </span>
        ))}
      </div>
    );
  }
}

export default SkillsComponent;
