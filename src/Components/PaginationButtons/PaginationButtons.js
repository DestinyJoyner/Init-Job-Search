import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider";
import { handlePagination } from "../Functions/SearchFunctions/JobsIndexFunctions";
import "./PaginationButtons.scss";

function PaginationButtons() {
  const { queryStart, setQueryStart, jobQuery, queryLimit, searchResultCount } =
    useJobProvider();
  const [hideNextButton, setHideNextButton] = useState(false);
  const [hidePrevButton, setHidePrevButton] = useState(
    queryStart !== 0 ? false : true
  );

  useEffect(() => {}, [queryLimit]);

  useEffect(()=> {
    if(queryStart === 0){
      setHideNextButton(false)
    }
  },[])

  useEffect(() => {
    if(jobQuery.length < queryLimit){
      setHideNextButton(true)
    }
    if(queryStart + queryLimit >= searchResultCount){
      setHideNextButton(true)
    }
  
  }, [queryStart, jobQuery.length]);

  return (
    <div className="paginationButtons">
      <button
        className={hidePrevButton ? "hide" : " paginationButtons_prev show"}
        value={"previous"}
        onClick={(event) =>
          handlePagination(
            event,
            queryStart,
            setQueryStart,
            setHidePrevButton,
            setHideNextButton,
            searchResultCount,
            queryLimit
          )
        }
      >
        {"<"}
      </button>
      <button
        className={hideNextButton ? "hide" : " paginationButtons_next show"}
        value={"next"}
        onClick={(event) =>
          handlePagination(
            event,
            queryStart,
            setQueryStart,
            setHideNextButton,
            setHidePrevButton,
            searchResultCount,
            queryLimit
          )
        }
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationButtons;
