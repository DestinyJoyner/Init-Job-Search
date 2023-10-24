import { useContextProvider } from "../../../../Providers/Provider";
import { useWindowSizeProvider } from "../../../../Providers/WindowSizeProvider";
import { useNavProvider } from "../../../../Providers/NavProvider";
import SlideNavLink from "./SlideNavLink";
import DesktopNavBarLinks from "../DesktopNav/DesktopNavBarLinks/DesktopNavBarLinks";

function SlideNavLinkList({ icons }) {
  const {
    isSignedIn,
    isRecruiterAcc,
    setIsSignedIn,
    setRecruiterID,
    setIsRecruiterAcc,
    setUserID,
  } = useContextProvider();
  const { navbarClick } = useNavProvider();
  const { isDesktopView } = useWindowSizeProvider();

  function logoutClick() {
    setIsSignedIn(false);
    setIsRecruiterAcc(false);
    setRecruiterID(null);
    setUserID(null);
    if (localStorage.getItem("userID")) {
      localStorage.removeItem("userID");
    }
    if (localStorage.getItem("recruiterID")) {
      localStorage.removeItem("recruiterID");
    }
    navbarClick();
  }

  return isDesktopView ? (
    <>
      {!isSignedIn && !isRecruiterAcc && (
        <DesktopNavBarLinks path={"/login"} label={"Login"} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <DesktopNavBarLinks
          path={isSignedIn ? "/user" : "/recruiter"}
          label={"Profile"}
        />
      )}

      {!isSignedIn && !isRecruiterAcc && (
        <DesktopNavBarLinks path={"/register"} label={"Register"} />
      )}

      <DesktopNavBarLinks path={"/"} label={"Home"} />

      <DesktopNavBarLinks path={"/jobs"} label={"Jobs"} />

      {icons !== false && (
        <DesktopNavBarLinks path={"/about"} label={"About"} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <DesktopNavBarLinks
          path={"/login"}
          label={"Logout"}
          clickfunction={logoutClick}
        />
      )}
    </>
  ) : (
    <>
      {!isSignedIn && !isRecruiterAcc && (
        <SlideNavLink path={"/login"} label={"Login"} showIcon={icons} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <SlideNavLink
          path={isSignedIn ? "/user" : "/recruiter"}
          label={"Profile"}
          showIcon={icons}
        />
      )}

      {!isSignedIn && !isRecruiterAcc && (
        <SlideNavLink path={"/register"} label={"Register"} showIcon={icons} />
      )}

      <SlideNavLink path={"/"} label={"Home"} showIcon={icons} />

      <SlideNavLink path={"/jobs"} label={"Jobs"} showIcon={icons} />

      {icons !== false && (
        <SlideNavLink path={"/about"} label={"About"} showIcon={icons} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <SlideNavLink
          path={"/login"}
          label={"Logout"}
          showIcon={icons}
          clickfunction={logoutClick}
        />
      )}
    </>
  );
}

export default SlideNavLinkList;
