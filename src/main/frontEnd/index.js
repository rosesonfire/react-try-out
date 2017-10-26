"use strict";

import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/app";
import { frontEndConfig } from "./../config";

// ========== Initialize application ==========

async function start() {

    const mainContainerElement = document.getElementById("main-container");
    
    ReactDOM.render(<App />, mainContainerElement);

}

start().catch(err => {

    console.error(err.message);
    
});