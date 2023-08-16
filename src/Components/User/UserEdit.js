import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useUserProvider } from "../../Providers/UserProvider.js";
import { useContextProvider } from "../../Providers/Provider.js";
import { useNavProvider } from "../../Providers/NavProvider.js";
import SkillsComponent from "../Job/SkillsComponent.js";
import "./UserEdit.css";


export default function UserEdit(props) {
  const navigate = useNavigate();
  const {
    userProfile,
    editForm,
    setEditForm,
    userSkills,
    setUserSkills,
  } = useUserProvider();
const {
  API,
  axios,
  userID,
  isSignedIn,
  setIsSignedIn,
  setLoading,
  loading
} =  useContextProvider()
  const {setAppHeader} = useNavProvider()


  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.id]: event.target.value });
  };

  const skillsEdit = (event) => {
    let selectedSkills = [...userSkills];
    selectedSkills =
      !selectedSkills.includes(+event.target.id) && selectedSkills.length < 4
        ? [...selectedSkills, +event.target.id]
        : selectedSkills.filter((e) => e !== +event.target.id);
    setUserSkills(selectedSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let edited = false;
    const fields = Object.keys(editForm);

    for (let i = 0; i < fields.length; i++) {
      if (editForm[fields[i]] !== userProfile[fields[i]]) {
        edited = true;
        break;
      }
    }

    const currentSkills = editForm.skills["skill_ids"];

    if (
      currentSkills.length !== userSkills.length ||
      !currentSkills.every((e) => userSkills.includes(e))
    ) {
      edited = true;
    }

    edited
      ? axios
          .put(`${API}/users/${userID}`, {
            profile: editForm,
            // skills: [1, 2, 3, 4],
            skills: userSkills,
          })
          .then(() => {
            navigate("/user");
            // console.log(edited);
          })
          .catch((error) => console.log(error))
      : navigate("/user");
  };

  useEffect(() =>
    setAppHeader("Edit Profile")
 , [])

  useEffect(() => {
    if(editForm.id){
        setLoading(false)
    }
  },[editForm])

  return (
    <div>
      {!isSignedIn ? (
        <div className="user-login-prompt">
          <h2>Login to access your user profile!</h2>
          <button className="login-button" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </div>
      ) : (
        <form className="profile" onSubmit={handleSubmit}>
          <div className="top-profile">
            <div>
              <p>Name</p>
              <div>
                <input
                  id="first_name"
                  className="input-profile input-name"
                  type="text"
                  placeholder="first name"
                  value={editForm["first_name"] || ""}
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  id="last_name"
                  className="input-profile input-name"
                  type="text"
                  placeholder="last name"
                  value={editForm["last_name"] || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <p>Education</p>
                <input
                  id="education"
                  className="input-profile input-education"
                  type="text"
                  value={editForm.education || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div />
            </div>
            <div className="icon-edit">
              {/* <img id="icon-user" src={userIcon} alt="user icon" /> */}
              <div id="icon-user">{editForm["first_name"] && <p>{editForm["first_name"].charAt(0) + editForm["last_name"].charAt(0)}</p>}</div>
              <button
                onClick={() => navigate(`/user/`)}
                className="profile-button"
              >
                CANCEL
              </button>
            </div>
          </div>
          <p className="skills-edit">Skills & Technologies
          <br/><span>select up to 4</span></p>
          <div className="skill-icons-edit">
            <SkillsComponent
              key={uuidv4()}
              checkBoxHandle={skillsEdit}
              checkedArr={userSkills}
              checkbox={true}
            />
          </div>
          <br />
          <div>
            <p>Portfolio projects</p>
            <div className="ul-projects">
              <p className="bold">
                <input
                  id="project_one"
                  className="input-profile"
                  type="url"
                  placeholder="https://example.com"
                  value={editForm["project_one"] || ""}
                  onChange={handleChange}
                />
              </p>
              <p className="bold">
                <input
                  id="project_two"
                  className="input-profile"
                  type="url"
                  placeholder="https://example.com"
                  value={editForm["project_two"] || ""}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
          <div>
            <br />
            <p>About me</p>
            <textarea
              id="bio"
              maxLength={160}
              className="input-profile input-bio"
              placeholder="add a short bio"
              value={editForm.bio || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <input type="submit" value="SAVE" className="profile-button logout" />
        </form>
      )}
    </div>
  );
}
