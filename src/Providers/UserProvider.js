import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useNavigate } from "react-router-dom";

export const UserContextData = createContext();
export function useUserProvider() {
  return useContext(UserContextData);
}

function UserProvider({ children }) {
  const navigate = useNavigate();
  const { userID, API, axios, isSignedIn, setLoading } = useContextProvider();
  const [editForm, setEditForm] = useState({});
  const [userSkills, setUserSkills] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantDetails, setApplicantDetails] = useState({});
  const [applicantJobs, setApplicantJobs] = useState([]);
  const [applicantSkillIds, setApplicantSkillIds] = useState([]);
  const [applicantEditForm, setApplicantEditForm] = useState({})

  useEffect(() => {
    if (userID) {
      axios
        .get(`${API}/logins/${userID}`)
        .then(({ data }) => setApplicantEmail(data.email))
        .catch((error) => console.log(error));
    }
  }, [userID]);

  useEffect(() => {
    setLoading(true);
    if (userID !== null) {
      axios
        .get(`${API}/users/${userID}`)
        .then(({ data }) => {
          setApplicantDetails(data);
          setApplicantEditForm(data);
          setApplicantSkillIds(data.skills["skill_ids"]);
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });

      axios
        .get(`${API}/user-jobs/${userID}`)
        .then(({ data }) => {
          setApplicantJobs(data);
        })
        .catch((error) => console.log(error));
    }
  }, [isSignedIn, userID]);

  return (
    <UserContextData.Provider
      value={{
        userJobs,
        setUserJobs,
        userSkills,
        setUserSkills,
        applicantEmail,
        applicantDetails,
        setApplicantDetails,
        applicantJobs,
        applicantSkillIds,
        setApplicantSkillIds,
        applicantEditForm,
        setApplicantEditForm
      }}
    >
      {children}
    </UserContextData.Provider>
  );
}

export default UserProvider;
