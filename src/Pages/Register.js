import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import RegistrationPage from "../Components/Registration/RegisterPage/RegistrationPage.js";
import DesktopRegisterPage from "../Components/Registration/RegisterPage/DesktopRegisterPage/DesktopRegisterPage.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function Register() {
  const {isDesktopView} = useWindowSizeProvider()
  return (
    <RecruiterProvider>
      {
        isDesktopView ?
        <DesktopRegisterPage /> :
        <RegistrationPage />
      }
      
    </RecruiterProvider>
  );
}
