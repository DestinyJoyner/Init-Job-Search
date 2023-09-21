import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider.js";
import { useNavProvider } from "../../../Providers/NavProvider.js";
import { useJobProvider } from "../../../Providers/JobProvider.js";
import { useSearchBarProvider } from "../../../Providers/SearchBarProvider.js";
import { v4 as uuidv4 } from "uuid";
import JobsCard from "../JobsCard/JobsCard.js";
import SearchBar from "../../SearchBar/SearchBar.js";
import NoSearchResults from "../../App/NoSearchResults/NoSearchResults.js";
import PaginationButtons from "../../PaginationButtons/PaginationButtons.js";
import "./JobsIndex.scss";

function JobsIndex() {
  const { setAppHeader } = useNavProvider();
  const { setLoading } = useContextProvider();
  const { searchOptions, setSearchOptions } = useSearchBarProvider();
  const { jobQuery } = useJobProvider();

  useEffect(() => {
    setAppHeader("inIT Jobs");
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [jobQuery]);


  return (
    <div className="jobsIndex">
      <SearchBar
        withFilterOptions={true}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />

      <PaginationButtons  />

      <section className="jobsIndex_listings grid-center">
        {jobQuery.length !== 0 ? (
          jobQuery.map((obj) => <JobsCard key={uuidv4()} jobObj={obj} />)
        ) : (
          <NoSearchResults />
        )}
      </section>
    </div>
  );
}

export default JobsIndex;
