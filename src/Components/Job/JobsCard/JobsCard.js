import { Link } from "react-router-dom";
import { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider";
import SkillsComponent from "../SkillsComponent";
import { convertCities } from "../../Functions/ConvertFunctions/ConversionFunctions";
import convertCompanyForLogo from "../../App/Data/CompanyLogos";
import "./JobsCard.scss";

function JobsCard({ jobObj }) {
  const { isDesktopView } = useWindowSizeProvider()
  const { title, company, skill_id, full_remote, city, details, id } = jobObj;

  const skills = typeof skill_id === "number" ? [skill_id] : skill_id;

  const combineSkills = skills.map((el) => el);

  const companyLogo = convertCompanyForLogo(company.toLowerCase());

  const previewDetails = `${details.slice(0, 62)} ...`

  return (
    <Link to={`/jobs/${id}`} className="grid-center">
      <div className="jobCard">
        <img className="jobCard_logo" src={companyLogo} alt={company} />

        <section className="jobCard_details">
          {
            isDesktopView &&
            <span className="jobCard_details_preview">{previewDetails}</span>
          }
          <span className="jobCard_details_title">{title}</span>
          <span className="jobCard_details_company">{company}</span>
        </section>

        <span className="jobCard_location">
          <span className="jobCard_location_city">{convertCities(city)}</span>

          {full_remote && <span className="jobCard_location_remote">REMOTE</span>}
        </span>

        <section className="jobCard_skills">
          <SkillsComponent skillsArr={combineSkills} justList={true} />
        </section>
      </div>
    </Link>
  );
}

export default JobsCard;
