import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextProvider } from "./Provider.js";
import { convertSkills } from "../Components/Functions/ConvertFunctions/ConversionFunctions.js";

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
  // Search
  const [searchResult, setSearchResult] = useState([]);

  const [jobQuery, setJobQuery] = useState([]);
  const [queryStart, setQueryStart] = useState(0);

  const defaultJobSearchQuery = `${API}/jobs?start=${queryStart}&limit=4`;
  const [searchQueryRoute, setSearchQueryRoute] = useState("");

  useEffect(() => {
    setLoading(true)
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
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/jobs/${jobID}`)
      .then(({ data }) => {
        setJobDetails(data);
        setJobSkills(convertSkills(data.skills));
      })
      .catch((err) => console.log(err));
    
  }, [jobID]);

  // useEffect for job pagination
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${API}/jobs?start=${queryStart}&limit=4${searchQueryRoute}`)
      .then(({ data }) => setJobQuery(data))
      .catch((err) => console.log(err));

      console.log(`${API}/jobs?start=${queryStart}&limit=4${searchQueryRoute}`, "api search query")
  }, [queryStart, searchQueryRoute]);


  return (
    <JobContextData.Provider
      value={{
        jobID,
        jobs,
        setJobs,
        searchResult,
        setSearchResult,
        jobQuery,
        setJobQuery,
        queryStart,
        setQueryStart,
        searchQueryRoute,
        setSearchQueryRoute,
        jobDetails,
        jobSkills
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
