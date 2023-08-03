import { useEffect, useState } from "react";
import { useNavProvider } from "../../Providers/NavProvider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from "uuid";
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import SearchBar2 from "./SearchBar2.js";
import { handlePagination } from "./JobsIndexFunctions.js";
import "./JobsIndex.scss";

function JobsIndex() {
  const { setAppHeader } = useNavProvider();
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

  return (
    <div className="jobsIndex">
      {/* <SearchBar /> */}
      <SearchBar2 />
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
        jobQuery.length > 0 &&
          jobQuery.map((obj) => <JobsCard key={uuidv4()} jobObj={obj} />)}
      </section>
    </div>
  );
}

export default JobsIndex;
