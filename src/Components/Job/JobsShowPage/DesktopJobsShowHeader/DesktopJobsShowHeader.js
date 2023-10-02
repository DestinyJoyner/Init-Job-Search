import DesktopSkillsComponent from "../../../DesktopSkillsComponent/DesktopSkillsComponent";
import convertCompanyForLogo from "../../../App/Data/CompanyLogos";
import { convertCities } from "../../../Functions/ConvertFunctions/ConversionFunctions";
import { jobCompany, jobLocation, jobRemote } from "../../../App/Data/Icons";
import "./DesktopJobsShowHeader.scss"

function DesktopJobsShowHeader({jobDetails, desktopJobSkills}) {
const {title, company, city, full_remote} = jobDetails
const companyLogo = company ?convertCompanyForLogo(company.toLowerCase()): ""
const companyCity = city ? convertCities(city.toLowerCase()) : ""

    return (
        jobDetails &&
        <div className='desktopJobShowHeader'>
            <div className="desktopJobShowHeader_container">
            <section className="desktopJobShowHeader_companyLogo">
            <img className="desktopJobShowHeader_companyLogo_icon"
            src={companyLogo} />
            <span className="desktopJobShowHeader_companyLogo_name">{company}</span>
            </section>
           
            <div className="desktopJobShowHeader_details">
                <h1 className="desktopJobShowHeader_details_title">{title}</h1>

                <section className="desktopJobShowHeader_details_location">
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
                </section>
              
              
                
                {/* <DesktopSkillsComponent desktopJobSkills={desktopJobSkills} /> */}
            </div>

            </div>
          
            
            
            

        </div>
    );
}

export default DesktopJobsShowHeader;