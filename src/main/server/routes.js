"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Index from './../front-end/views'

export default function setRoutes(app) {
    app.get("/", function(req, res) {
        res.send(ReactDOMServer.renderToString(<Index />));
    });
}