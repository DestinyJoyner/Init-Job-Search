import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserProvider } from "../../Providers/UserProvider.js";
import { useContextProvider } from "../../Providers/Provider.js";
import Header from "../Job/Header.js";
import SkillsComponent from "../Job/SkillsComponent.js";
// import userIcon from "../../Assets/USER.png";
import pencilBlack from "../../Assets/pencil-black.png";
import pencilGrey from "../../Assets/pencil-grey.png";
import "./UserProfile.css";

export default function UserProfile() {
  const navigate = useNavigate();
  const {
    userProfile,
    userJobs,
    isSignedIn,
    setIsSignedIn,
    theme,
    isRecruiterAcc,
    email,
    userID,
  } = useUserProvider();
  const {setAppHeader} = useContextProvider()
  const [viewLess, setViewLess] = useState(true);

  useEffect(() => {
    if (isRecruiterAcc && !userID) {
      navigate("/recruiter");
    }
    else {
      setAppHeader("Profile")
    }
  }, []);

  const dateFormat = (date) => {
    const newDate = date.split("T")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0].substring(2)}`;
  };

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
          <em>{company}</em> - {dateFormat(date_applied)}
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

      {userProfile.id && (
        <>
          {isRecruiterAcc && <Header header={"Applicant Profile"} />}
          <div className="profile">
            <div className="top-profile">
              <div>
                <p>Name</p>
                <p className="bold label-spacing">
                  {userProfile["first_name"] + " " + userProfile["last_name"]}
                </p>
                <br />
                <p>Education</p>
                <p className="bold label-spacing">{userProfile.education}</p>
                <br />
                <p>Skills & Technologies</p>
                <SkillsComponent
                  // sorting ascending for skill ids
                  skillsArr={userProfile.skills["skill_ids"].sort(
                    (a, b) => a - b
                  )}
                  justList={true}
                />
              </div>
              <div className="icon-edit">
                {/* <img id="icon-user" src={userIcon} alt="user icon" /> */}
                <div id="icon-user"><p>{userProfile["first_name"].charAt(0) + userProfile["last_name"].charAt(0)}</p></div>
                {!isRecruiterAcc && (
                  <button
                    onClick={() => navigate(`/user/edit`)}
                    className="profile-button"
                  >
                    EDIT{" "}
                    <img
                      src={theme === "light" ? pencilBlack : pencilGrey}
                      alt="pencil"
                    />
                  </button>
                )}
              </div>
            </div>
            <br />
            <p>Portfolio Projects</p>
            <ul className="portfolio">
              <li className="bold label-spacing">
                {userProfile["project_one"] ? (
                  <a href={userProfile["project_one"]} target="_blank">
                    Project one
                  </a>
                ) : (
                  "add link"
                )}
              </li>
              <li className="bold">
                {userProfile["project_two"] ? (
                  <a href={userProfile["project_two"]} target="_blank">
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
              {userProfile.bio || "add a short bio"}
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
