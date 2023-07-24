import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider";
import { useJobProvider } from "../../Providers/JobProvider";
import FilterBar from "./FilterBar";
import { handleSearchBar } from "./Functions/SearchBarFunctions";
import searchLogo from "../../Assets/footer-logo.png"
import "./SearchBar.css";

function SearchBar2() {
  const { setTriggerBonus } = useContextProvider()
  const { setJobs, searchResult,API, axios, setJobQuery } = useJobProvider();
  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState({
    searchbar: "",
    isRemote: false,
    city: "",
    skills: [],
  });

  function handleSearchInput(e) {
    const searchInput = e.target.value
    setSearch(searchInput)
    const searchInputTrim = searchInput.replaceAll(" ","")
    setSearchOptions({
        ...searchOptions, ["searchbar"] : searchInputTrim.toLowerCase()
    })
  }

  function handleSearchFilterSubmit(e,searchObj){
    e.preventDefault()
    const { searchbar, isRemote, city, skills} = searchObj
    let searchRoute = `${API}/jobs?start=0&limit=4`
    if(searchbar){
        searchRoute += `&input=${searchbar.toLowerCase()}`
    }
    if(city){
        searchRoute+= `&city=${city.toLowerCase()}`
    }
    if(isRemote){
        searchRoute += `&remote=true`
    }
    if(!isRemote){
        searchRoute += `&remote=false`
    }
    // console.log(searchRoute)
    axios.get(`${searchRoute}`)
    .then(({data}) => {
        // console.log(data)
        setJobQuery(data)})
    .catch(err => console.log(err))
  }

//   function handleSearch() {
//     if (
//       searchOptions.searchbar === "" &&
//       !searchOptions.isRemote &&
//       searchOptions.dropdown === ""
//     ) {
//       setJobs(searchResult);
//     }
 
//     let filterSearch = searchResult;
//     if (searchOptions.searchbar) {
//       const textFilter = filterSearch.filter((obj) => {
//         const { title, company, details, job_id, city } = obj;
//         const joinSearch = search.replaceAll(" ", "");
//         const regex = new RegExp(joinSearch, "gi");
//         let joinText = [
//           title.replaceAll(" ", ""),
//           company.replaceAll(" ", ""),
//           details.replaceAll(" ", ""),
//           city.replaceAll(" ", ""),
//         ];

//         const matchExp = [];
//         const trackJobID = [];
//         for (let i = 0; i < joinText.length; i++) {
//           if (joinText[i].match(regex) && !trackJobID.includes(job_id)) {
//             trackJobID.push(job_id);
//             matchExp.push(obj);
//           }
//         }
//         return matchExp.length > 0;
//       });
//       filterSearch = textFilter;
//     }
//     if (searchOptions.isRemote) {
//       const remoteFilter = filterSearch.filter(
//         ({ full_remote }) => full_remote === true
//       );
//       filterSearch = remoteFilter;
//     }
//     if (searchOptions.city) {
//       const cityFilter = filterSearch.filter(
//         ({ city }) => city.split(",")[0] === searchOptions.city
//       );
//       filterSearch = cityFilter;
//     }
//     if (searchOptions.skills.length > 0) {
//       const skillFilter = filterSearch.filter((obj) => {
//         let includesAll = true;
//         for (let i = 0; i < searchOptions.skills.length; i++) {
//           const skillDataType = typeof obj["skill_id"] === "number" ? [obj["skill_id"]] : obj["skill_id"];
//           if (!skillDataType.includes(searchOptions.skills[i])) {
//             includesAll = false;
//             break;
//           }
//         }
//         if (includesAll) {
//           return obj;
//         }
//       });
//       filterSearch = skillFilter;
//     }
//     setJobs(filterSearch);
//   }

//   useEffect(() => {
//     handleSearch();

//   }, [
//     searchOptions.searchbar,
//     searchOptions.city,
//     searchOptions.isRemote,
//     searchOptions.skills.length,
//   ]);

  return (
    <form 
    className="search-component"
    onSubmit={(event) => handleSearchFilterSubmit(event,searchOptions)}>
      <label htmlFor={search} className="searchbar-label">
        <img src={searchLogo} alt="search-logo" className="search-bar-logo" />
        <input
          className="searchbar"
          type="text"
          id="searchbar"
          value={search}
          placeholder="Search Jobs..."
          onChange={(event) => handleSearchInput(event)
          }
        />
      </label>
      <FilterBar
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar2;
