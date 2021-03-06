import React from "react";
import ReactDOM from "react-dom";

import Router from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";

// const webpackVariables

import ENVIRONMENT from "ENVIRONMENT";

console.log({ ENVIRONMENT });

// const IS_SERVER = true;

const App = () => (
    <Provider store={store}>
        <ToastProvider>
            <Router />
        </ToastProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
