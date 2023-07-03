import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillsComponent from "./SkillsComponent";
import Dropdown from "./Inputs/Dropdown.js"
import { dropdownCities } from "./Data/Cities.js";
import {
  handleSearchBar,
  handleSkillSelection,
} from "./Functions/SearchBarFunctions.js";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { MdChangeCircle } from "react-icons/md";
import "./FilterBar.css";

function FilterBar({ searchOptions, setSearchOptions }) {
  const [filterOptions, setFilterOptions] = useState(false);
  const [cityDropdown, setCityDropdown] = useState("");
  const [remoteSearch, setRemoteSearch] = useState(false);
  const [skillView, setSkillView] = useState(false);

  return (
    <div className="filter-bar">
      <span className="filter-bar-arrow">
        {!filterOptions ? (
          <BsCaretDownFill
            className="filter-arrow-up"
            onClick={() => setFilterOptions(!filterOptions)}
            color={"#41CDBC"}
            size={"25px"}
          />
        ) : (
          <BsCaretUpFill
            className="filter-arrow-up"
            onClick={() => setFilterOptions(!filterOptions)}
            color={"#0914AE"}
            size={"25px"}
          />
        )}
        <span
          className={filterOptions ? "filter-span expand-text" : "expand-text"}
          onClick={() => setFilterOptions(!filterOptions)}
        >
          {filterOptions ? "Collapse Filter Options" : "Expand Filter Options"}
        </span>
        <label htmlFor="remote-checkbox">
          <input
            className={
              filterOptions
                ? "filter-remote remote-checkbox"
                : "remote-checkbox"
            }
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
          <span
            className={
              filterOptions
                ? "filter-remote-label remote-label"
                : "remote-label"
            }
          >
            Remote
          </span>
        </label>
      </span>

      {/* expanded filter bar */}
      <section
        className={
          filterOptions
            ? "filter-bar-expanded slide-down"
            : "filter-bar-expanded slide-up"
        }
      >
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
          {!skillView ? (
            <SkillsComponent
              key={uuidv4()}
              checkedArr={searchOptions.skills}
              stateVar={searchOptions}
              setFunction={setSearchOptions}
            />
          ) : (
            <SkillsComponent
              key={uuidv4()}
              checkbox={true}
              checkedArr={searchOptions.skills}
              checkBoxHandle={(event) =>
                handleSkillSelection(event, searchOptions, setSearchOptions)
              }
            />
          )}
        </div>
        <hr />
      </section>
    </div>
  );
}

export default FilterBar;
