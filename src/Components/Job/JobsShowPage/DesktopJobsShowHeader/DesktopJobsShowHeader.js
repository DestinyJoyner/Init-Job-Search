import convertCompanyForLogo from "../../../App/Data/CompanyLogos";
import { convertCities } from "../../../Functions/ConvertFunctions/ConversionFunctions";
import { jobCompany, jobLocation, jobRemote } from "../../../App/Data/Icons";
import "./DesktopJobsShowHeader.scss"

function DesktopJobsShowHeader({jobDetails}) {
const {title, company, city, full_remote} = jobDetails
const companyLogo = company ?convertCompanyForLogo(company.toLowerCase()): ""
const companyCity = city ? convertCities(city.toLowerCase()) : ""

    return (
        jobDetails &&
        <div className='desktopJobShowHeader'>
            <img className="desktopJobShowHeader_companyLogo"
            src={companyLogo} />
            <span className="desktopJobShowHeader_companyLogo_name">{company}</span>
            <div className="desktopJobShowHeader_details">
                <h1 className="desktopJobShowHeader_details_title">{title}</h1>
                {/* <span className="desktopJobShowHeader_details_company">
                    {jobCompany}
                    <span className="desktopJobShowHeader_details_text">{company}</span></span> */}
                <span className="desktopJobShowHeader_details_city">
                    {jobLocation}
                    <span className="desktopJobShowHeader_details_text">{companyCity}</span>
                    </span>
                {
                    full_remote && 
                    <span className="desktopJobShowHeader_details_remote"> 
                    {jobRemote}
                     <span className="desktopJobShowHeader_details_text">Remote</span>
                    
              </span>
                }
            </div>
            

        </div>
    );
}

export default DesktopJobsShowHeader;