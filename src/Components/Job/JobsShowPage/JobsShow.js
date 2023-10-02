import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
import { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider";
import { useContextProvider } from "../../../Providers/Provider";
import { useNavProvider } from "../../../Providers/NavProvider";
import { useJobProvider } from "../../../Providers/JobProvider";
// import { useRecruiterProvider } from "../../../Providers/RecruiterProvider";
import SkillsComponent from "../SkillsComponent";
import DesktopSkillsComponent from "../../DesktopSkillsComponent/DesktopSkillsComponent";
import JobsShowHeader from "./JobsShowHeader/JobsShowHeader";
import JobsShowDetails from "./JobsShowDetails/JobsShowDetails";
import JobsShowActionButtons from "./JobsShowActionButtons/JobsShowActionButtons";
import DesktopJobsShowDetails from "./DesktopJobsShowDetails/DesktopJobsShowDetails";
import DesktopJobsShowHeader from "./DesktopJobsShowHeader/DesktopJobsShowHeader";
import "./JobsShow.scss";
import "./DesktopJobShow.scss"

function JobsShow() {
  const {isDesktopView} = useWindowSizeProvider()
  const { API, axios, userID, isRecruiterAcc, isSignedIn, setLoading, loading } =
    useContextProvider();
  const { setAppHeader } = useNavProvider();
  const { jobID, jobDetails, jobSkills, desktopJobSkills } =
    useJobProvider();
  // const { editAccess } = useRecruiterProvider()
  // const navigate = useNavigate();
  const [applied, setApplied] = useState(false);
  const [jobDetailsToggle, setJobDetailsToggle] = useState("description");

  useEffect(() => {
    setAppHeader("Job Details")
    if(userID && jobID){
      axios.get(`${API}/user-jobs/${userID}/${jobID}`)
      .then(({data}) => 
      data.date_applied ? 
      setApplied(data.date_applied) : 
      null)
      .catch(err => console.log(err))
    }
  }, []);

  useEffect(() => setLoading(false), [jobDetails, isDesktopView, loading])

  return (
    !loading && (
      <div className={!isDesktopView ?"jobShow" : "desktopJobShow"}>
        {
          !isDesktopView ?
          <JobsShowHeader jobDetails={jobDetails} /> :
          <DesktopJobsShowHeader jobDetails={jobDetails} 
          />
        }
       

        {
          !isDesktopView &&
          <SkillsComponent skillsArr={jobSkills} justList={true} /> 
        }

        {
          !isDesktopView ? 
          <JobsShowDetails
          jobDetails={jobDetails}
          jobDetailsToggle={jobDetailsToggle}
          setJobDetailsToggle={setJobDetailsToggle} /> :
          <DesktopJobsShowDetails jobDetails={jobDetails}
          applied={applied}
        setApplied={setApplied}
        desktopJobSkills={desktopJobSkills}/>
        }
        
        { !isDesktopView &&
        <>
        <hr className="jobShow_divider" />
        <JobsShowActionButtons 
        applied={applied}
        setApplied={setApplied} />
        </>}
  
      </div>
    )
  );
}

export default JobsShow;
