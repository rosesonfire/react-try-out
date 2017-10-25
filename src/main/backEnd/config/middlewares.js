"use strict";

import bodyParser from 'body-parser';

export default class Middlewares {

    setMiddlewares(app) {

        app.use(bodyParser.json());

    }
}