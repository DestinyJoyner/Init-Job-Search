import { useContextProvider } from "../../../../Providers/Provider";
import { useNavProvider } from "../../../../Providers/NavProvider";
import SlideNavLink from "./SlideNavLink";

function SlideNavLinkList({icons}) {
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
        <SlideNavLink 
        path={"/login"} 
        label={"Login"}
        showIcon={icons} />
      )}

      {(isSignedIn || isRecruiterAcc) && (
        <SlideNavLink
          path={isSignedIn ? "/user" : "/recruiter"}
          label={"Profile"}
          showIcon={icons}
        />
      )}

      {!isSignedIn && !isRecruiterAcc && (
        <SlideNavLink 
        path={"/register"} 
        label={"Register"}
        showIcon={icons} />
      )}

      <SlideNavLink 
      path={"/"} 
      label={"Home"}
      showIcon={icons} />

      <SlideNavLink 
      path={"/jobs"} 
      label={"Jobs"}
      showIcon={icons} />

      { icons !== false && <SlideNavLink 
      path={"/about"} 
      label={"About"}
      showIcon={icons} />}

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
