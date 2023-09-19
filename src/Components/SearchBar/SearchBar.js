import { useState } from "react";
import { useJobProvider } from "../../Providers/JobProvider";
import { useSearchBarProvider } from "../../Providers/SearchBarProvider";
import FilterBar from "../FilterBar/FilterBar";
import searchLogo from "../../Assets/footer-logo.png";
import {
  handleSearchBar,
  handleSearchFilterSubmit,
} from "../Functions/SearchFunctions/SearchBarFunctions";
import { IoOptionsSharp } from "react-icons/io5";
import "./SearchBar.scss";

function SearchBar({withFilterOptions, searchOptions, setSearchOptions}) {
  const { setSearchQueryRoute, setQueryStart } = useJobProvider();
  // const { searchOptions, setSearchOptions} = useSearchBarProvider()
  const [search, setSearch] = useState("");
  const [showFilterBar, setShowFilterBar] = useState(false);
  // const [searchOptions, setSearchOptions] = useState({
  //   searchbar: "",
  //   isRemote: false,
  //   city: "",
  //   skills: [],
  // });

  return (
    <form
      className="searchComponent"
      onSubmit={(event) =>
        handleSearchFilterSubmit(
          event,
          searchOptions,
          setQueryStart,
          setSearchQueryRoute
        )
      }
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
          onChange={(event) =>
            handleSearchBar(
              event,
              search,
              setSearch,
              searchOptions,
              setSearchOptions
            )
          }
        />
        {
          withFilterOptions &&
          <IoOptionsSharp
          onClick={() => setShowFilterBar(!showFilterBar)}
          className="searchComponent_searchBar_filterIcon"
        />
        }
       
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

export default SearchBar;
