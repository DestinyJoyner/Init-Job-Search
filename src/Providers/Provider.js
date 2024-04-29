import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import NavProvider from "./NavProvider";
import SearchBarProvider from "./SearchBarProvider.js";
import JobProvider from "./JobProvider.js";
import { useWindowSizeProvider } from "./WindowSizeProvider";
import Nav from "../Components/App/NavBar/Nav";
import DesktopNav from "../Components/App/NavBar/DesktopNav/DesktopNav";
import Loading from "../Components/App/LoadingPage/Loading.js"

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

const API = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN

function Provider({ children }) {
  const { isDesktopView } = useWindowSizeProvider()

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const localUserID = localStorage.getItem("userID");
  
  const localRecruiterID = localStorage.getItem("recruiterID");
  
  const [isSignedIn, setIsSignedIn] = useState(localUserID ? true : false);
  
  const [isRecruiterAcc, setIsRecruiterAcc] = useState(
    localRecruiterID ? true : false
  );
 
  const [userID, setUserID] = useState(localUserID);
 
  const [recruiterID, setRecruiterID] = useState(localRecruiterID);
  
  // authToken will be manually hardcoded for now
  const [authToken, setAuthToken] = useState(TOKEN);

  const [loading, setLoading] = useState(true)

  axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`;

// useEffect(() => {
//   setLoading(false)
// },[loading])

useEffect(() => {
  setLoading(loading)
},[isDesktopView])



  return (
    <div className={isDesktopView ?`${theme} desktop` : `${theme} mobile`}>
      <ContextData.Provider
        value={{
          API,
          axios,
          isSignedIn,
          setIsSignedIn,
          userID,
          setUserID,
          setAuthToken,
          theme,
          setTheme,
          isRecruiterAcc,
          setIsRecruiterAcc,
          recruiterID,
          setRecruiterID,
          loading, 
          setLoading,
        }}
      >
        <NavProvider>
          <JobProvider >
          <SearchBarProvider>
          {
            isDesktopView ? 
            <DesktopNav /> :
            <Nav />
          }
          {loading ? <Loading /> :
          {children}
        }
          </SearchBarProvider>
          </JobProvider>
        </NavProvider>
        
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
