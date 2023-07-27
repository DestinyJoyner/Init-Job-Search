import { useContextProvider } from "../../../../Providers/Provider";
import { useNavProvider } from "../../../../Providers/NavProvider";
import SlideNavLink from "./SlideNavLink";

function SlideNavLinkList() {
  const {
    isSignedIn,
    isRecruiterAcc,
    setIsSignedIn,
    setRecruiterID,
    setIsRecruiterAcc,
    setUserID,
  } = useContextProvider();
  const { navbarClick } = useNavProvider();

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

  return (
    <>
      {!isSignedIn && !isRecruiterAcc && (
        <SlideNavLink path={"/login"} label={"Login"} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <SlideNavLink
          path={isSignedIn ? "/user" : "/recruiter"}
          label={"Profile"}
        />
      )}

      {!isSignedIn && !isRecruiterAcc && (
        <SlideNavLink path={"/register"} label={"Register"} />
      )}

      <SlideNavLink path={"/"} label={"Home"} />

      <SlideNavLink path={"/jobs"} label={"Jobs"} />

      <SlideNavLink path={"/about"} label={"About"} />

      {(isSignedIn || isRecruiterAcc) && (
        <SlideNavLink
          path={"/login"}
          label={"Logout"}
          clickfunction={logoutClick}
        />
      )}
    </>
  );
}

export default SlideNavLinkList;
