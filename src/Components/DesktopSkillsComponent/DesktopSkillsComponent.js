import { v4 as uuidv4 } from "uuid";
import "./DesktopSkillsComponent.scss"
function DesktopSkillsComponent({desktopJobSkills}) {

    return (
        <div className="desktopSkillsComponent">
            <span className="desktopSkillsComponent_header">Preferred Skills</span>
            <section className="desktopSkillsComponent_skills">
            {
                desktopJobSkills.map(({name, icon}) => 
                <div
                key={uuidv4()} 
                className="desktopSkillsComponent_skills_skill">
                    {icon}
                    <span className="desktopSkillsComponent_skills_skill_name">{name}</span>
                    
                </div>
                )
            }
            </section>
           
        </div>
    );
}

export default DesktopSkillsComponent;