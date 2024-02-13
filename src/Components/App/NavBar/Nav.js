import { useNavProvider } from "../../../Providers/NavProvider";
import WindowSizeProvider, { useWindowSizeProvider } from "../../../Providers/WindowSizeProvider.js";
import SlideNav from "./SlideNav/SlideNav";
import AppHeader from "../AppHeader/AppHeader.js"
import hamburger from "../../../Assets/blue-hamburger-menu.png"
import "./Nav.scss";
import { useEffect } from "react";

export default function Nav() {
  const { navbarClick, appHeader, setOpenNav } = useNavProvider()
  const { isDesktopView } = useWindowSizeProvider()

  
  useEffect(() => {
   setOpenNav(false)
  }, [isDesktopView])

  return (
    <nav className="navBar grid-center">
       <img 
      src={hamburger} alt="hamburger-menu"
      className="navBar_burger" 
      onClick={() => navbarClick()} />

      <AppHeader header={appHeader} />
      
      <SlideNav />
    </nav>
  );
}
