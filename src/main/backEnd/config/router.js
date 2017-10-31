"use strict";

export default class Router {

    constructor(pagesController, passport) {
    
        this.pagesController = pagesController;
        this.passport = passport;

    }

    setRoutes(app) {

        app.get("^/service/unauthorized$", function(req, res) {

            res.status(401).send("Not authorized");

        });

        app.get(
            "^/service/pages$",
            this.passport.authenticate("token", { 
                session: false,
                failureRedirect: "/service/unauthorized" 
            }),
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