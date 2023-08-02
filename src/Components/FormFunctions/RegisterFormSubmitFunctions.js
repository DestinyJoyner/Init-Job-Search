import axios from "axios";
const API = process.env.REACT_APP_API_URL;

// applicant submit
function handleApplicantRegisterForm(e, formObj,setRecruiter,
    setSignedIn,
    setUser,
    setRecruiterAcc,
    setToken,
    navigate) {
    e.preventDefault();

    const { first_name, last_name, education, email, password} =
      formObj;
  
    const reqObj = {
      profile: {
        first_name: first_name,
        last_name: last_name,
        education: education
      },
      login: {
        email: email,
        password: password,
      },
      skills: []
    };

    axios.post(`${API}/users`,reqObj)
    .then(({data}) => {
        // set second registerform state true
        setRecruiter(null)
        setSignedIn(true)
        setRecruiterAcc(false)
        setUser(data.id)
    })
    .then(() => {
        axios.post(`${API}/logins`, reqObj["login"])
        .then(({data}) => {
            setToken(data.token)
            navigate("/register-continue")
        })
    })
    .catch(err=> console.log(err))
}

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
      organization: organization,
    },
    login: {
      email: email,
      password: password,
      isRecruiter: isRecruiter,
    },
  };

  axios
    .post(`${API}/recruiters`, reqObj)
    .then(({ data }) => {
      setRecruiter(data.id);
      setSignedIn(false);
      setRecruiterAcc(true);
      setUser(null);
    })
    .then(() => {
      axios
        .post(`${API}/recruiters-logins`, reqObj["login"])
        .then(({ data }) => {
          setToken(data.token);
          navigate("/jobs/new");
        });
    })
    .catch((err) => console.log(err));
}

export { handleApplicantRegisterForm, handleRecruiterRegisterForm };
