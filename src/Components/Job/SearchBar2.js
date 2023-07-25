import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider";
import FilterBar from "./FilterBar";
import { handleSearchBar } from "./Functions/SearchBarFunctions";
import searchLogo from "../../Assets/footer-logo.png";
import { IoOptionsSharp } from "react-icons/io5";
import "./SearchBar.scss";

function SearchBar2() {
  const { setJobs, searchResult, API, axios, setJobQuery, searchQueryRoute, setSearchQueryRoute, queryStart, setQueryStart } = useJobProvider();
  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState({
    searchbar: "",
    isRemote: false,
    city: "",
    skills: [],
  });

  const [showFilterBar, setShowFilterBar] = useState(false);

  function handleSearchInput(e) {
    const searchInput = e.target.value;
    setSearch(searchInput);
    const searchInputTrim = searchInput.replaceAll(" ", "");
    setSearchOptions({
      ...searchOptions,
      ["searchbar"]: searchInputTrim.toLowerCase(),
    });
  }

  function handleSearchFilterSubmit(e, searchObj) {
    e.preventDefault();
    setQueryStart(0)
    const { searchbar, isRemote, city, skills } = searchObj;
    let searchRoute = "";
    if (searchbar) {
      searchRoute += `&input=${searchbar.toLowerCase()}`;
    }
    if (city) {
      searchRoute += `&city=${city.toLowerCase()}`;
    }
    if (isRemote) {
      searchRoute += `&remote=true`;
    }
    // if (!isRemote) {
    //   searchRoute += `&remote=false`;
    // }
    // console.log(searchRoute)

    setSearchQueryRoute(searchRoute)

  }
  // SEND SKILLS ARR AS KEY IN OBJ WITH SEARCH QUERY -> FILTER ON ABCKEND GET ALL JOBS ROUTE WITH SKILLID
useEffect(() => {
  console.log(searchOptions.skills)
}, [searchOptions.skills.length])
  return (
    <form
      className="searchComponent"
      onSubmit={(event) => handleSearchFilterSubmit(event, searchOptions)}
    >
      <label htmlFor={search} className="searchComponent_searchBar_label">
        <img
          src={searchLogo}
          alt="search-logo"
          className="searchComponent_searchBar_logo"
        />
        <input
          className="searchComponent_searchBar_input"
          type="text"
          id="searchbar"
          value={search}
          placeholder="Search Jobs..."
          onChange={(event) => handleSearchInput(event)}
        />
        <IoOptionsSharp
          onClick={() => setShowFilterBar(!showFilterBar)}
          className="searchComponent_searchBar_filterIcon"
        />
      </label>
      {showFilterBar && (
        <FilterBar
          searchOptions={searchOptions}
          setSearchOptions={setSearchOptions}
        />
      )}
      <button className="searchComponent_submit" type="submit">
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar2;