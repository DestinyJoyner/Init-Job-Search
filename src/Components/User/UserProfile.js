import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import { useContextProvider } from "../../Providers/Provider.js";
import { useNavProvider } from "../../Providers/NavProvider.js";
import SkillsComponent from "../Job/SkillsComponent.js";
import { convertDate } from "../Functions/ConvertFunctions/ConversionFunctions.js";
import { editPencil } from "../Job/Data/Icons.js";
import "./UserProfile.css";
// edit page, keep icon on top of form??

export default function UserProfile() {
  const { loading, setLoading, isRecruiterAcc, userID } = useContextProvider();
  const { userJobs, email, applicantDetails } = useUserProvider();
  const { setAppHeader } = useNavProvider();
  const navigate = useNavigate();

  const [viewLess, setViewLess] = useState(true);

  useEffect(() => {
    if (isRecruiterAcc && !userID) {
      navigate("/recruiter");
    } 
    if(isRecruiterAcc){
      setAppHeader("Applicant Profile")
    }
    else {
      setAppHeader("Profile");
    }
  }, []);
  useEffect(() => setLoading(false), [loading])


  const mapJobs = (jobs) => {
    const val = viewLess ? 2 : jobs.length;
    return jobs.map(({ id, title, company, date_applied }, i) =>
      i < val ? (
        <p key={id}>
          <br />
          <strong>
            <Link to={`/jobs/${id}`}>{title}</Link>
          </strong>
          <br />
          <em>{company}</em> - {convertDate(date_applied)}
        </p>
      ) : null
    );
  };

  return (
    <div className="full-user-profile">
      {userID === null && (
        <div className="user-login-prompt">
          <h2>Login to access your user profile!</h2>
          <button className="login-button" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </div>
      )}

      {applicantDetails.id && (
        <>
          <div className="profile">
            <div className="top-profile">
              <div>
                <p>Name</p>
                <p className="bold label-spacing">
                  {applicantDetails["first_name"] + " " + applicantDetails["last_name"]}
                </p>
                <br />
                <p>Education</p>
                <p className="bold label-spacing">{applicantDetails.education}</p>
                <br />
                <p>Skills & Technologies</p>
                <SkillsComponent
                  // sorting ascending for skill ids
                  skillsArr={applicantDetails.skills["skill_ids"].sort(
                    (a, b) => a - b
                  )}
                  justList={true}
                />
              </div>
              <div className="icon-edit">
                <div id="icon-user">
                  <p>
                    {applicantDetails["first_name"].charAt(0) +
                      applicantDetails["last_name"].charAt(0)}
                  </p>
                </div>
                {!isRecruiterAcc && (
                  <button
                    onClick={() => navigate(`/user/edit`)}
                    className="profile-button"
                  >
                    EDIT {editPencil}
                  </button>
                )}
              </div>
            </div>
            <br />
            <p>Portfolio Projects</p>
            <ul className="portfolio">
              <li className="bold label-spacing">
                {applicantDetails["project_one"] ? (
                  <a href={applicantDetails["project_one"]} target="_blank">
                    Project one
                  </a>
                ) : (
                  "add link"
                )}
              </li>
              <li className="bold">
                {applicantDetails["project_two"] ? (
                  <a href={applicantDetails["project_two"]} target="_blank">
                    Project two
                  </a>
                ) : (
                  "add link"
                )}
              </li>
            </ul>
            <br />
            <p>About me</p>
            <p className="bio-section bold label-spacing">
              {applicantDetails.bio || "add a short bio"}
            </p>
            <br />
            {isRecruiterAcc && (
              <div className="user-email">
                Contact me here
                <p>{email}</p>
              </div>
            )}
            {!isRecruiterAcc && (
              <div className="applications">
                <p className="bold">My Applications</p>
                <div>
                  {userJobs.length > 0 && mapJobs(userJobs)}
                  <br />
                  <button
                    id="activity-button"
                    onClick={() =>
                      userJobs.length === 0
                        ? navigate("/jobs")
                        : userJobs.length > 2
                        ? setViewLess(!viewLess)
                        : null
                    }
                  >
                    {userJobs.length < 1
                      ? "FIND JOBS"
                      : userJobs.length > 2 && !viewLess
                      ? "HIDE"
                      : userJobs.length > 2 && viewLess
                      ? "VIEW ALL"
                      : ""}
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
