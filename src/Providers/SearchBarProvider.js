import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";

export const SearchBarContextData = createContext();
export function useSearchBarProvider() {
  return useContext(SearchBarContextData);
}

function SearchBarProvider({children}) {
    const [searchOptions, setSearchOptions] = useState({
        searchbar: "",
        isRemote: false,
        city: "",
        skills: [],
      });

    return (
        <SearchBarContextData.Provider
        value={{
            searchOptions,
            setSearchOptions
        }}>
            {children}
        </SearchBarContextData.Provider>
    );
}

export default SearchBarProvider;