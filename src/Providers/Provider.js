import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/App/Nav";
// import Footer from "../Components/App/Footer";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

const API = process.env.REACT_APP_API_URL;

function Provider({ children }) {
  const localUserID = localStorage.getItem("userID");
  const localRecruiterID = localStorage.getItem("recruiterID");
  const [isSignedIn, setIsSignedIn] = useState(localUserID ? true : false);
  const [isRecruiterAcc, setIsRecruiterAcc] = useState(
    localRecruiterID ? true : false
  );
  // for the time being we will assign a fixed userID when clicking login
  const [userID, setUserID] = useState(localUserID);
  const [recruiterID, setRecruiterID] = useState(localRecruiterID);
  // authToken will be manually hardcoded for now
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlc3RpbnlAZW1haWwuY29tIiwiaWF0IjoxNjg5NDQ3OTk3LCJleHAiOjE2OTIwMzk5OTd9.phVrR89Mw7TvMwv_f9WhZgs4uWI0A3MBONrG50DheUE"
  );
  const [openNav, setOpenNav] = useState(false);
  const [accessRegTwo, setAccessRegTwo] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [triggerBonus, setTriggerBonus] = useState(false)

  const[appHeader, setAppHeader] = useState("")


  function navbarClick() {
    setOpenNav(!openNav);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`;

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
          accessRegTwo,
          setAccessRegTwo,
          navbarClick,
          openNav,
          setOpenNav,
          triggerBonus,
          setTriggerBonus,
          appHeader,
          setAppHeader,
        }}
      >
        <Nav />
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
