import { useWindowSizeProvider } from "../Providers/WindowSizeProvider";
import JobProvider from "../Providers/JobProvider";
import RecruiterProvider from "../Providers/RecruiterProvider";
import DesktopJobsShow from "../Components/Job/JobsShowPage/DesktopJobsShowPage/DesktopJobsShow";
import JobsShow from "../Components/Job/JobsShowPage/JobsShow.js";


function JobsShowPage() {
    const {isDesktopView} = useWindowSizeProvider()

    return (
        <JobProvider>
            <RecruiterProvider>
                {
                    isDesktopView ?
                     <DesktopJobsShow /> :
                     <JobsShow />
                }
                
            </RecruiterProvider>
        </JobProvider>
    );
}

export default JobsShowPage;