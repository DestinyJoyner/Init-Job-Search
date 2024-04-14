import { useState, useEffect } from "react";
import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import LoginHeader from "../../../Login/LoginHeader/LoginHeader";
import DarkModeSlider from "../../../DarkModeSlider/DarkModeSlider";

import { FaQuestionCircle } from "react-icons/fa";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import "./DesktopNav.scss"


function DesktopNav() {
    const [scrolling, setScrolling] = useState(false)

    function handleScroll () {
        const verticalScrollPosition = window.scrollY

        if(verticalScrollPosition > 5){
            setScrolling(true)
        }
        else if (verticalScrollPosition < 5){
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
        <nav className={!scrolling ? `desktopNav init-card`: `desktopNav init-card scrollNav`}>
            {!scrolling ? <LoginHeader /> : <span>searchbar</span>}
            <SlideNavLinkList icons={false}/>
            <DarkModeSlider text={false} /> 
            <FaQuestionCircle />
            {/* <ContactLinks init={true} /> */}
        </nav>
    );
}

export default DesktopNav;