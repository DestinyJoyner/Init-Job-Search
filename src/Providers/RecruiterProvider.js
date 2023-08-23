import { useContext, createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "./Provider";

export const RecruiterContextData = createContext();
export function useRecruiterProvider() {
  return useContext(RecruiterContextData);
}

function RecruiterProvider({ children }) {
  const {
    API,
    axios,
    isRecruiterAcc,
    recruiterID,
    setLoading,
  } = useContextProvider();

  const { jobID } = useParams();

  const [recruiterDetails, setRecruiterDetails] = useState({});
  const [recruiterJobs, setRecruiterJobs] = useState([]);
  const [recruiterJobsWithUsers, setRecruiterJobsWithUsers] = useState([])
  const [editAccess, setEditAccess] = useState(false);
  const [showAccess, setShowAccess] = useState(isRecruiterAcc);
  const [unlockRec, setUnlockRec] = useState(false);

  useEffect(() => {
    setLoading(true)
    if (recruiterID) {
      axios
        .get(`${API}/recruiters/${recruiterID}`)
        .then(({ data }) => {
          setRecruiterDetails(data)
          setRecruiterJobs(data["jobs_posted"])
          setRecruiterJobsWithUsers(data["jobs_posted"]);
          if (jobID) {
            const applicantAccess = data["jobs_posted"].find(
              ({ id }) => id === +jobID
            );
            if (applicantAccess) {
              setShowAccess(true);
            } else {
              setShowAccess(false);
            }
          }
        })
        .catch((err) => console.log(err));
    }
    if (jobID && recruiterID) {
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => {
          if (data["recruiter_id"] === +recruiterID) {
            setEditAccess(true);
          } else {
            if (!editAccess && !showAccess && !isRecruiterAcc)
              navigate("/not-found");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [recruiterID, jobID]);

 

  return (
    <RecruiterContextData.Provider
      value={{
        recruiterDetails,
        recruiterJobs,
        setRecruiterJobs,
        recruiterJobsWithUsers,
        setRecruiterJobsWithUsers,
        editAccess,
        showAccess,
        setUnlockRec,
        unlockRec,
      }}
    >
      
      {children}
    </RecruiterContextData.Provider>
  );
}

export default RecruiterProvider;
