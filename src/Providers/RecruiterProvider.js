import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider";

export const RecruiterContextData = createContext();
export function useRecruiterProvider() {
  return useContext(RecruiterContextData);
}

function RecruiterProvider({ children }) {
  const { API, axios, theme, setIsSignedIn, setAuthToken, isRecruiterAcc, setIsRecruiterAcc, setUserID, recruiterID, setRecruiterID, setAccessRegTwo } =
    useContextProvider();
  const [recruiterData, setRecruiterData] = useState({});
  const [unlockRec, setUnlockRec] = useState(false)
  const [isPassHidden, setIsPassHidden] = useState(true)

  useEffect(() => {
    recruiterID
      ? axios
          .get(`${API}/recruiters/${recruiterID}`)
          .then((res) => setRecruiterData(res.data))
          .catch((error) => console.log(error))
      : null;
  }, [recruiterID]);

  return (
    <RecruiterContextData.Provider
      value={{
        recruiterID,
        setRecruiterID,
        API,
        axios,
        theme,
        setIsSignedIn,
        setAuthToken,
        isRecruiterAcc,
        setIsRecruiterAcc,
        setUserID,
        setAccessRegTwo,
        setUnlockRec,
        unlockRec,
        isPassHidden,
        setIsPassHidden
      }}
    >
      {children}
    </RecruiterContextData.Provider>
  );
}

export default RecruiterProvider;
