"use strict";

export default class Router {

    constructor(pagesController, passport) {
    
        this.pagesController = pagesController;
        this.passport = passport;

    }

    setRoutes(app) {

        app.post(
            '^/service/authenticate$', 
            this.passport.authenticate(
                'basic-login',
                {
                    session: false,
                    failureRedirect: '/service/unauthorized'
                }
            ),
            function(req, res) {
                console.log(req.user);
                res.json({ message: "Authenticated" })
            }
        );

        app.get("^/service/unauthorized$", function(req, res) {

            res.send("Not authorized");

        });

        app.get(
            "^/service/permissions/pages$",
            this.pagesController.getPageIds.bind(this.pagesController)
        );
    
        app.get("^/$", function(req, res){

            res.status(404).send("Not found!");

        })
    
        app.get("*", function(req, res){

            res.redirect("/");
            
        });
    }
}