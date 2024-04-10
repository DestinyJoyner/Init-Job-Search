import { v4 as uuidv4 } from "uuid";
import convertCompanyForLogo from '../../App/Data/CompanyLogos';
import "./JobDetailsProfileLayout.scss"

function JobDetailsProfileLayout({thisJob}) {
    const taskSplit = process.env.REACT_APP_TASK_BREAK 

    const companyLogo = thisJob.company ? convertCompanyForLogo(thisJob.company.toLowerCase()) : ""

    const jobTasks = thisJob.tasks ? thisJob.tasks.split(taskSplit) : []

    const jobSkills = thisJob.skills ? thisJob.skills.map(el => {
        const value = Object.values(el)
        return value[0]
    }) : []
    return (
        <section className="jobDetailsProfileLayout">
        <div className="jobDetailsProfileLayout_header">
        <img src={companyLogo} alt={thisJob.company} />
        <h3>{thisJob.title}</h3>
        <span>{thisJob.company}</span>
        <div className="jobDetailsProfileLayout_header_skills">
            {
               jobSkills.map(el => <span key={uuidv4()}className ="jobDetailsProfileLayout_header_skills_pill">{el}</span>) 
            }
        </div>
        </div>
<span className="jobDetailsProfileLayout_label">Details</span>
        <div className="jobDetailsProfileLayout_description">
            {thisJob.details}
        </div>
        <span className="jobDetailsProfileLayout_label">Tasks</span>
        <div className="jobDetailsProfileLayout_tasks">
           {
                jobTasks.map(el => <li key={uuidv4()}>{el}</li>)
           }
        </div>
        
    </section>
    );
}

export default JobDetailsProfileLayout;