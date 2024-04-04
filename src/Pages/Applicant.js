import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import UserProvider from "../Providers/UserProvider.js";
import ApplicantProfilePage from "../Components/Applicant/ApplicantProfilePage/ApplicantProfilePage.js";
import DesktopApplicantProfilePage from "../Components/Applicant/ApplicantProfile/DesktopApplicantProfile/DesktopApplicantProfilePage/DesktopApplicantProfilePage.js";

function Applicant() {
  const {isDesktopView} = useWindowSizeProvider()

  return (
    <UserProvider>
      {
        isDesktopView ?
        <DesktopApplicantProfilePage /> :
        <ApplicantProfilePage />
      }
     
    </UserProvider>
  );
}

export default Applicant;
