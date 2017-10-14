"use strict";

import React from "react";
import ReactDOM from "react-dom";
import fetch from "node-fetch";
import App from "./app/components/app";
import registeredPages from "./registry/pages";
import { frontEndConfig } from './../config';

// ========== Initialize application ==========

async function getPages() {

    const response = await fetch(`http://${frontEndConfig.host}:${frontEndConfig.port}/service/permissions/pages`);
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