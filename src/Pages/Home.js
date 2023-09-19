import { useWindowSizeProvider } from "../Providers/WindowSizeProvider";
import HomePage from "../Components/App/HomePage/HomePage"
import DesktopHomePage from "../Components/App/HomePage/DesktopHomePage/DesktopHomePage.js";

function Home() {
    const { isDesktopView } = useWindowSizeProvider()

    return (
        isDesktopView ? 
        <DesktopHomePage/> :
        <HomePage />
    );
}

export default Home;