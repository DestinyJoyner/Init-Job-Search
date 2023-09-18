
import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import LoginHeader from "../../../Login/LoginHeader/LoginHeader";
import DarkModeSlider from "../SlideNav/DarkModeSlider/DarkModeSlider";
import "./DesktopNav.scss"

function DesktopNav() {
    return (
        <nav className='desktopNav'>
            <LoginHeader />
            <SlideNavLinkList icons={false}/>
            <DarkModeSlider text={false} /> 
        </nav>
    );
}

export default DesktopNav;