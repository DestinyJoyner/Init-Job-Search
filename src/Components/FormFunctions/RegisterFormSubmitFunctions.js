import axios from "axios";
const API = process.env.REACT_APP_API_URL;

  // applicant submit
  function handleApplicantRegisterForm() {

  }

  // recruiter submit
  function handleRecruiterRegisterForm (e, formObj,setRecruiter,setSignedIn,setUser,setRecruiterAcc, setToken, navigate) {
    e.preventDefault()
    console.log(formObj)
    const { first_name, last_name, organization, email, password, isRecruiter} = formObj

    const reqObj = {
      "profile" : {
        "first_name" : first_name,
        "last_name" : last_name,
        "organization" : organization
      },
      "login" : {
        "email" : email,
        "password" : password,
        "isRecruiter" : isRecruiter
      }
    }
console.log(reqObj, "obj")
    axios.post(`${API}/recruiters`, reqObj)
    .then(({data}) =>{
        console.log(data)
        setRecruiter(data.id);
        setSignedIn(false);
        setRecruiterAcc(true);
        setUser(null);
    })
    .then(() => {
        axios.post(`${API}/recruiters-logins`, reqObj["login"])
        .then(({data}) => {
            console.log(data,"login")
            setToken(data.token)
            navigate("/jobs/new")
        })
    })
    .catch(err=> console.log(err))
  }

  export {
    handleApplicantRegisterForm,
    handleRecruiterRegisterForm
  }