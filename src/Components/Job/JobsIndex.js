import { useEffect, useState } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useJobProvider } from "../../Providers/JobProvider.js";
import { v4 as uuidv4 } from "uuid";
import JobsCard from "./JobsCard";
import SearchBar from "./SearchBar.js";
import Bonus from "./Bonus.js";
import "./JobsIndex.css";

function JobsIndex() {
  const { setAppHeader } = useContextProvider();
  const { jobs, bonus, queryStart, setQueryStart, jobQuery, setJobQuery } =
    useJobProvider();

  useEffect(() => setAppHeader("inIT Jobs"), []);

  //    FUNCTION FOR QUERY START TO NOT GO BELOW 0 OR ABOVE LIMIT IF RETURNS ELEMENTS ARE LESS THAN 4
  function handlePagination(e, stateVar, setFunction) {
    const buttonValue = e.target.value;
    console.log(stateVar+ 4, jobQuery);
    if(buttonValue === "next" && stateVar + 4 < jobs.length){
        setFunction(stateVar + 4)
    }
    if(buttonValue === "previous" && stateVar -4 >= 0){
        setFunction(stateVar - 4)
    }
  }

  return (
    <div className="jobsIndex">
      <SearchBar />
      <button
        value={"next"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart)}
      >
        {" "}
        Next
      </button>
      <button
        value={"previous"}
        onClick={(event) => handlePagination(event, queryStart, setQueryStart)}
      >
        Prev
      </button>
      <section className="jobListings grid-center">
        {jobQuery.length > 0 &&
        jobQuery.map((obj) => (
          <JobsCard key={uuidv4()} jobObj={obj} />
        ))}
      </section>
    </div>
  );
}

export default JobsIndex;
