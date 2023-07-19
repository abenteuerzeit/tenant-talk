import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import "./index.css";
import App from "./App";
import i18n from "./utils/i18n";
import { I18nextProvider as I18Provider } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const basename = process.env.PUBLIC_URL;

const history = createBrowserHistory({ basename });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <I18Provider i18n={i18n}>
            <Router history={history}>
                <App />
            </Router>
        </I18Provider>
    </React.StrictMode>
);

reportWebVitals();
