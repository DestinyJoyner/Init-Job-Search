import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import initWhiteLogo from "../../../../../Assets/init-no-text.png";
import { registerAccountTypeObj } from "../../../../App/Data/RegisterAccountTypeObject";
import "./DesktopRegisterAccountType.scss";

function DesktopRegisterAccountType({ accountToggle }) {
  const { applicant, recruiter } = registerAccountTypeObj;
  const [account, setAccount] = useState(applicant);

  const header = !accountToggle ? "a Recruiter" : "an Applicant";

  useEffect(() => {
    if (accountToggle) {
      setAccount(applicant);
    } else {
      setAccount(recruiter);
    }
  }, [accountToggle]);

  return (
    <div className="desktopRegisterAccountType">
      <section className="desktopRegisterAccountType_header">
        <img
          className="desktopRegisterAccountType_header_logo"
          src={initWhiteLogo}
          alt="init-logo"
        />

        <h1>How inIt Works for you: </h1>
      </section>

      <h2>As {header}...</h2>

      <div className="desktopRegisterAccountType_image">
        <img
          className={
            !accountToggle
              ? "desktopRegisterAccountType_image_recruiter"
              : "desktopRegisterAccountType_image_applicant"
          }
          src={account.image}
          alt="account-type"
        />
      </div>

      <ul>
        {account.listItems.map((el) => (
          <li key={uuidv4()}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopRegisterAccountType;
