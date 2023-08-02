import initLogo from "../../../Assets/footer-logo.png";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loadingPage grid-center">
      <section className="loadingPage_message">
        <img
          src={initLogo}
          alt="init-logo"
          className="loadingPage_message_logo"
        />
        <span>Loading...</span>
      </section>
    </div>
  );
}

export default Loading;
