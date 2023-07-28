import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextProvider } from "./Provider.js";
import { convertSkills } from "../Components/Job/Functions/SkillsFunctions.js";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}

function JobProvider({ children }) {
  const {
    API,
    axios,
    userID,
    isRecruiterAcc,
    recruiterID,
    setLoading,
    loading
  } = useContextProvider();
  const { jobID } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [jobSkills, setJobSkills] = useState([]);
  const [applied, setApplied] = useState(false);

  const [recruiterJobs, setRecruiterJobs] = useState([]);

  // Search
  const [searchResult, setSearchResult] = useState([]);

  const [jobQuery, setJobQuery] = useState([]);
  const [queryStart, setQueryStart] = useState(0);

  const defaultJobSearchQuery = `${API}/jobs?start=${queryStart}&limit=4`;
  const [searchQueryRoute, setSearchQueryRoute] = useState("");

  const [editAccess, setEditAccess] = useState(false);
  const [showAccess, setShowAccess] = useState(isRecruiterAcc);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API}/jobs`)
      .then(({ data }) => {
        setJobs(data);
        setSearchResult(data);
      })
      .catch((error) => console.log(error));

    axios.get(defaultJobSearchQuery)
      .then(({ data }) => {
       
        if (data.length > 0) {
          setJobQuery(data);
          console.log(loading)
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (recruiterID) {
      axios
        .get(`${API}/recruiters/${recruiterID}`)
        .then(({ data }) => {
          setRecruiterJobs(data["jobs_posted"]);
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

  useEffect(() => {
    if (userID) {
      axios
        .get(`${API}/user-jobs/${userID}`)
        .then(({ data }) => {
          const match = data.find(({ id }) => id === +jobID);
          setApplied(match);
        })
        .catch((err) => console.log(err));
    }
    if(jobID){
    axios
      .get(`${API}/jobs/${jobID}`)
      .then(({ data }) => {
        setJobDetails(data);
        setJobSkills(convertSkills(data.skills));
        setLoading(false);
      })
      .catch((err) => console.log(err));
    }
  }, [jobID]);

  // useEffect for job pagination
  useEffect(() => {
    axios
      .get(`${API}/jobs?start=${queryStart}&limit=4${searchQueryRoute}`)
      .then(({ data }) => setJobQuery(data))
      .catch((err) => console.log(err));
  }, [queryStart, searchQueryRoute]);


  return (
    <JobContextData.Provider
      value={{
        jobID,
        jobs,
        setJobs,
        searchResult,
        setSearchResult,
        recruiterJobs,
        editAccess,
        jobQuery,
        setJobQuery,
        queryStart,
        setQueryStart,
        searchQueryRoute,
        setSearchQueryRoute,
        jobDetails,
        jobSkills,
        applied,
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
