import { Link } from "react-router-dom";
import { GiPill } from "react-icons/gi"
import "./JobsCard.css";
import "./Bonus.css"

function Bonus({ jobObj }) {
  const { title, company, skill_id, full_remote, city, id } = jobObj;

  return (
    <Link to={`/jobs/${id}`}>
      <div className="job-card bonus-job">
        <span className="job-card-title">{title}</span>
        <section className="job-card-company">
          <span>{company}</span>
          {full_remote && <span className="job-card-remote">REMOTE</span>}
        </section>
        <span className="job-card-city">Earth, 2199</span>
        <span className="job-card-divider"></span>
        <section className="bonus-card-skills">
         <GiPill color={"red"} size={"50px"} />
         <GiPill color={"blue"} size={"50px"} />
        </section>
      </div>
    </Link>
  );
}

export default Bonus;
