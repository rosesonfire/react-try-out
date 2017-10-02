"use strict";

export default function setRoutes(app) {
    app.get(/service\/*/, function(req, res) {
        res.send("Hello world!");
    });

    app.get(/\/[^\/]*$/, function(req, res){
        res.redirect("/");
    })
}