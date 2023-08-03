import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function handleApplicantLogin(
  resData,
  setUser,
  setRecruiter,
  setSignedIn,
  setRecruiterAcc,
  navigate
) {
  setUser(resData.user_id);
  localStorage.setItem("userID", resData.user_id);
  if (localStorage.getItem("recruiterID")) {
    localStorage.removeItem("recruiterID");
  }
  setRecruiter(null);
  setSignedIn(true);
  setRecruiterAcc(false);
  navigate("/user");
}

function handleRecruiterLogin(
  resData,
  setUser,
  setRecruiter,
  setSignedIn,
  setRecruiterAcc,
  navigate
) {
  setRecruiter(resData.recruiter_id);
  localStorage.setItem("recruiterID", resData.recruiter_id);
  if (localStorage.getItem("userID")) {
    localStorage.removeItem("userID");
  }
  setSignedIn(false);
  setRecruiterAcc(true);
  setUser(null);
  navigate("/recruiter");
}

function handleLoginSubmit(
  e,
  formObj,
  setToken,
  setUser,
  setRecruiter,
  setSignedIn,
  setRecruiterAcc,
  navigate
) {
  e.preventDefault();
  const { isRecruiter } = formObj;

  const callRoute = isRecruiter ? "recruiters-logins" : "logins";
  
  axios
    .post(`${API}/${callRoute}`, formObj)
    .then(({ data }) => {
      setToken(data.token);
      isRecruiter
        ? handleRecruiterLogin(
            data,
            setUser,
            setRecruiter,
            setSignedIn,
            setRecruiterAcc,
            navigate
          )
        : handleApplicantLogin(
            data,
            setUser,
            setRecruiter,
            setSignedIn,
            setRecruiterAcc,
            navigate
          );
    })
    .catch((error) => {
      console.log(error);
      setFailedLogin(true);
    });
}

export { handleLoginSubmit };
