import { useEffect, useState } from "react";
import { useContextProvider } from "../../../../Providers/Provider";
import { useJobProvider } from "../../../../Providers/JobProvider";
import { useSearchBarProvider } from "../../../../Providers/SearchBarProvider";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../SearchBar/SearchBar.js";
import FilterBar from "../../../FilterBar/FilterBar";
import JobsCard from "../../JobsCard/JobsCard";
import NoSearchResults from "../../../App/NoSearchResults/NoSearchResults";
import PaginationButtons from "../../../PaginationButtons/PaginationButtons.js"
import {MdFilterAltOff} from "react-icons/md"
import { handleSearchFilterSubmit } from "../../../Functions/SearchFunctions/SearchBarFunctions";
import "./DesktopJobsIndex.scss";

function DesktopJobsIndex() {
  const { setLoading, loading } = useContextProvider();
  const { setSearchQueryRoute, setQueryStart, jobQuery} =
    useJobProvider();
  const { searchOptions, setSearchOptions } = useSearchBarProvider();

  useEffect(() => {
    setLoading(false);
  }, [jobQuery]);

 

  function clearFilterOptions (e) {
    // e.preventDefault()
    const resetObj = {
      searchbar: searchOptions.searchbar,
      isRemote: false,
      city : "",
      skills: []
    }
    setSearchOptions(resetObj)
  }

  // useEffect(() => {

  // },[searchOptions])

  // useEffect(() => {}, [queryStart, jobQuery.length]);

  return (
    !loading && (
      <div className="jobsIndexDesktop center">
        <SearchBar
          searchOptions={searchOptions}
          setSearchOptions={setSearchOptions}
        />

        <aside className="jobsIndexDesktop_filter">
          <span className="jobsIndexDesktop_filter_header">
            <span className="jobsIndexDesktop_filter_header_title">
              Filter Options
            </span>
            <span className="jobsIndexDesktop_filter_helpText">
              *Select up to 4 skills, a city, and/or remote options
            </span>
          </span>

          <span className="jobsIndexDesktop_filter_category_skills">Skills:</span>
          <span className="jobsIndexDesktop_filter_category_location">Location:</span>
          <span className="jobsIndexDesktop_filter_category_remote"><span>Remote Work:</span></span>

          <button 
          onClick={() => {}}className="jobsIndexDesktop_filter_clearButton">
            <span>Reset Filters</span>  <MdFilterAltOff />
          </button>

          <FilterBar
            remoteCheckbox={true}
            searchOptions={searchOptions}
            setSearchOptions={setSearchOptions}
            
          />

          <button
            className="searchComponent_submit"
            onClick={(event) =>
              handleSearchFilterSubmit(
                event,
                searchOptions,
                setQueryStart,
                setSearchQueryRoute
              )
            }
          >
            SEARCH
          </button>
        </aside>

        <span className="jobsIndexDesktop_jobsList_header">
          Search Results:
        </span>
        <div className="jobsIndexDesktop_jobsList">
          {jobQuery.length !== 0 ? (
            jobQuery.map((obj) => 
            <JobsCard 
            key={uuidv4()} 
            jobObj={obj} />
            )
          ) : (
            <NoSearchResults />
          )}
          <PaginationButtons />
        </div>
        
      </div>
    )
  );
}

export default DesktopJobsIndex;
