import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import JobsIndex from "../Components/Job/JobsIndexPage/JobsIndex.js";
import JobsIndexDesktop from "../Components/Job/JobsIndexPage/JobsIndexDesktop/JobsIndexDesktop.js";
import JobProvider from "../Providers/JobProvider.js";
import SearchBarProvider from "../Providers/SearchBarProvider.js";

function Jobs() {
  const { isDesktopView } = useWindowSizeProvider()
  return (
    <JobProvider>
      <SearchBarProvider>
      {
        isDesktopView ?
        <JobsIndexDesktop /> :
        <JobsIndex />
      }
      </SearchBarProvider>
    </JobProvider>
  );
}

export default Jobs;
