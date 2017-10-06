"use strict";

import Home from './../front-end/pages/home';
import MeetingEvents from './../front-end/pages/meetingEvents';
import YearlyEvents from './../front-end/pages/yearlyEvents';

export default function setRoutes(app) {
    app.get('/service/permissions/pages', function(req, res) {
        res.send([
            Home.id,
            MeetingEvents.id,
            YearlyEvents.id
        ]);
    });

    app.get('*', function(req, res){
        res.status(404).send("Not found!");
    })
}