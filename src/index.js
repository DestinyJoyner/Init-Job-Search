import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./Providers/Provider";
import WindowSizeProvider from "./Providers/WindowSizeProvider";
import SkillProvider from "./Providers/SkillProvider";
import "./index.css";
import ScrollToTop from "./Components/App/ScrollToTop/ScrollToTop";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <WindowSizeProvider>
      <Provider>
        <SkillProvider>
          <ScrollToTop />
          <App />
        </SkillProvider>
      </Provider>
      </WindowSizeProvider>
    </React.StrictMode>
  </Router>
);
