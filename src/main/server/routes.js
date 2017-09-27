"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';   

export default function setRoutes(app) {
    app.get("/", function(req, res){
        const header = <div>
            <h1>Hello world, How are you?</h1>
        </div>;

        res.send(ReactDOMServer.renderToString(header));
    });
}