import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import JobsIndex from "../Components/Job/JobsIndexPage/JobsIndex.js";
import JobsIndexDesktop from "../Components/Job/JobsIndexPage/JobsIndexDesktop/JobsIndexDesktop.js";
import JobProvider from "../Providers/JobProvider.js";

function Jobs() {
  const { isDesktopView } = useWindowSizeProvider()
  return (
    <JobProvider>
      {
        isDesktopView ?
        <JobsIndexDesktop /> :
        <JobsIndex />
      }
      
    </JobProvider>
  );
}

export default Jobs;
