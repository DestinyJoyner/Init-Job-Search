import { useEffect } from "react";
import { useContextProvider } from "../../../../Providers/Provider";
import { useJobProvider } from "../../../../Providers/JobProvider";
import { useSearchBarProvider } from "../../../../Providers/SearchBarProvider";
import SearchBarProvider from "../../../../Providers/SearchBarProvider";
import SearchBar from "../../../SearchBar/SearchBar.js";
import FilterBar from "../../../FilterBar/FilterBar";
import { handleSearchFilterSubmit } from "../../../Functions/SearchFunctions/SearchBarFunctions";
import "./JobsIndexDesktop.scss";

function JobsIndexDesktop() {
  const { setLoading, loading } = useContextProvider();
  const { setSearchQueryRoute, setQueryStart } = useJobProvider();
  const { searchOptions, setSearchOptions } = useSearchBarProvider();

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    !loading && (
      <div className="jobsIndexDesktop center">
        <SearchBarProvider>
          <SearchBar />
        </SearchBarProvider>

        <aside className="jobsIndexDesktop_filter">
          <span className="jobsIndexDesktop_filter_header">
            <span className="jobsIndexDesktop_filter_header_title">
              Filter Options
            </span>
            <span className="jobsIndexDesktop_filter_helpText">
              *Select up to 4 skills, a city, and/or remote options
            </span>
          </span>

          <SearchBarProvider>
            <FilterBar remoteCheckbox={true} />
          </SearchBarProvider>

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

        <div className="jobsIndexDesktop_four">jobs lisings</div>
      </div>
    )
  );
}

export default JobsIndexDesktop;
