import { useEffect, useState } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from "uuid";
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import "./JobsIndex.css";

function JobsIndex() {
  const { setAppHeader } = useContextProvider();
  const { jobs, queryStart, setQueryStart, jobQuery } =
    useJobProvider();

    const [hideNextButton, setHideNextButton] = useState(false)
    const [hidePrevButton, setHidePrevButton] = useState(false)


  function handlePagination(e, stateVar, setFunction) {
    const buttonValue = e.target.value;
    if(buttonValue === "next" ){
        setHidePrevButton(false)
        if(stateVar + 4 <= jobs.length){
            stateVar + 8 >= jobs.length ? 
            setHideNextButton(true) :
            setHideNextButton(false)

            setFunction(stateVar + 4) 
            }
            
        else {
            setHideNextButton(true)
        }
    }
    if(buttonValue === "previous"){
        setHideNextButton(false)
        if(stateVar -4 >= 0){
            stateVar -8 < 0 ?
            setHidePrevButton(true) :
            setHidePrevButton(false)

            setFunction(stateVar - 4) 
        }
        else {
            setHidePrevButton(true)
        }
    }
  }

  useEffect(() => setAppHeader("inIT Jobs"), []);

  return (
    <div className="jobsIndex">
      <SearchBar />
      <button
      className={hideNextButton ? "hide" : "show"}
        value={"next"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart)}
      >
        Next
      </button>
      <button
      className={hidePrevButton ?"hide" : "show"}
        value={"previous"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart)}
      >
        Prev
      </button>
      <section className="jobListings grid-center">
        {
        jobQuery.length > 0 &&
        jobQuery.map(obj => 
          <JobsCard 
          key={uuidv4()} 
          jobObj={obj} />
        )}
      </section>
    </div>
  );
}

export default JobsIndex;
