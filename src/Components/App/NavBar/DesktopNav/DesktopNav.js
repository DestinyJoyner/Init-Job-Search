import SlideNavLinkList from "../SlideNav/SlideNavLinkList";
import "./DesktopNav.scss"

function DesktopNav() {
    return (
        <nav className='desktopNav'>
            <SlideNavLinkList icons={false}/>
        </nav>
    );
}

export default DesktopNav;