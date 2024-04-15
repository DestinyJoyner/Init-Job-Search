import { useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useJobProvider } from "../../Providers/JobProvider";
import FilterBar from "../FilterBar/FilterBar";
import searchLogo from "../../Assets/footer-logo.png";
import {
  handleSearchBar,
  handleSearchFilterSubmit,
} from "../Functions/SearchFunctions/SearchBarFunctions";
import { IoOptionsSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

function SearchBar({withFilterOptions, searchOptions, setSearchOptions, navbar}) {
  const { setSearchQueryRoute, setQueryStart } = useJobProvider();
  const [search, setSearch] = useState(searchOptions.searchbar);
  const [showFilterBar, setShowFilterBar] = useState(false);

  const navigate = useNavigate()
const location= useLocation()
  // const [searchOptions, setSearchOptions] = useState({
  //   searchbar: "",
  //   isRemote: false,
  //   city: "",
  //   skills: [],
  // });

  useEffect(() => {
    if(navbar && location.pathname !== "/jobs"){
      setSearch("")
    }
  },[location.pathname])

 
  if(navbar && location.pathname === "/jobs"){
    return null
  }
 

  return (
    <form
      className="searchComponent"
      onSubmit={(event) =>
        handleSearchFilterSubmit(
          event,
          searchOptions,
          setQueryStart,
          setSearchQueryRoute,
          navbar,
          navigate
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
        {!navbar ? "SEARCH" : <FaSearch />}
      </button>
    </form>
  );
}

export default SearchBar;
