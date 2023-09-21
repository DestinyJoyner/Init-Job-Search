import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider";
import { useWindowSizeProvider } from "../../Providers/WindowSizeProvider";
import { handlePagination } from "../Functions/SearchFunctions/JobsIndexFunctions";
import "./PaginationButtons.scss";

function PaginationButtons() {
  const { isDesktopView } = useWindowSizeProvider()
  const { jobs, queryStart, setQueryStart, jobQuery, queryLimit } =
    useJobProvider();
  const [hideNextButton, setHideNextButton] = useState(false);
  const [hidePrevButton, setHidePrevButton] = useState(
    queryStart !== 0 ? false : true
  );

  useEffect(() => {
    if (jobQuery.length !== queryLimit) {
      setHideNextButton(true);
    } else if (
      jobQuery.length === queryLimit &&
      queryStart + 2 * queryLimit > jobs.length
    ) {
      setHideNextButton(true);
    } else {
      setHideNextButton(false);
    }
  }, [queryStart, jobQuery.length]);

  useEffect(() => {}, [queryLimit]);

  useEffect(()=> {
    if(queryStart === 0){
      setHideNextButton(false)
    }
  },[])

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
            jobs,
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
            jobs,
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
