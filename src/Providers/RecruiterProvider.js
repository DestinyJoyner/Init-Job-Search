import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider";

export const RecruiterContextData = createContext();
export function useRecruiterProvider() {
  return useContext(RecruiterContextData);
}

function RecruiterProvider({ children }) {
  const { API, axios, theme, setIsSignedIn, setAuthToken, isRecruiterAcc, setIsRecruiterAcc, setUserID, recruiterID, setRecruiterID, setAccessRegTwo, setLoading, loading } =
    useContextProvider();

  const [recruiterData, setRecruiterData] = useState({});
  const [unlockRec, setUnlockRec] = useState(false)
  const [isPassHidden, setIsPassHidden] = useState(true)

  useEffect(() => {
    recruiterID
      ? axios
          .get(`${API}/recruiters/${recruiterID}`)
          .then((res) => {
            setLoading(false)
            setRecruiterData(res.data)
          })
          .catch((error) => console.log(error))
      : null;
  }, [recruiterID]);

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <RecruiterContextData.Provider
      value={{
        recruiterID,
        setRecruiterID,
        API,
        axios,
        setIsSignedIn,
        setAuthToken,
        isRecruiterAcc,
        setIsRecruiterAcc,
        setUserID,
        setAccessRegTwo,
        setUnlockRec,
        unlockRec,
        isPassHidden,
        setIsPassHidden,
      }}
    >
      {children}
    </RecruiterContextData.Provider>
  );
}

export default RecruiterProvider;
