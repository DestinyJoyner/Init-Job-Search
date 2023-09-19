import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import LoginHeader from "../../../Login/LoginHeader/LoginHeader";
import DarkModeSlider from "../SlideNav/DarkModeSlider/DarkModeSlider";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import "./DesktopNav.scss"

function DesktopNav() {
    return (
        <nav className='desktopNav'>
            <LoginHeader />
            <SlideNavLinkList icons={false}/>
            <DarkModeSlider text={false} /> 
            <ContactLinks />
        </nav>
    );
}

export default DesktopNav;