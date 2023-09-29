import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../../../Providers/Provider";
import { applyToJob, deleteJob } from "../../../Functions/JobFunctions/JobShowPageFunctions";
import { convertDate } from "../../../Functions/ConvertFunctions/ConversionFunctions";

function JobsShowApplyButton({applied, setApplied}) {
    const { API, axios, userID, isRecruiterAcc, isSignedIn } =
    useContextProvider();
    const navigate = useNavigate()
    return (
     isSignedIn && applied ?
        <div
          className="jobShowApplyButton"
          onClick={() => navigate("/user")}
        >
          APPLIED ON {convertDate(applied)}
        </div>
       : isSignedIn && !applied ? 
        <button
          onClick={() => applyToJob(userID, jobID, setApplied)}
          className="jobShow_actionButtons_apply"
        >
          APPLY NOW
        </button> :
        null
    );
}

export default JobsShowApplyButton;