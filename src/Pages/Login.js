import { useWindowSizeProvider } from "../Providers/WindowSizeProvider.js";
import DesktopLoginPage from "../Components/Login/DesktopLoginPage/DesktopLoginPage.js";
import LoginPage from "../Components/Login/LoginPage/LoginPage.js";
import RecruiterProvider from "../Providers/RecruiterProvider.js";

export default function Login() {
  const { isDesktopView } = useWindowSizeProvider()

  return (
    <RecruiterProvider>
      {
        isDesktopView ?
        <DesktopLoginPage /> :
        <LoginPage/>
      }
      
    </RecruiterProvider>
  );
}
