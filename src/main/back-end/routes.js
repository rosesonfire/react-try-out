"use strict";

export default function setRoutes(app) {
    app.get("/", function(req, res) {
        res.send("Hello world!");
    });
}