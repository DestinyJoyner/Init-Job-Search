import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import JobsIndex from "../Components/Job/JobsIndexPage/JobsIndex.js";
import DesktopJobsIndex from "../Components/Job/JobsIndexPage/DesktopJobsIndex/DesktopJobsIndex.js";
import JobProvider from "../Providers/JobProvider.js";
import SearchBarProvider from "../Providers/SearchBarProvider.js";

function Jobs() {
  const { isDesktopView } = useWindowSizeProvider()
  return (
    <JobProvider>
      <SearchBarProvider>
      {
        isDesktopView ?
        <DesktopJobsIndex /> :
        <JobsIndex />
      }
      </SearchBarProvider>
    </JobProvider>
  );
}

export default Jobs;
