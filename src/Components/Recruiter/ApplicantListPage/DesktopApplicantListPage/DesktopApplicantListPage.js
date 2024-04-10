import { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import { useJobProvider } from "../../../../Providers/JobProvider";
import convertCompanyForLogo from "../../../App/Data/CompanyLogos";

import "./DesktopApplicantListPage.scss"

function DesktopApplicantListPage(props) {
    const {  recruiterID,  setShowAccess, jobID, isSignedIn, } = useJobProvider();
    const { recruiterJobs, showAccess } = useRecruiterProvider()
    const { isRecruiterAcc, setLoading, loading, axios, API  } = useContextProvider()
    const taskSplit = process.env.REACT_APP_TASK_BREAK 
    const navigate = useNavigate()
    
    const [applicants, setApplicants] = useState([]);
    const [thisJob, setThisJob] = useState({});

    const companyLogo = thisJob.company ? convertCompanyForLogo(thisJob.company.toLowerCase()) : ""

    const jobTasks = thisJob.tasks ? thisJob.tasks.split(taskSplit) : []

    const jobSkills = thisJob.skills ? thisJob.skills.map(el => {
        const value = Object.values(el)
        return value[0]
    }) : []

    useEffect(() => {
        const filter = recruiterJobs.find(({ id }) => id === +jobID);
        if (filter && filter.users) {
          setApplicants(filter.users);
        }
      }, [jobID, recruiterJobs.length]);

      useEffect(() => {
        if( !isRecruiterAcc ){
          navigate("/not-found")
        }
        else {
            axios.get(`${API}/jobs/${jobID}`)
        .then(({data}) => setThisJob(data))
        .catch(err => console.log(err))
        }
        }, [])
    
        useEffect(() => {
            setLoading(false)
          
        }, [loading])

    return (
        <div className="desktopApplicantListPage">
            <section className="desktopApplicantListPage_jobDetails">
                <div className="desktopApplicantListPage_jobDetails_header">
                <img src={companyLogo} alt={thisJob.company} />
                <h3>{thisJob.title}</h3>
                <span>{thisJob.company}</span>
                <div className="desktopApplicantListPage_jobDetails_header_skills">
                    {
                       jobSkills.map(el => <span key={uuidv4()}className ="desktopApplicantListPage_jobDetails_header_skills_pill">{el}</span>) 
                    }
                </div>
                </div>
        <span className="desktopApplicantListPage_jobDetails_label">Details</span>
                <div className="desktopApplicantListPage_jobDetails_description">
                    {thisJob.details}
                </div>
                <span className="desktopApplicantListPage_jobDetails_label">Tasks</span>
                <div className="desktopApplicantListPage_jobDetails_tasks">
                   {
                        jobTasks.map(el => <li key={uuidv4()}>{el}</li>)
                   }
                </div>
                
            </section>
            
        </div>
    );
}

export default DesktopApplicantListPage;