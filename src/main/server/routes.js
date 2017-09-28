"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Container from './../components/container'

export default function setRoutes(app) {
    app.get("/", function(req, res) {
        res.send(ReactDOMServer.renderToString(<Container />));
    });
}