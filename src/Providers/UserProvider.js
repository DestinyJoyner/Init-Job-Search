import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";
import { useNavigate } from "react-router-dom";


export const UserContextData = createContext();
export function useUserProvider() {
  return useContext(UserContextData);
}

function UserProvider({ children }) {
  const navigate = useNavigate();
  const {
    userID,
    API,
    axios,
    isSignedIn,
    setLoading,
  } = useContextProvider();
  const [editForm, setEditForm] = useState({});
  const [userSkills, setUserSkills] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [email, setEmail] = useState("");
  const [applicantDetails, setApplicantDetails] = useState({})
  const [applicantJobs, setApplicantJobs] = useState([])
  const [applicantSkillIds, setApplicantSkillIds] = useState([])


  useEffect(() => {
    userID
      ? axios
          .get(`${API}/logins/${userID}`)
          .then(({ data }) => setEmail(data.email))
          .catch((error) => console.log(error))
      : null;
  }, [userID]);

  useEffect(() => {
    
    if (userID !== null) {
      axios
        .get(`${API}/users/${userID}`)
        .then(({ data }) => {
          setApplicantDetails(data)
          setEditForm(data);
          setApplicantSkillIds(data.skills["skill_ids"]);
          setLoading(false)
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
        editForm,
        setEditForm,
        userSkills,
        setUserSkills,
        email,
        applicantDetails,
         setApplicantDetails,
         applicantJobs,
         applicantSkillIds,
      }}
    >
      {children}
    </UserContextData.Provider>
  );
}

export default UserProvider;
