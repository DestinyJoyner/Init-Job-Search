import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import AboutPage from "../Components/App/AboutPage/AboutPage.js";
import DesktopAboutPage from "../Components/App/AboutPage/DesktopAboutPage/DesktopAboutPage.js";

function About() {
  const { isDesktopView } = useWindowSizeProvider();

  return isDesktopView ? <DesktopAboutPage /> : <AboutPage />;
}

export default About;
