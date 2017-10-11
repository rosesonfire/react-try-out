"use strict";

export default function setRoutes(app) {
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