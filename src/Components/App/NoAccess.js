import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../Providers/Provider";
import logo from "../../Assets/LOGO.png";
import "./NoAccess.scss";

function NoAccess() {
  const { setLoading, loading } = useContextProvider();
  useEffect(() => setLoading(false), [loading]);

  return (
    !loading &&
    <div className="userLoginPrompt center">
      <h2>Login to access your profile</h2>
      <Link className="userLoginPrompt_link" to="/login">
        LOGIN
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default NoAccess;
