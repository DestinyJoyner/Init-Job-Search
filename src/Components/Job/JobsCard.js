import { Link } from "react-router-dom";
import { convertCities } from "./Functions/JobFunctions";
import convertCompanyForLogo from "./Data/CompanyLogos";
import SkillsComponent from "./SkillsComponent";
import { bulletPoint } from "./Data/Icons";
import "./JobsCard.css";

function JobsCard({ jobObj }) {
  const { title, company, skill_id, full_remote, city, id } = jobObj;
  const skills = typeof skill_id === "number" ? [skill_id] : skill_id;
  const combineSkills = skills.map((el) => el);
  const companyLogo = convertCompanyForLogo(company.toLowerCase())

  return (
    <Link to={`/jobs/${id}`} className="grid-center">
      <div className="job-card">
      <img 
        className="job-card-logo"
        src={companyLogo} alt = {company} />


        <section className="job-card-details">
        <span className="job-card-title">{title}</span>
        <span className="job-card-company">{company}</span>
        </section>

        <span className="job-card-location">
        {/* <span className="job-card-company">{company}</span> */}
       
          <span className="job-card-city">{convertCities(city)}</span>

          {full_remote && <span className="job-card-remote">Remote</span>}
          </span>
          
       
        
        
        

          {/* {full_remote && <span className="job-card-remote">REMOTE</span>} */}
         
     
       
        {/* <span className="job-card-location">
          <span className="job-card-company">{company}</span>
          {bulletPoint}
          <span className="job-card-city">{convertCities(city)}</span>
          </span>
          */}
         {/* </section>  */}

         {/* {full_remote && <span className="job-card-remote">REMOTE</span>} */}
        {/* <section className="job-card-location">
        <span className="job-card-city">{convertCities(city)}</span>
        {full_remote && <span className="job-card-remote">REMOTE</span>}
        </section>
        </section> */}
        <section className="job-card-skills">
          <SkillsComponent skillsArr={combineSkills} justList={true} />
        </section>
      </div>
    </Link>
  );
}

export default JobsCard;
