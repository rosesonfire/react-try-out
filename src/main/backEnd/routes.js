"use strict";

export default async function setRoutes(_app, _db) {

    const app = await _app;
    const db = await _db;

    app.get("^/service/permissions/pages$", function(req, res) {

        res.send([
            "page_home",
            "page_meeting_events",
            "page_yearly_events"
        ]);
    });

    app.get("^/$", function(req, res){
        res.status(404).send("Not found!");
    })

    app.get("*", function(req, res){
        res.redirect("/");
    });
}