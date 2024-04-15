import { useState, useEffect } from "react";
import { useSearchBarProvider } from "../../../../Providers/SearchBarProvider";
import SearchBar from "../../../SearchBar/SearchBar";
import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import LoginHeader from "../../../Login/LoginHeader/LoginHeader";
import DarkModeSlider from "../../../DarkModeSlider/DarkModeSlider";

import { FaQuestionCircle } from "react-icons/fa";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import "./DesktopNav.scss"


function DesktopNav() {
    const {searchOptions, setSearchOptions} = useSearchBarProvider()
    const [scrolling, setScrolling] = useState(false)

    function handleScroll () {
        const verticalScrollPosition = window.scrollY

        if(verticalScrollPosition > 0){
            setScrolling(true)
        }
        else if (verticalScrollPosition === 0){
            setScrolling(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])

    return (
        <nav className={!scrolling ? `desktopNav init-card`: `desktopNav scrollNav`}>
            <LoginHeader />
           <SearchBar
          searchOptions={searchOptions}
          setSearchOptions={setSearchOptions}
          navbar={true}
        />
            <SlideNavLinkList icons={false}/>
            {/* <DarkModeSlider text={false} />  */}
            <FaQuestionCircle />
            {/* <ContactLinks init={true} /> */}
        </nav>
    );
}

export default DesktopNav;