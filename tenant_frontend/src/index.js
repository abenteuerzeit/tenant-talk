import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "./utils/i18n";
import { I18nextProvider as I18Provider } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <I18Provider i18n={i18n}>
            <Router>
                <App />
            </Router>
        </I18Provider>
    </React.StrictMode>
);

reportWebVitals();
