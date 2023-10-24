import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import LoginHeader from "../../../Login/LoginHeader/LoginHeader";
import DarkModeSlider from "../../../DarkModeSlider/DarkModeSlider";
import ContactLinks from "../../../ContactLinks/ContactLinks";
import "./DesktopNav.scss"

function DesktopNav() {
    return (
        <nav className='desktopNav'>
            <LoginHeader />
            <span></span>
            <SlideNavLinkList icons={false}/>
            <DarkModeSlider text={false} /> 
            <ContactLinks init={true} />
        </nav>
    );
}

export default DesktopNav;