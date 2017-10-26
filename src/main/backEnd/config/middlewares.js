"use strict";

import { Strategy as CustomStrategy } from 'passport-custom';

export default class Middlewares {

    constructor(User, config) {

        this.User = User;
        this.config = config;

    }

    setPassportConfig() {

        this.config.passport.use("basic-login", new CustomStrategy(
            function(req, done) {

                this.findOne(
                    {
                        username: req.body.username,
                        password: req.body.password
                    },
                    function (err, user) {
                    
                        return done(err, user);
                
                    }
                );
            }.bind(this.User)
        ));
    }

    setMiddlewares(app) {

        this.setPassportConfig();

        app.use(this.config.bodyParser.json());
        app.use(this.config.passport.initialize());

    }
}