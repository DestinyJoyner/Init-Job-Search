import RecruiterProvider from "../Providers/RecruiterProvider.js";
import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import RecruiterProfile from "../Components/Recruiter/RecruiterProfile/RecruiterProfile.js";
import DesktopRecruiterProfile from "../Components/Recruiter/RecruiterProfile/DesktopRecruiterProfile/DesktopRecruiterProfile.js";

export default function Recruiter() {
  const { isDesktopView } = useWindowSizeProvider()
  return (
    <RecruiterProvider>
      {
        isDesktopView ?
        <DesktopRecruiterProfile /> :
        <RecruiterProfile />
      }
      
    </RecruiterProvider>
    
  );
}
