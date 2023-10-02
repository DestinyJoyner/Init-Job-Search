import { convertCities } from "../../../Functions/ConvertFunctions/ConversionFunctions";
import convertCompanyForLogo from "../../../App/Data/CompanyLogos";
import "./JobsShowHeader.scss"

function JobsShowHeader({jobDetails}) {
    return (
        <section className="jobShow_header grid-center">
          <img
            src={
              jobDetails.company &&
              convertCompanyForLogo(jobDetails.company.toLowerCase())
            }
            alt="company-logo"
            className="jobShow_header_logo"
          />
          <span className="jobShow_header_company">{jobDetails.company}</span>

          <h2 className="jobShow_header_title">{jobDetails.title}</h2>
          <section className="jobShow_header_location">
            <span className="jobShow_header_location_city">
              {jobDetails.city && convertCities(jobDetails.city)}
            </span>

            {jobDetails.full_remote && (
              <span className="jobShow_header_location_remote">
                <span>Remote</span>
              </span>
            )}
          </section>
          <hr />
        </section>
    );
}

export default JobsShowHeader;