import { useEffect } from "react";
import { useContextProvider } from "../../../../Providers/Provider";
import SearchBarProvider from "../../../../Providers/SearchBarProvider";
import SearchBar from "../../../SearchBar/SearchBar.js";
import FilterBar from "../../../FilterBar/FilterBar";
import "./JobsIndexDesktop.scss";

function JobsIndexDesktop(props) {
  const { setLoading, loading } = useContextProvider();
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    !loading && (
      <div className="jobsIndexDesktop center">
        <SearchBarProvider>
          <SearchBar />
        </SearchBarProvider>

        <div className="jobsIndexDesktop_two">profile card</div>

        <aside className="jobsIndexDesktop_filter">
            <span className="jobsIndexDesktop_filter_header">Filter Options</span>
        <SearchBarProvider>
          <FilterBar />
        </SearchBarProvider>
        </aside>
        

        <div className="jobsIndexDesktop_four">jobs lisings</div>
      </div>
    )
  );
}

export default JobsIndexDesktop;
