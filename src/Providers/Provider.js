import { useContext, createContext, useState } from "react";
import axios from "axios";
import NavProvider from "./NavProvider";
import Nav from "../Components/App/Nav";

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
  const [accessRegTwo, setAccessRegTwo] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [triggerBonus, setTriggerBonus] = useState(false);

  const [appHeader, setAppHeader] = useState("");

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
          triggerBonus,
          setTriggerBonus,
          appHeader,
          setAppHeader,
        }}
      >
        <NavProvider>
          <Nav />
        </NavProvider>
        {children}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
