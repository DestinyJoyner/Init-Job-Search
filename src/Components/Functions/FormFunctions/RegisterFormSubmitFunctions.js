import axios from "axios";
const API = process.env.REACT_APP_API_URL;

// applicant submit
function handleApplicantRegisterForm(
  e,
  formObj,
  setRecruiter,
  setSignedIn,
  setUser,
  setRecruiterAcc,
  setToken,
  navigate,
  setRegisterTwoForm
) {
  e.preventDefault();
  // setRegisterTwoForm(true);

  const { first_name, last_name, education, email, password } = formObj;

  const reqObj = {
    profile: {
      first_name: first_name,
      last_name: last_name,
      education: education,
      project : {
        project_name: "",
        project_link: "",
        project_description:""
    }
    },
    login: {
      email: email,
      password: password,
    },
    skills: [],

  };

  axios.post(`${API}/users`, reqObj)
    .then(({ data }) => {
      // setRegisterTwoForm(true);
      console.log("data", data)
      localStorage.setItem("userID", data.id)
      setRecruiter(null);
      setSignedIn(true);
      setRecruiterAcc(false);
      setUser(data.id);
    })
    .then(() => {
      console.log(reqObj, "data before post register")
      axios.post(`${API}/logins`, reqObj["login"]).then(({ data }) => {
        setToken(data.token);
        setRegisterTwoForm(true);
      });
    })
    .catch((err) => console.log(err));
}

// applicant form 2 submit (put)
const handleApplicantFormTwoSubmit = (e, formObj, skillsArr, userID, navigate) => {
  e.preventDefault();
  const { id } = formObj;
  // console.log(formObj)
  axios.put(`${API}/users/${userID}`, {
      profile: formObj,
      skills: skillsArr,
    })
    .then(() => {
      navigate("/user");
    })
    .catch((err) => console.log(err));
};

// recruiter submit
function handleRecruiterRegisterForm(
  e,
  formObj,
  setRecruiter,
  setSignedIn,
  setUser,
  setRecruiterAcc,
  setToken,
  navigate
) {
  e.preventDefault();

  const { first_name, last_name, organization, email, password, isRecruiter } =
    formObj;

  const reqObj = {
    profile: {
      first_name: first_name,
      last_name: last_name,
      organization: organization
    },
    login: {
      email: email,
      password: password,
      isRecruiter: isRecruiter
    }
  };

  axios.post(`${API}/recruiters`, reqObj)
    .then(({ data }) => {
      setRecruiter(data.id);
      setSignedIn(false);
      setRecruiterAcc(true);
      setUser(null);
    })
    .then(() => {
      axios.post(`${API}/recruiters-logins`, reqObj["login"])
        .then(({ data }) => {
          setToken(data.token);
          navigate("/jobs/new");
        });
    })
    .catch((err) => console.log(err));
}

export {
  handleApplicantRegisterForm,
  handleRecruiterRegisterForm,
  handleApplicantFormTwoSubmit,
};
