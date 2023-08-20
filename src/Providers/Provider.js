import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import NavProvider from "./NavProvider";
import Nav from "../Components/App/NavBar/Nav";
import Loading from "../Components/App/LoadingPage/Loading.js"

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

const API = process.env.REACT_APP_API_URL;

function Provider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const localUserID = localStorage.getItem("userID");
  
  const localRecruiterID = localStorage.getItem("recruiterID");
  
  const [isSignedIn, setIsSignedIn] = useState(localUserID ? true : false);
  
  const [isRecruiterAcc, setIsRecruiterAcc] = useState(
    localRecruiterID ? true : false
  );
 
  const [userID, setUserID] = useState(localUserID);
  console.log(userID)
  const [recruiterID, setRecruiterID] = useState(localRecruiterID);
  
  // authToken will be manually hardcoded for now
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlc3RpbnlAZW1haWwuY29tIiwiaWF0IjoxNjkwNTE1MzQwLCJleHAiOjE2OTMxMDczNDB9.XhqhfH5bKHcQzjtBbWYOSkFCwX9iSFIiOXe-bNO2oFg"
  );

  const [loading, setLoading] = useState(false)

  axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`;

useEffect(() => {
  // setLoading(true)
},[])
  return (
    <div className={`${theme}`}>
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
          <Nav />
          {loading && <Loading />} 
          {children}
        </NavProvider>
        
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
