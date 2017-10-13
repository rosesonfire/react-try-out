"use strict";

import React from "react";
import ReactDOM from "react-dom";
import fetch from "node-fetch";
import App from "./app/components/app";
import registeredPages from "./registry/pages";

// ========== Initialize application ==========

async function getPages() {

    //TODO: url should come from some configuration
    const response = await fetch("http://localhost:8090/service/permissions/pages");
    const responseIds = await response.json();
    const pages = registeredPages.filter(page => responseIds.includes(page.id));

    return pages;

}

async function start() {

    const pages = await getPages();
    const mainContainerElement =  document.getElementById("main-container");
    
    ReactDOM.render(
        <App pages={pages}/>,
        mainContainerElement
    );

}

start().catch(err => {
    console.error(err.message);
});