import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider";

export const NavBarData = createContext();
export function useNavProvider() {
  return useContext(NavBarData);
}

function NavProvider({ children }) {
const {theme, setTheme } = useContextProvider()

const [appHeader, setAppHeader] = useState("");

const [openNav, setOpenNav] = useState(false);

  function navbarClick() {
    setOpenNav(!openNav);
  }

  const darkModeSwitch =
  localStorage.getItem("theme") === "dark" ? true : false;

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
      <NavBarData.Provider
        value={{
          appHeader,
          setAppHeader,
          navbarClick,
          openNav,
          setOpenNav,
          darkModeSwitch
        }}
      >
        {children}
      </NavBarData.Provider>
  );
}

export default NavProvider;
