import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../../../../Providers/Provider";
import { useJobProvider } from "../../../../Providers/JobProvider";
import { useRecruiterProvider } from "../../../../Providers/RecruiterProvider";
import { convertDate } from "../../../Functions/ConvertFunctions/ConversionFunctions";
import "./JobsShowActionButtons.scss";

function JobsShowActionButtons({ applied, setApplied }) {
  const { API, axios, userID, isRecruiterAcc, isSignedIn } =
    useContextProvider();
  const { jobID } = useJobProvider();
  const { editAccess } = useRecruiterProvider();
  const navigate = useNavigate();

  function deleteJob() {
    axios
      .delete(`${API}/jobs/${jobID}`)
      .then(() => navigate("/recruiter"))
      .catch((err) => console.log(err));
  }

  function applyToJob() {
    const obj = {
      user_id: userID,
      job_id: jobID,
    };
    axios
      .post(`${API}/user-jobs`, obj)
      .then(({ data }) => setApplied(data.date_applied))
      .catch((err) => console.log(err));
  }

  return (
    <section className="jobShow_actionButtons">
      {isRecruiterAcc && editAccess ? (
        <>
          <button
            onClick={() => navigate(`/jobs/${jobID}/edit`)}
            className="jobShow_actionButtons_edit"
          >
            EDIT
          </button>
          <button
            onClick={() => deleteJob()}
            className="jobShow_actionButtons_edit"
          >
            DELETE
          </button>
        </>
      ) : isRecruiterAcc && !editAccess ? null : isSignedIn && applied ? (
        <div
          className="jobShow_actionButtons_applied"
          onClick={() => navigate("/user")}
        >
          APPLIED ON {convertDate(applied)}
        </div>
      ) : isSignedIn && !applied ? (
        <button
          onClick={() => applyToJob()}
          className="jobShow_actionButtons_apply"
        >
          APPLY NOW
        </button>
      ) : (
        <div className="jobShow_actionButtons_notSignedIn">
          <Link className="jobShow_actionButtons_apply" to="/login">
            LOG IN
          </Link>
          <Link className="jobShow_actionButtons_apply" to="/register">
            REGISTER NOW
          </Link>
        </div>
      )}
    </section>
  );
}

export default JobsShowActionButtons;
