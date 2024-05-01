import { loadingMessages } from "./LoadingMessages";
import initLogo from "../../../Assets/footer-logo.png";
import loadingScreen from "../../../Assets/loading-screen.gif"
import "./Loading.scss";

function Loading() {
  const loadingIndex = Math.floor(Math.random() * loadingMessages.length)

  const randomLoadingMessage = loadingMessages[loadingIndex]

  return (
    <div className="loadingPage grid-center">
      <section className="loadingPage_message">
        <img
          src={initLogo}
          alt="init-logo"
          className="loadingPage_message_logo"
        />
        <p>{randomLoadingMessage}</p>
        <img src={loadingScreen} alt="loading-spinner"
        className="loadingPage_message_spinner" />
      </section>
    </div>
  );
}

export default Loading;