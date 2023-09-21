import { useContext, createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextProvider } from "./Provider.js";
import { useWindowSizeProvider } from "./WindowSizeProvider.js";
import { convertSkills } from "../Components/Functions/ConvertFunctions/ConversionFunctions.js";

export const JobContextData = createContext();
export function useJobProvider() {
  return useContext(JobContextData);
}

function JobProvider({ children }) {
  const { API, axios, setLoading } = useContextProvider();
  const { isDesktopView } = useWindowSizeProvider()
  const { jobID } = useParams();
  const [jobs, setJobs] = useState([])
  const [jobDetails, setJobDetails] = useState({});
  const [jobSkills, setJobSkills] = useState([]);
  // Search
  const [jobQuery, setJobQuery] = useState([]);
  const [queryStart, setQueryStart] = useState(0);
  const [queryLimit, setQueryLimit] = useState(isDesktopView ? 6 : 4)

  const defaultJobSearchQuery = `${API}/jobs?start=${queryStart}&limit=${queryLimit}`;
  const [searchQueryRoute, setSearchQueryRoute] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/jobs`)
      .then(({ data }) => {
        setJobs(data);
      })
      .catch((error) => console.log(error));

    axios
      .get(defaultJobSearchQuery)
      .then(({ data }) => {
        if (data.length > 0) {
          setJobQuery(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (jobID) {
      axios
        .get(`${API}/jobs/${jobID}`)
        .then(({ data }) => {
          setJobDetails(data);
          setJobSkills(convertSkills(data.skills));
        })
        .catch((err) => console.log(err));
    }
  }, [jobID]);

  // useEffect for job pagination
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/jobs?start=${queryStart}&limit=${queryLimit}${searchQueryRoute}`)
      .then(({ data }) => setJobQuery(data))
      .catch((err) => console.log(err));

    // console.log(`${API}/jobs?start=${queryStart}&limit=4${searchQueryRoute}`, "api search query")
  }, [queryStart, searchQueryRoute, queryLimit]);

  useEffect(() => {
    const limit = isDesktopView ? 6 : 4
    setQueryLimit(limit)
  },[isDesktopView])

  return (
    <JobContextData.Provider
      value={{
        jobID,
        jobs,
        setJobs,
        jobQuery,
        setJobQuery,
        queryStart,
        setQueryStart,
        searchQueryRoute,
        setSearchQueryRoute,
        jobDetails,
        jobSkills,
        queryLimit
      }}
    >
      {children}
    </JobContextData.Provider>
  );
}

export default JobProvider;
