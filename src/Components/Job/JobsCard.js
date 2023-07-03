import { Link } from "react-router-dom";
import { convertCities } from "./Functions/JobFunctions";
import SkillsComponent from "./SkillsComponent";
import "./JobsCard.css";

function JobsCard({ jobObj }) {
  const { title, company, skill_id, full_remote, city, job_id } = jobObj;
  const skills = typeof skill_id === "number" ? [skill_id] : skill_id;
  const combineSkills = skills.map((el) => el);

  return (
    <Link to={`/jobs/${job_id}`} className="grid-center">
      <div className="job-card">
        <section className="job-card-details">
        <span className="job-card-title">{title}</span>
          <span className="job-card-company">{company}</span>
          {/* {full_remote && <span className="job-card-remote">REMOTE</span>} */}
          <section className="job-card-location">
        <span className="job-card-city">{convertCities(city)}</span>
        {full_remote && <span className="job-card-remote">REMOTE</span>}
        </section>
        </section>
        <section className="job-card-skills">
          <SkillsComponent skillsArr={combineSkills} justList={true} />
        </section>
      </div>
    </Link>
  );
}

export default JobsCard;
