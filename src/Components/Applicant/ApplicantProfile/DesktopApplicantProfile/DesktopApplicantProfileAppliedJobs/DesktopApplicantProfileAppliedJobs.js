import convertCompanyForLogo from "../../../../App/Data/CompanyLogos";
import {convertDate} from "../../../../Functions/ConvertFunctions/ConversionFunctions"
import "./DesktopApplicantProfileAppliedJobs.scss"

function DesktopApplicantProfileAppliedJobs({applicantJobs}) {

    return (
        <div className="desktopApplicantProfileAppliedJobs">
            <h4 className="applicantProfile_sectionHeader_text">Application Tracker</h4>

            <section className="desktopApplicantProfileAppliedJobs_list">
                {
                    applicantJobs.map(job => <div className="desktopApplicantProfileAppliedJobs_list_card">
                        <img src = {convertCompanyForLogo(job.company.toLowerCase())} />

                        <span className="desktopApplicantProfileAppliedJobs_list_card_jobTitle">{job.title}</span>

                        <span className="desktopApplicantProfileAppliedJobs_list_card_companyDate">
                            <span className="desktopApplicantProfileAppliedJobs_list_card_companyDate_company">{job.company}</span>
                            <span className="desktopApplicantProfileAppliedJobs_list_card_companyDate_date">Date Applied:  {convertDate(job.date_applied)}</span>
                            </span>
                            <hr/>
                    </div>)
                }
            </section>
            
        </div>
    );
}

export default DesktopApplicantProfileAppliedJobs;