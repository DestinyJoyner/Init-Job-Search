import { Link } from "react-router-dom";
import convertCompanyForLogo from "../../Job/Data/CompanyLogos";
import { convertCities } from "../../Functions/ConvertFunctions/ConversionFunctions";
import "./RecruiterProfileTopJobs.scss"

function RecruiterProfileTopJobs({jobObj}) {
    const { title, company, city, users, id }= jobObj

    const companyLogo = convertCompanyForLogo(company.toLowerCase())

    return (
        <div className='recruiterTopJobs'>
            <Link to={`/jobs/${id}`} className="recruiterTopJobs_title">{title}</Link>
            <span className="recruiterTopJobs_company">{company}</span>
            <img 
            src={companyLogo}
            alt={company}
            className="recruiterTopJobs_logo"/>
            <Link 
            to={`/jobs/${id}/applicants`}className="recruiterTopJobs_applicants">({users.length})</Link>
            <span className="recruiterTopJobs_city">{convertCities(city)}</span>
        </div>
    );
}

export default RecruiterProfileTopJobs;