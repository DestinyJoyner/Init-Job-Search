import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import convertCompanyForLogo from "../../../../App/Data/CompanyLogos";
import {convertDate} from "../../../../Functions/ConvertFunctions/ConversionFunctions"
import { LiaClipboardListSolid } from "react-icons/lia";
import "./DesktopApplicantProfileAppliedJobs.scss"

function DesktopApplicantProfileAppliedJobs({applicantJobs}) {
console.log(applicantJobs)
    return (
        <div className="desktopApplicantProfileAppliedJobs init-card">
            <h4 className="desktopApplicantProfileAppliedJobs_header">
            Application Tracker </h4>

            <section className="desktopApplicantProfileAppliedJobs_list">
                {
                    applicantJobs.map(job => <div className="desktopApplicantProfileAppliedJobs_list_card" key={uuidv4()}>
                        <img src = {convertCompanyForLogo(job.company.toLowerCase())} />

                        <Link to={`/jobs/${job.id}`}className="desktopApplicantProfileAppliedJobs_list_card_jobTitle">{job.title}</Link>

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