"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Container from './../components/container'

import Index from './../views'

export default function setRoutes(app) {
    app.get("/", function(req, res) {
        res.send(ReactDOMServer.renderToString(<Index />));
    });
}