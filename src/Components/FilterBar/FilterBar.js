import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSearchBarProvider } from "../../Providers/SearchBarProvider";
import SkillsComponent from "../Job/SkillsComponent";
import Dropdown from "../Job/Inputs/Dropdown.js"
import { dropdownCities } from "../Job/Data/Cities.js";
import {
  handleSearchBar,
  handleSkillSelection,
} from "../Functions/SearchFunctions/SearchBarFunctions.js";
import { BiChevronDown } from "react-icons/bi"
import { MdChangeCircle } from "react-icons/md";
import "./FilterBar.css";

// { searchOptions, setSearchOptions}
function FilterBar({remoteCheckbox, searchOptions, setSearchOptions}) {
  // const { searchOptions, setSearchOptions } = useSearchBarProvider()
  const [filterOptions, setFilterOptions] = useState(false);
  const [cityDropdown, setCityDropdown] = useState("");
  const [remoteSearch, setRemoteSearch] = useState(false);
  const [skillView, setSkillView] = useState(false);


  function remoteClick(event){
    event.preventDefault()
    setRemoteSearch(!remoteSearch)
    setSearchOptions({
      ...searchOptions, ["isRemote"] : !searchOptions["isRemote"]
    })
  }

  return (
    <div className="filter-bar">
      {
        !remoteCheckbox ?
        <button 
        id="isRemote"
        className={!remoteSearch ?"filter-remote-button" : "filter-remote-button remote-clicked"}
        onClick={(e) => remoteClick(e)}>REMOTE
        </button> :
        <label 
        htmlFor="filter-checkbox" className="filter-checkbox">
          <input
            id="isRemote"
            type="checkbox"
            value={remoteSearch}
            checked={remoteSearch}
            onChange={(event) =>
              handleSearchBar(
                event,
                remoteSearch,
                setRemoteSearch,
                searchOptions,
                setSearchOptions
              )
            }
          />
          <span>Remote</span>
        </label>

      }
       {/* <button 
      id="isRemote"
      className={!remoteSearch ?"filter-remote-button" : "filter-remote-button remote-clicked"}
      onClick={(e) => remoteClick(e)}>REMOTE</button> */}
      {/* <button 
      id="isRemote"
      className={!remoteSearch ?"filter-remote-button" : "filter-remote-button remote-clicked"}
      onClick={(event) => handleSearchBar(
        event,
        remoteSearch,
        setRemoteSearch,
        searchOptions,
        setSearchOptions
      ) }>REMOTE</button> */}
      {/* <label htmlFor="filter-checkbox" className="filter-checkbox">
          <input
            id="isRemote"
            type="checkbox"
            value={remoteSearch}
            checked={remoteSearch}
            onChange={(event) =>
              handleSearchBar(
                event,
                remoteSearch,
                setRemoteSearch,
                searchOptions,
                setSearchOptions
              )
            }
          />
          <span>Remote</span>
        </label> */}
       <Dropdown
          idVal={"city"}
          stateVar={cityDropdown}
          optionsArray={dropdownCities}
          onChange={(event) =>
            handleSearchBar(
              event,
              cityDropdown,
              setCityDropdown,
              searchOptions,
              setSearchOptions
            )
          }
        />
        <span className="filter-skills"
        onClick={() => setFilterOptions(!filterOptions)}>
          <span>Skills</span>
            <BiChevronDown size={"20px"}/>
        </span>

      {/* expanded filter bar */}
      <section
        className={
          filterOptions
            ? "filter-bar-expanded slide-down"
            : "filter-bar-expanded slide-up"
        }
      >
      
        {/* skills search options */}
        <span className="filter-bar-toggle">
          <MdChangeCircle
          size={"25px"}
            onClick={() => setSkillView(!skillView)}
          />
          <span onClick={() => setSkillView(!skillView)}>
            {!skillView ? "Skill Text" : "Skill Icons"}
          </span>
        </span>

        <div className="filter-bar-skills">
          {!skillView ? 
            <SkillsComponent
              key={uuidv4()}
              checkedArr={searchOptions.skills}
              stateVar={searchOptions}
              setFunction={setSearchOptions}
            />
           : 
            <SkillsComponent
              key={uuidv4()}
              checkbox={true}
              checkedArr={searchOptions.skills}
              checkBoxHandle={(event) =>
                handleSkillSelection(event, searchOptions, setSearchOptions)
              }
            />
          }
        </div>
        {/* <hr /> */}
      </section>
    </div>
  );
}

export default FilterBar;
