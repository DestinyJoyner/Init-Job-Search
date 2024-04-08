import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteJobModal from "../../../../App/DeleteJobModal/DeleteJobModal";
import convertCompanyForLogo from "../../../../App/Data/CompanyLogos";
import "./DesktopRecruiterJobCard.scss"

function DesktopRecruiterJobCard({jobObj, setRecruiterSortJobs}) {
    const [deleteJobModal, setDeleteJobModal] = useState(false)
    const {city, company, title, id, users} = jobObj

    const companyLogo = convertCompanyForLogo(company.toLowerCase())


    return (
        <div className="desktopRecruiterJobCard init-card">
            <img className="desktopRecruiterJobCard_logo" src={companyLogo} alt={title} />
            <Link to={`/jobs/${id}`}className="desktopRecruiterJobCard_title">
                {title}
            </Link>

            <span className="desktopRecruiterJobCard_company">
                {company}
            </span>

            <Link to={`/jobs/${id}/applicants`}className="desktopRecruiterJobCard_applicants">View Applicants: {users.length}</Link>

            <section className="desktopRecruiterJobCard_buttons">
                <Link to ={`/jobs/${id}/edit`}>EDIT</Link>
                <button onClick={() => setDeleteJobModal(true) } className="desktopRecruiterJobCard_buttons_delete">
                    DELETE
                </button>
            </section>

            {
                deleteJobModal && <DeleteJobModal jobId={id} setDeleteJobModal={setDeleteJobModal} trigger={setRecruiterSortJobs}/>
            }
        </div>
    );
}

export default DesktopRecruiterJobCard;