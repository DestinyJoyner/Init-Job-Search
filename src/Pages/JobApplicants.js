import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import JobProvider from "../Providers/JobProvider.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";
import ApplicantListPage from "../Components/Recruiter/ApplicantListPage/ApplicantListPage.js"
import DesktopApplicantListPage from "../Components/Recruiter/ApplicantListPage/DesktopApplicantListPage/DesktopApplicantListPage.js";

export default function JobApplicants() {
  const { isDesktopView } = useWindowSizeProvider()
    return (
      <JobProvider>
        <RecruiterProvider>
          {
            isDesktopView ? 
            <DesktopApplicantListPage /> :
            <ApplicantListPage />
          }
        
        </RecruiterProvider>
      </JobProvider>
    
    );
  }