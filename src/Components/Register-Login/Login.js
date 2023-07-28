import { useState, useEffect } from "react";
import { useContextProvider } from "../../Providers/Provider.js";
import { useNavProvider } from "../../Providers/NavProvider.js";
import { useRecruiterProvider } from "../../Providers/RecruiterProvider.js";
import { Link, useNavigate } from "react-router-dom";
import ShowPass from "./ShowPass.js";
import { loginEmail, loginPassword, recruiter } from "../Job/Data/Icons.js";
import initLogo from "../../Assets/LOGO.png"
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const { axios,
    API,
    setRecruiterID,
    setIsSignedIn,
    setAuthToken,
    setIsRecruiterAcc,
    setUserID,} = useContextProvider()
    const {setAppHeader} = useNavProvider()
  const {
    isPassHidden,
    setIsPassHidden,
  } = useRecruiterProvider();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isRecruiter: false,
  });
  const [failedLogin, setFailedLogin] = useState(false);

  const handleChange = (event) => {
    if (event.target.id === "isRecruiter") {
      setLoginForm({ ...loginForm, isRecruiter: !loginForm.isRecruiter });
    } else {
      setFailedLogin(false);
      setLoginForm({ ...loginForm, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setFailedLogin(false);
    const { isRecruiter } = loginForm;
    const callRoute = isRecruiter ? "recruiters-logins" : "logins";
    axios
      .post(`${API}/${callRoute}`, loginForm)
      .then(({ data }) => {
        // console.log(data);
        setAuthToken(data.token);
        if (isRecruiter) {
          setRecruiterID(data.recruiter_id);
          localStorage.setItem("recruiterID", data.recruiter_id);
          if (localStorage.getItem("userID")) {
            localStorage.removeItem("userID");
          }
          setIsSignedIn(false);
          setIsRecruiterAcc(true);
          setUserID(null);
          navigate("/recruiter");
        } else {
          setUserID(data.user_id);
          localStorage.setItem("userID", data.user_id);
          if (localStorage.getItem("recruiterID")) {
            localStorage.removeItem("recruiterID");
          }
          setRecruiterID(null);
          setIsSignedIn(true);
          setIsRecruiterAcc(false);
          navigate("/user");
        }
      })
      .catch((error) => {
        console.log(error);
        setFailedLogin(true);
      });
  };
useEffect(() => {
  setAppHeader("Log In")
}, [])

  return (
    <div className="login grid-center">
      <section className="login_header">
        <img 
        className="login_header_logo"
        src={initLogo} alt="logo" />
        <span className="slideNav_header_slogan">Your first tech opportunity awaits</span>
      </section>
      
      <form className="login_form grid-center" onSubmit={handleSubmit}>
        <label 
        className="login_form_label"
        htmlFor="email">{loginEmail}
        <input
          id="email"
          type="email"
          placeholder="Email address"
          className="login_form_input"
          value={loginForm.email}
          onChange={handleChange}
          required
        />
        </label>
        
        <label 
        className="login_form_label"
        htmlFor="password">{loginPassword}
        <input
          id="password"
          type={isPassHidden ? "password" : "text"}
          placeholder="Password"
          className="login_form_input"
          value={loginForm.password}
          onChange={handleChange}
          required
        />
        </label>

        <label 
        className="login_form_isRecruiter_label"
        htmlFor="isRecruiter">
           {recruiter}
         <input
          id="isRecruiter"
          type="checkbox"
          checked={loginForm.isRecruiter}
          className="login_form_isRecruiter"
          onChange={handleChange}
        />
          <span className="login_form_isRecruiter_label_text" >
         I am a Recruiter
          </span>
        </label>
       
        <input className="login_form_submit" type="submit" value="LOG IN" />
      </form>
      {failedLogin && 
      <div className="recruiter-login-error">"Invalid email, or password"</div>
      }
      <Link 
      to="/register"
      className="login_register">
        New to inIT? <br/>Create an account</Link>

        <ShowPass stateVar={isPassHidden} setFunction={setIsPassHidden} />
    </div>
  );
}
