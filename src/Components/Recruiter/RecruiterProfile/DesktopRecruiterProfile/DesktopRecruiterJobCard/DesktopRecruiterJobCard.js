import { Link } from "react-router-dom";
import convertCompanyForLogo from "../../../../App/Data/CompanyLogos";
import { convertCities } from "../../../../Functions/ConvertFunctions/ConversionFunctions";
import "./DesktopRecruiterJobCard.scss";

function DesktopRecruiterJobCard({ jobObj, setRecruiterSortJobs }) {
  const { city, company, title, id, users } = jobObj;

  const companyLogo = convertCompanyForLogo(company.toLowerCase());

  const companyCity = convertCities(city);

  return (
    <div className="desktopRecruiterJobCard init-card">
      <img
        className="desktopRecruiterJobCard_logo"
        src={companyLogo}
        alt={title}
      />
      <Link to={`/jobs/${id}`} className="desktopRecruiterJobCard_title">
        {title}
      </Link>

      <span className="desktopRecruiterJobCard_company">{company}</span>

      <span className="desktopRecruiterJobCard_city">{companyCity}</span>

      <section className="desktopRecruiterJobCard_buttons">
        <Link to={`/jobs/${id}/edit`}>Edit</Link>
        <Link
          to={`/jobs/${id}/applicants`}
          className="desktopRecruiterJobCard_applicants"
        >
          View Applicants: {users.length}
        </Link>
      </section>

      {/* will use for delte modal on desktop show page 
const [deleteJobModal, setDeleteJobModal] = useState(false)
*/}
      {/* <button onClick={() => setDeleteJobModal(true) } className="desktopRecruiterJobCard_buttons_delete">
                    DELETE
                </button> */}

      {/* {
                deleteJobModal && <DeleteJobModal jobId={id} setDeleteJobModal={setDeleteJobModal} trigger={setRecruiterSortJobs}/>
            } */}
    </div>
  );
}

export default DesktopRecruiterJobCard;
