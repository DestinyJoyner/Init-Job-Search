import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider";
import RecruiterJob from "./RecruiterJob.js";
import Header from "../Job/Header.js";
import RecruiterIcon from "../../Assets/RECRUITER.png";
import PlusBlue from "../../Assets/plus-blue.png";
import PlusGold from "../../Assets/plus-gold.png";
import { jobCompany } from "../Job/Data/Icons";
import "./RecruiterProfile.css";

export default function RecruiterProfile() {
  const navigate = useNavigate();
  const { recruiterID, axios, API, theme, isRecruiterAcc, setAppHeader } =
    useRecruiterProvider();
  const [recruiterDetails, setRecruiterDetails] = useState({});

  useEffect(() => {
   setAppHeader("Profile")
    recruiterID
      ? axios
          .get(`${API}/recruiters/${recruiterID}`)
          .then(({ data }) => setRecruiterDetails(data))
          .catch((error) => console.log(error))
      : null;
  }, [recruiterID]);
  if (!isRecruiterAcc) {
    return (
      <div className="user-login-prompt">
        <h2>Login to access your recruiter profile!</h2>
        <button className="login-button" onClick={() => navigate("/login")}>
          LOGIN
        </button>
      </div>
    );
  }
  return (
    recruiterDetails.id && (
      <div className="recruiter-profile">
        {/* <Header header={"Recruiter Details"} /> */}
        <div className="recruiter-profile-top">
          <div>
            <p>
              {recruiterDetails.first_name + " " + recruiterDetails.last_name}
            </p>
            <p>
              {jobCompany}
              <span>{recruiterDetails.organization}</span>
            </p>
          </div>
          <img src={RecruiterIcon} alt="recruiter icon" />
        </div>
        <div className="jobs-posted-header">
          <h2>Jobs Posted</h2>
          <img
            src={theme === "light" ? PlusBlue : PlusGold}
            alt="plus icon"
            onClick={() => navigate("/jobs/new")}
          />
        </div>
        <div className="recruiter-jobs">
          {recruiterDetails.jobs_posted.length > 0 &&
            recruiterDetails.jobs_posted.map((e) => (
              <RecruiterJob object={e} key={uuidv4()} />
            ))}
        </div>
        <Link className="recruiter-profile-new-job" to="/jobs/new">
          POST A JOB
        </Link>
      </div>
    )
  );
}
