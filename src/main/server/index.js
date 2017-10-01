"use strict";

import express from 'express';
import setRoutes from './../back-end/routes';
import path from 'path'

const app = express();

app.set('port', 8080);

// === Middlewares ===

app.use(express.static('public'));
// app.use(express.static('bower_components'));

// ===

setRoutes(app);

app.listen(app.get('port'), function(){
    console.log("server started at port 8080");
});