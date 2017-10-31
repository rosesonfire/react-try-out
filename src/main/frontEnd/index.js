"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import reduxLoggerMiddleware from "redux-logger";
import { Provider } from "react-redux";
import App from "./app/components/app";
import { frontEndConfig } from "./../config";
import reducers from "./app/reducers/reducers";

// ========== Initialize application ==========

function createReduxStore() {

    const middlewares = applyMiddleware(reduxLoggerMiddleware, reduxPromiseMiddleware());
    const store = createStore(reducers, {}, middlewares);

    return store;

}

async function start() {

    const store = createReduxStore();

    const mainContainerElement = document.getElementById("main-container");
    
    ReactDOM.render(<Provider store={store}><App /></Provider>, mainContainerElement);

}

start().catch(err => {

    console.error(err.message);
    
});