import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";

export const SkillContextData = createContext();
export function useSkillProvider() {
  return useContext(SkillContextData);
}

function SkillProvider({ children }) {
  const { API, axios } = useContextProvider();
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    axios.get(`${API}/skills`)
      .then(({ data }) => setAllSkills(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SkillContextData.Provider
      value={{
        allSkills,
      }}
    >
      {children}
    </SkillContextData.Provider>
  );
}

export default SkillProvider;
