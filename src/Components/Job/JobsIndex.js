import { useEffect, useState } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useNavProvider } from "../../Providers/NavProvider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from "uuid";
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import NoSearchResults from "../App/NoSearchResults/NoSearchResults.js";
import { handlePagination } from "../Functions/SearchFunctions/JobsIndexFunctions.js";
import "./JobsIndex.scss";

function JobsIndex() {
  const { setAppHeader } = useNavProvider();
  const { setLoading } = useContextProvider()
  const { jobs, queryStart, setQueryStart, jobQuery } = useJobProvider();

  const [hideNextButton, setHideNextButton] = useState(false);
  const [hidePrevButton, setHidePrevButton] = useState(true);

  useEffect(() => {
    setAppHeader("inIT Jobs")
    if(jobQuery.length !== 4){
        setHideNextButton(true)
    }
    else {
      setHideNextButton(false)
    }
}, [queryStart, jobQuery.length]);

useEffect(() => {
  setLoading(false)
},[jobQuery])

  return (
    <div className="jobsIndex">
      <SearchBar />
      <section className="jobsIndex_buttons">
      <button
        className={hidePrevButton ? "hide" : " jobsIndex_buttons_prev show"}
        value={"previous"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart, setHidePrevButton, setHideNextButton,jobs)}
      >
       {"<"}
      </button>
      <button
        className={hideNextButton ? "hide" : " jobsIndex_buttons_next show"}
        value={"next"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart, setHideNextButton, setHidePrevButton,jobs)}
      >
        {">"}
      </button>
      </section>
     
      <section className="jobsIndex_listings grid-center">
        {
        jobQuery.length > 0 ?
          jobQuery.map((obj) => <JobsCard key={uuidv4()} jobObj={obj} />) 
          :
        <NoSearchResults />
        }
      </section>
    </div>
  );
}

export default JobsIndex;
