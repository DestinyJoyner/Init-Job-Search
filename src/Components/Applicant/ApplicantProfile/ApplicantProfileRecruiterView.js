import { useEffect } from "react";
import { useContextProvider } from "../../../Providers/Provider";

function ApplicantProfileRecruiterView(props) {
  const { loading, setLoading } = useContextProvider();

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return !loading && (
    <div className="grid-center">
      <img src ="https://hubcityorthodontics.com/wp-content/uploads/2022/09/Under_Construction_Warning_Sign_PNG_Clipart-839.png" alt ="construction" height={"200px"}/>
    </div>
    );
}

export default ApplicantProfileRecruiterView;
